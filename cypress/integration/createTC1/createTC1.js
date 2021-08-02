import {Given,And, Then,When} from "cypress-cucumber-preprocessor/steps"

Given('User bought the device and security product at Retail Store e.g. Bestbuy, Staples, Walmart and registers with TechBench services e.g. Geeksquad to onboard his device with security product by providing customer information like email address',  ()=> {
  cy.visit('http://localhost:53457/swagger/index.html?urls.primaryName=V2')
});


When('Techbench agent initiates Techbench Application to initiate Security Product by calling McAfee Backend B2B APIs by providing Customer and his purchase information like Customer ID, Product ID, Work Order ID',async function(){
  
  var request = JSON.stringify({
    "partnerTransactionId": "zzxxcc",
    "subscriptions": [
      {
        "customerId": "CUST1500-11082020NIK93",
        "emailId": "email2219991301EFG39@dispostable.com",
        "firstName": "EFG39",
        "lastName": "LNEFG39",
        "isFakeEmail": "false",
        "products": [
          {
            "productId": "752-11-51614",
            "ExtendedInfo": {
                "clientuniqueId": "DUI349-11082020NIK93"
            }
          }
        ]
      }
    ]
  })

  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div').click()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section-header > div.try-out > button').click()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.parameters-container > div > table > tbody > tr:nth-child(1) > td.parameters-col_description > input[type=text]').type("752")
  //cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-section-header > label > div > select').select()
  //cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-section-header > label > div > select').select()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-description-wrapper > div > div > div > textarea').clear()
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.opblock-section > div.opblock-section.opblock-section-request-body > div.opblock-description-wrapper > div > div > div > textarea').type(request ,{ parseSpecialCharSequences: false })
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.execute-wrapper > button').click()
})



Then('McAfee Retail associated subscription should be created for the requested Retail Customer',async function(){
  cy.wait(30000)
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status').eq(0).should('contain',"201")
})