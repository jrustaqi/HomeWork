package pages;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBase {

public static WebDriver driver;
	
	public static void initDriver() {
		  System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
		  driver = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.manage().deleteAllCookies();
		  driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		 }
	
	
	public int generateRandomNo(int boundaryNo) {
		Random rnd = new Random();
		int generatedNo = rnd.nextInt(boundaryNo);
		return generatedNo;
	}
	
	public void takeScreenshot (WebDriver driver){
		TakesScreenshot ts = (TakesScreenshot) driver;						//it called type casting
//		ts.getScreenshotAs(OutputType.FILE);
		File sourceFile = ts.getScreenshotAs(OutputType.FILE);

		SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();												//import if from java.util
		String label = formatter.format(date);
		try {
//			FileUtils.copyFile(sourceFile, new File(System.getProperty("user.dir") + "/screenshot/" + System.currentTimeMillis() + ".png"));
			FileUtils.copyFile(sourceFile, new File(System.getProperty("user.dir") + "/screenshot/" + label + ".png"));		//import from io
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
}
