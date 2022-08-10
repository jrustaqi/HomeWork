	Feature: TechFios bank and cash New Account functionality

	@Scenario1		
	Scenario Outline: User should be able to login with valid credentials and open a new account	
		Given User is on the techfios login page 
		When User enters the "<username>"
		When User enters the"<password>"
		And  User clicks on loginButton
		Then User should land on Dashboard page 
		When User clicks on bankCash 
		And User clicks on newAccount
		Then User should land on accounts page
		And User enters"<accountTitle>"accountTitle in accounts page 
		And User enters"<description>"description in accounts page 
		And User enters"<initialBalance>"initialBalance in accounts page 
		And User enters"<accountNumber>"accountNumber in accounts page 
		And User enters"<contactPerson>"contactPerson in accounts page 
		And User enters"<phone>"phone in accounts page 
		And User enters"<internetBankingURL>"internetBankingURL in accounts page 
		And User clicks on submitButton
		Then User should be able to validate account created successfully
	
	Examples:
	| username					| password | loginButton | bankAndCash | newAccount | accountTitle | description | initialBalance | accountNumber | contactPerson | phone		   | internetBankingURL	   | submitButton |
	| demo@techfios.com | abc123	 | loginButton | bankAndCash | newAccount | mortgage1	   | Charity		 | 2412134				| 12131416			| Boss					| 2243366789 | https://www.chase.com | submitButton |