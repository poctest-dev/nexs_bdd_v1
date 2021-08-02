Feature: Default

	
	@CucPLAT-47
	Scenario: CUC-Enroll a new user subscription even after network disruption
		Given User bought the device and security product at Retail Store e.g. Bestbuy, Staples, Walmart, and registers with TechBench services e.g. Geeksquad to onboard his device with security product by providing customer information like email address
		When Techbench agent initiates Security Product by calling McAfee Backend B2B APIs by providing Customer and his purchase information like Customer ID, Product ID, Work Order ID. This request is same as the previous request due to network issue, TechBench agent did not received the response from McAfee end
		Then McAfee Retail subscription associated with existing Work order ID will be returned if it is created in the previous request, else new subscription will get created