$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/TechFiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "TechFios bank and cash New Account functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on loginButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters\"\u003caccountTitle\u003e\"accountTitle in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"\u003cdescription\u003e\"description in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"\u003cinitialBalance\u003e\"initialBalance in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"\u003caccountNumber\u003e\"accountNumber in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"\u003ccontactPerson\u003e\"contactPerson in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"\u003cphone\u003e\"phone in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"\u003cinternetBankingURL\u003e\"internetBankingURL in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginButton",
        "bankAndCash",
        "newAccount",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingURL",
        "submitButton"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "loginButton",
        "bankAndCash",
        "newAccount",
        "mortgage1",
        "Charity",
        "2412134",
        "12131416",
        "Boss",
        "2243366789",
        "https://www.chase.com",
        "submitButton"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2902595600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Scenario1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the\"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on loginButton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should land on accounts page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User enters\"mortgage1\"accountTitle in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters\"Charity\"description in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters\"2412134\"initialBalance in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters\"12131416\"accountNumber in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters\"Boss\"contactPerson in accounts page",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters\"2243366789\"phone in accounts page",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters\"https://www.chase.com\"internetBankingURL in accounts page",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 3215778400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "LoginStepDefination.user_enters_the_username(String)"
});
formatter.result({
  "duration": 3119871100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 16
    }
  ],
  "location": "LoginStepDefination.user_enters_the_password(String)"
});
formatter.result({
  "duration": 3093660600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_loginButton()"
});
formatter.result({
  "duration": 9718075500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 295053600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 63249000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 728811300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_land_on_accounts_page()"
});
formatter.result({
  "duration": 245690000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mortgage1",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_accountTitle_in_accounts_page(String)"
});
formatter.result({
  "duration": 106629200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Charity",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_description_in_accounts_page(String)"
});
formatter.result({
  "duration": 130891600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2412134",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_in_initialBalance_accounts_page(String)"
});
formatter.result({
  "duration": 124751500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12131416",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_accountNumber_in_accounts_page(String)"
});
formatter.result({
  "duration": 125201800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boss",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_contactPerson_in_accounts_page(String)"
});
formatter.result({
  "duration": 128047100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2243366789",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_phone_in_accounts_page(String)"
});
formatter.result({
  "duration": 187640200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.chase.com",
      "offset": 12
    }
  ],
  "location": "LoginStepDefination.user_enters_internetBankingURL_in_accounts_page(String)"
});
formatter.result({
  "duration": 116789200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_submit_submitButton()"
});
formatter.result({
  "duration": 3637389900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 255288200,
  "status": "passed"
});
});