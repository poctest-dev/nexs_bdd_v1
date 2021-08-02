import {Given,And, Then,When} from "cypress-cucumber-preprocessor/steps"

Given('User bought the device and security product at Retail Store e.g. Bestbuy, Staples, Walmart, and registers with TechBench services e.g. Geeksquad to onboard his device with security product by providing customer information like email address',  ()=> {
  cy.visit('http://localhost:53457/swagger/index.html?urls.primaryName=V2')
});


When('Techbench agent initiates Security Product by calling McAfee Backend B2B APIs by providing Customer and his purchase information like Customer ID, Product ID, Work Order ID. This request is same as the previous request due to network issue, TechBench agent did not received the response from McAfee end',async function(){
  
  var request = JSON.stringify({
    "partnerTransactionId": "qqqwwab",
    "subscriptions": [
      {
        "customerId": "CUST1500-11082020NIK89",
        "emailId": "email22131301EFG39@dispostable.com",
        "firstName": "EFG39",
        "lastName": "LNEFG39",
        "isFakeEmail": "false",
        "products": [
          {
            "productId": "752-11-51614",
            "ExtendedInfo": {
                "clientuniqueId": "DUI349-11082020NIK89"
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



Then('McAfee Retail subscription associated with existing Work order ID will be returned if it is created in the previous request, else new subscription will get created', async function(){
  cy.wait(30000)
  cy.get('#operations-POST-post_Subscription_V2__partnerId_ > div:nth-child(2) > div > div.responses-wrapper > div.responses-inner > div > div > table > tbody > tr > td.response-col_status').eq(0).should('contain',"400")
})