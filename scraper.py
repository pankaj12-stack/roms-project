import requests
from bs4 import BeautifulSoup
import json
import time
from urllib.parse import urljoin
import random
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import xml.etree.ElementTree as ET

class RomScraper:
    def __init__(self):
        self.base_url = "https://romsfun.com"
        # Setup Chrome options
        chrome_options = Options()
        chrome_options.add_argument('--headless')  # Run in headless mode
        chrome_options.add_argument('--no-sandbox')
        chrome_options.add_argument('--disable-dev-shm-usage')
        chrome_options.add_argument('--disable-blink-features=AutomationControlled')
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option('useAutomationExtension', False)

        # Initialize the driver
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.execute_cdp_cmd('Network.setUserAgentOverride', {
            "userAgent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        })
        self.roms_data = []

    def get_page_content(self, url):
        try:
            self.driver.get(url)
            time.sleep(random.uniform(2, 4))  # Random delay
            return self.driver.page_source
        except Exception as e:
            print(f"Error getting page content: {str(e)}")
            return None

    def get_sitemap_urls(self, sitemap_url):
        try:
            print("Fetching sitemap...")
            # Use requests to get the sitemap XML
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
            response = requests.get(sitemap_url, headers=headers)
            if response.status_code != 200:
                print(f"Failed to fetch sitemap. Status code: {response.status_code}")
                return []

            # Parse the XML content
            root = ET.fromstring(response.content)
            
            # Define the XML namespace
            namespace = {'ns': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
            
            # Extract URLs from the sitemap
            urls = []
            for url in root.findall('.//ns:loc', namespace):
                if '/roms/' in url.text and url.text.endswith('.html'):
                    urls.append(url.text)

            print(f"Found {len(urls)} URLs from sitemap")
            return urls[:10]  # Start with first 10 for testing

        except Exception as e:
            print(f"Error parsing sitemap: {str(e)}")
            return []

    def scrape_rom_page(self, url):
        try:
            print(f"Accessing {url}")
            page_content = self.get_page_content(url)
            if not page_content:
                return None

            soup = BeautifulSoup(page_content, 'html.parser')

            # Extract data
            title = soup.find('h1', class_='h3')
            title = title.text.strip() if title else None

            # Find console info
            console_row = soup.find('th', string=lambda x: x and 'Console' in x)
            console = console_row.find_next('td').text.strip() if console_row else None

            # Find file size
            size_row = soup.find('th', string=lambda x: x and 'File size' in x)
            file_size = size_row.find_next('td').text.strip() if size_row else None

            # Find image URL
            image = soup.find('img', class_='wp-post-image')
            image_url = image['src'] if image else None

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

    def run(self, sitemap_url):
        try:
            urls = self.get_sitemap_urls(sitemap_url)
            print(f"Found {len(urls)} URLs to scrape")

            for i, url in enumerate(urls):
                print(f"Scraping {i+1}/{len(urls)}: {url}")
                rom_data = self.scrape_rom_page(url)
                if rom_data:
                    self.roms_data.append(rom_data)
                time.sleep(random.uniform(2, 4))  # Random delay between requests

            self.save_to_json()
            print(f"Saved {len(self.roms_data)} items to roms_data.json")
        finally:
            self.driver.quit()

if __name__ == "__main__":
    sitemap_url = "https://romsfun.com/rom-sitemap.xml"
    scraper = RomScraper()
    scraper.run(sitemap_url)