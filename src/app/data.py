from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import xlwt 
from xlwt import Workbook 
option = webdriver.ChromeOptions()
option.add_argument("--incognito")
browser = webdriver.Chrome(executable_path='/home/mukesh/Desktop/backup/Programminghub/whatsapp_python_scripts/chromedriver_linux64/chromedriver', chrome_options=option)
# go to website of interest
browser.get("https://coinranking1.p.rapidapi.com/exchanges")
# wait up to 10 seconds for page to load
timeout = 10
try:
    WebDriverWait(browser, timeout).until(EC.visibility_of_element_located((By.XPATH, "//img[@class='s-access-image cfMarker']")))
except TimeoutException:
    print("Timed out waiting for page to load")
    browser.quit()

titles_element = browser.find_elements_by_xpath("//div[@class='s-item-container']")
titles = []
for x in titles_element:
    value=x.text
    value=value.encode('ascii', 'ignore')
    titles.append(value)
print(titles)