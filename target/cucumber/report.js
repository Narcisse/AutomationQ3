$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AutomationFinalExam.feature");
formatter.feature({
  "line": 2,
  "name": "change Backgroung Color",
  "description": "",
  "id": "change-backgroung-color",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Feature1"
    }
  ]
});
formatter.before({
  "duration": 2248546800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Sky Blue Background",
  "description": "",
  "id": "change-backgroung-color;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundColorChange.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 50431800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorChange.i_click_on_the_button()"
});
formatter.result({
  "duration": 3049938300,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorChange.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 652321200,
  "status": "passed"
});
formatter.before({
  "duration": 1548736600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Sky white Background",
  "description": "",
  "id": "change-backgroung-color;sky-white-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I clicked on the button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the background color will change to sky white",
  "keyword": "Then "
});
formatter.match({
  "location": "BackgroundColorChange.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 13500,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorChange.i_clicked_on_the_button()"
});
formatter.result({
  "duration": 3045932800,
  "status": "passed"
});
formatter.match({
  "location": "BackgroundColorChange.the_background_color_will_change_to_sky_white()"
});
formatter.result({
  "duration": 725968100,
  "status": "passed"
});
});