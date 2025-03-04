import time
import random
import json
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

class SimpleRomScraper:
    def __init__(self):
        self.base_url = "https://romsfun.com"
        self.roms_data = []
        
        # Set up Chrome options
        chrome_options = Options()
        chrome_options.add_argument('--start-maximized')  # Start browser maximized
        chrome_options.add_argument('--disable-infobars')
        chrome_options.add_argument('--disable-extensions')
        
        # Initialize the driver using WebDriver Manager
        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()),  # Let WebDriver Manager handle version automatically
            options=chrome_options
        )

    def get_urls_from_file(self, filename='urls.txt'):
        try:
            print("Reading URLs from file...")
            with open(filename, 'r') as f:
                urls = []
                for line in f:
                    cleaned_line = line.strip()
                    if cleaned_line and cleaned_line.startswith('http'):
                        urls.append(cleaned_line.split('\t')[0])  # Get the URL part
            print(f"Found {len(urls)} URLs in file")
            return urls  # Return all URLs
        except Exception as e:
            print(f"Error reading URLs file: {str(e)}")
            return []

    def scrape_rom_page(self, url):
        try:
            print(f"Accessing {url}")
            self.driver.get(url)
            time.sleep(random.uniform(2, 5))  # Random delay

            # Wait for the page to load and the title to be present
            WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, 'h3')))

            # Extract data
            title = self.driver.find_element(By.CLASS_NAME, 'h3').text.strip()
            console_row = self.driver.find_element(By.XPATH, "//th[contains(text(), 'Console')]")
            console = console_row.find_element(By.XPATH, "following-sibling::td").text.strip()
            size_row = self.driver.find_element(By.XPATH, "//th[contains(text(), 'File size')]")
            file_size = size_row.find_element(By.XPATH, "following-sibling::td").text.strip()
            image = self.driver.find_element(By.CLASS_NAME, 'wp-post-image')
            image_url = image.get_attribute('src') if image else None

            if not any([title, console, file_size, image_url]):
                print(f"No data found for {url}")
                return None

            rom_data = {
                'title': title,
                'console': console,
                'file_size': file_size,
                'image_url': image_url,
                'page_url': url
            }

            print(f"Successfully scraped: {title}")
            return rom_data

        except Exception as e:
            print(f"Error scraping {url}: {str(e)}")
            return None

    def save_to_json(self, filename='roms_data.json'):
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.roms_data, f, indent=4, ensure_ascii=False)

    def run(self):
        try:
            urls = self.get_urls_from_file()
            print(f"Found {len(urls)} URLs to scrape")

            for i, url in enumerate(urls):
                print(f"Scraping {i+1}/{len(urls)}: {url}")
                rom_data = self.scrape_rom_page(url)
                if rom_data:
                    self.roms_data.append(rom_data)
                time.sleep(random.uniform(2, 5))  # Random delay between requests

            self.save_to_json()
            print(f"Saved {len(self.roms_data)} items to roms_data.json")
        except Exception as e:
            print(f"Error during scraping: {str(e)}")
        finally:
            self.driver.quit()  # Close the browser

if __name__ == "__main__":
    scraper = SimpleRomScraper()
    scraper.run()