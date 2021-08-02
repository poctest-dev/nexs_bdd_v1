Feature: Default

	
	@CucPLAT-44
	Scenario: CUC-Enroll a new user subscription through NexS
		Given User bought the device and security product at Retail Store e.g. Bestbuy, Staples, Walmart and registers with TechBench services e.g. Geeksquad to onboard his device with security product by providing customer information like email address  
		When Techbench agent initiates Techbench Application to initiate Security Product by calling McAfee Backend B2B APIs by providing Customer and his purchase information like Customer ID, Product ID, Work Order ID
		Then McAfee Retail associated subscription should be created for the requested Retail Customer