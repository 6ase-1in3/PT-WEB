import bs4
html = open('index.html', encoding='utf-8').read()
open('test.js', 'w', encoding='utf-8').write(bs4.BeautifulSoup(html, 'html.parser').find('script').string)
