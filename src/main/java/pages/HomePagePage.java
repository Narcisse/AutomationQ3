package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class HomePagePage {
	WebDriver driver;

	public HomePagePage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//button[text()='Set SkyBlue Background']")
	WebElement SET_SKY_BLUE_COLOR_BUTTON;
	@FindBy(how = How.XPATH, using = "//*[@id=\"extra\"]/button[2]")
	WebElement SET_WHITE_BACKGROUND_COLOR_BUTTON;

	public void setSkyBlueBackgroundColor() {
		SET_SKY_BLUE_COLOR_BUTTON.click();

		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}

	}

	public void setWhiteBackgroundColor() {
		SET_WHITE_BACKGROUND_COLOR_BUTTON.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
	}
}