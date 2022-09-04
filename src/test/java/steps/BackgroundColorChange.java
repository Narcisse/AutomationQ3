package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePagePage;
import util.BrowserFactory;

public class BackgroundColorChange extends BrowserFactory {

	HomePagePage homePagePage;

	@Before
	public void initRunner() {
		init();

		homePagePage = PageFactory.initElements(driver, HomePagePage.class);
	}

	@Given("^Set SkyBlue Background button exists$")
	public void set_SkyBlue_Background_button_exists() {
	    
	}

	@When("^I click on the button$")
	public void i_click_on_the_button()  {
		homePagePage.setSkyBlueBackgroundColor();
	}

	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue()  {
	   tearDown();
	}

	@Given("^Set SkyWhite Background button exists$")
	public void set_SkyWhite_Background_button_exists() {
	   
	}

	@When("^I clicked on the button$")
	public void i_clicked_on_the_button()  {
		homePagePage.setWhiteBackgroundColor();
	}

	@Then("^the background color will change to sky white$")
	public void the_background_color_will_change_to_sky_white() {
		tearDown();
	}
}
