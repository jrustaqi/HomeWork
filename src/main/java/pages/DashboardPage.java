package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashboardPage {

WebDriver driver;
	
	public DashboardPage(WebDriver driver) {
		this.driver=driver;
	}
	
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Bank & Cash')]") WebElement BANK_CASH_ELEMENT;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'New Account')]") WebElement NEW_ACCOUNT_ELEMENT;
	//@FindBy(how = How.XPATH, using = "//*[@id='side-menu']/li[10]/ul/li[1]/a") WebElement NEW_ACCOUNT_ELEMENT;
	
	public void clickOnCashAndBank() {
		BANK_CASH_ELEMENT.click();
	}

	public void clickOnNewAccount() {
		NEW_ACCOUNT_ELEMENT.click();
	}
	
	public String getPageTitle() {
		  return driver.getTitle();
		 }	
}
