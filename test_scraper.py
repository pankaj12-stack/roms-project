import unittest
from unittest.mock import Mock, patch
from bs4 import BeautifulSoup
from scraper import RomScraper

class TestRomScraper(unittest.TestCase):
    def setUp(self):
        self.scraper = RomScraper()
        
        # Sample HTML for testing
        self.sample_html = '''
        <html>
            <body>
                <h1 class="h3">Test Game Title</h1>
                <table>
                    <tr>
                        <th>Console</th>
                        <td>Test Console</td>
                    </tr>
                </table>
                <span>33.29 M</span>
                <img class="wp-post-image" src="test-image.jpg"/>
            </body>
        </html>
        '''
        
        # Sample sitemap XML
        self.sample_sitemap = '''<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>https://romsfun.com/roms/test-game.html</loc>
            </url>
            <url>
                <loc>https://romsfun.com/other/page.html</loc>
            </url>
        </urlset>
        '''

    @patch('requests.get')
    def test_get_sitemap_urls(self, mock_get):
        # Mock the response
        mock_response = Mock()
        mock_response.content = self.sample_sitemap
        mock_get.return_value = mock_response

        urls = self.scraper.get_sitemap_urls('https://test.com/sitemap.xml')
        
        self.assertEqual(len(urls), 1)
        self.assertTrue('/roms/' in urls[0])

    @patch('requests.get')
    def test_scrape_rom_page(self, mock_get):
        # Mock the response
        mock_response = Mock()
        mock_response.text = self.sample_html
        mock_get.return_value = mock_response

        result = self.scraper.scrape_rom_page('https://test.com/game')
        
        self.assertIsNotNone(result)
        self.assertEqual(result['title'], 'Test Game Title')
        self.assertEqual(result['console'], 'Test Console')
        self.assertEqual(result['image_url'], 'test-image.jpg')

    def test_save_to_json(self):
        import tempfile
        import os
        import json

        # Create a temporary file
        with tempfile.NamedTemporaryFile(delete=False) as tmp:
            self.scraper.roms_data = [{'title': 'Test Game'}]
            self.scraper.save_to_json(tmp.name)

            # Read and verify the saved data
            with open(tmp.name, 'r', encoding='utf-8') as f:
                saved_data = json.load(f)
                self.assertEqual(saved_data, [{'title': 'Test Game'}])

        # Clean up
        os.unlink(tmp.name)

    def test_error_handling(self):
        # Test with invalid URL
        result = self.scraper.scrape_rom_page('invalid-url')
        self.assertIsNone(result)

    def test_data_structure(self):
        # Test the structure of rom_data
        with patch('requests.get') as mock_get:
            mock_response = Mock()
            mock_response.text = self.sample_html
            mock_get.return_value = mock_response

            result = self.scraper.scrape_rom_page('https://test.com/game')
            
            expected_keys = {'title', 'console', 'file_size', 'image_url', 'page_url'}
            self.assertEqual(set(result.keys()), expected_keys)

if __name__ == '__main__':
    unittest.main(verbosity=2) 