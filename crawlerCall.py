import requests

def make_api_call(url, match, max_pages_to_crawl, output_file_name):
    try:
        response = requests.post('https://crawler.pressupwards.com/', json={
            'url': url,
            'match': match,
            'maxPagesToCrawl': max_pages_to_crawl,
            'outputFileName': output_file_name
        })

        print('API response:', response.json())
    except requests.exceptions.RequestException as error:
        print('Error making API call:', error)

# Example usage
make_api_call('https://example.com', ['example'], 10, 'output.json')
