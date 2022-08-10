package steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.DashboardPage;
import pages.LoginPage;
import pages.NewAccountPage;
import pages.TestBase;


public class LoginStepDefination extends TestBase{
	LoginPage loginPage;
	DashboardPage dashboardPage;
	NewAccountPage newAccountPage;
	
	@Before
	public void callFromAnywhere() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		dashboardPage = PageFactory.initElements(driver, DashboardPage.class);
		newAccountPage = PageFactory.initElements(driver, NewAccountPage.class);
	}
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page(){
		//initDriver();
		driver.get("https://www.techfios.com/billing/?ng=login/");
	}

	@When("^User enters the \"([^\"]*)\"$")
	public void user_enters_the_username(String username){
		//loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(username);
	}

	@When("^User enters the\"([^\"]*)\"$")
	public void user_enters_the_password(String password){
		loginPage.enterPassword(password);
	}
	
	@And("^User clicks on loginButton$")
	public void user_clicks_on_loginButton(){
		loginPage.clickSignInButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page(){
		Assert.assertEquals("Dashboard- iBilling", loginPage.getPageTitle());
		takeScreenshot(driver);
	}
	
	@When("^User clicks on bankCash$")
	public void user_clicks_on_bankCash(){
		dashboardPage.clickOnCashAndBank();
	}
	
	@And("^User clicks on newAccount$")
	public void user_clicks_on_newAccount(){
		dashboardPage.clickOnNewAccount();
	}
	
	@Then("^User should land on accounts page$")
	public void user_should_land_on_accounts_page(){
		Assert.assertEquals("Accounts- iBilling", dashboardPage.getPageTitle());
		takeScreenshot(driver);
	}

	@And("^User enters\"([^\"]*)\"accountTitle in accounts page$")
	public void user_enters_accountTitle_in_accounts_page(String accountTitle){
		newAccountPage.enterAccountTitle(accountTitle);
	}
	
	@And("^User enters\"([^\"]*)\"description in accounts page$")
	public void user_enters_description_in_accounts_page(String description){
		newAccountPage.enterDescription(description);
	}
	
	@And("^User enters\"([^\"]*)\"initialBalance in accounts page$")
	public void user_enters_in_initialBalance_accounts_page(String initialBalance){
		newAccountPage.enterInitialBalance(initialBalance);
	}
	
	@And("^User enters\"([^\"]*)\"accountNumber in accounts page$")
	public void user_enters_accountNumber_in_accounts_page(String accountNumber){
		newAccountPage.enterAccountNumber(accountNumber);
	}
	
	@And("^User enters\"([^\"]*)\"contactPerson in accounts page$")
	public void user_enters_contactPerson_in_accounts_page(String contactPerson){
		newAccountPage.enterContactPerson(contactPerson);
	}
	
	@And("^User enters\"([^\"]*)\"phone in accounts page$")
	public void user_enters_phone_in_accounts_page(String phone){
		newAccountPage.enterPhone(phone);
	}
	
	@And("^User enters\"([^\"]*)\"internetBankingURL in accounts page$")
	public void user_enters_internetBankingURL_in_accounts_page(String internetBankingURL){
		newAccountPage.enterInternetBankingURL(internetBankingURL);
	}
	
	@And("^User clicks on submitButton$")
	public void user_clicks_on_submit_submitButton(){
		newAccountPage.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully(){
	Assert.assertEquals("Accounts- iBilling", newAccountPage.getPageTitle());
		takeScreenshot(driver);
	}


	//@After
	public void tearDown(){
		driver.close();
		driver.quit();
	}
}
