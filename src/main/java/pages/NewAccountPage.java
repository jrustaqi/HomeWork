package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccountPage extends TestBase{
	
	WebDriver driver;
	
	public NewAccountPage(WebDriver driver) {
		this.driver = driver;
	}
	
	@FindBy(how = How.XPATH, using = "//input[@id='account']") WebElement ACCOUNT_TITLE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='description']") WebElement DESCRIPTION_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']") WebElement INITIAL_BALANCE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']") WebElement ACCOUNT_NUMBER_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']") WebElement CONTACT_PERSON_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']") WebElement PHONE_ELEMENT;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']") WebElement INTERNET_BANKING_URL_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[@class='btn btn-primary']") WebElement SUBMIT_BUTTON_ELEMENT;
	
	public void enterAccountTitle(String accountTitle) {
		ACCOUNT_TITLE_ELEMENT.sendKeys(generateRandomNo(999) + accountTitle);
	}
	
	public void enterDescription(String description) {
		DESCRIPTION_ELEMENT.sendKeys(description);
	}
	
	public void enterInitialBalance(String initialBalance) {
		INITIAL_BALANCE_ELEMENT.sendKeys(initialBalance);
	}
	
	public void enterAccountNumber(String accountNumber) {
		ACCOUNT_NUMBER_ELEMENT.sendKeys(generateRandomNo(999) + accountNumber);
	}
	
	public void enterContactPerson(String contactPerson) {
		CONTACT_PERSON_ELEMENT.sendKeys(contactPerson);
	}
	
	public void enterPhone(String phone) {
		PHONE_ELEMENT.sendKeys(generateRandomNo(999) + phone);
	}
	
	public void enterInternetBankingURL(String internetBankingURL) {
		INTERNET_BANKING_URL_ELEMENT.sendKeys(internetBankingURL);
	}
	
	public void clickSubmitButton() {
		SUBMIT_BUTTON_ELEMENT.click();
	}

	public String getPageTitle() {
	  return driver.getTitle();
	 }
	
	
	
	
//	public void validateAccountCreatedSuccessfully(){
//	 	for(int i = 1; i<=10; i++){
//	 		 String namesFromList = driver.findElement(By.xpath(before_xpath + i + after_xpath)).getText();
//
//	 		 
//	 		 if (namesFromList.equalsIgnoreCase(insertedName)) {
//	 			 System.out.println("inserted name exist");
//	 			 driver.findElement(By.xpath(before_xpath + i + after_xpath_delete)).click();
//	 			 
//	 		 }
//	 		 break;	 		
//	
	
}
