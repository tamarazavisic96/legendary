MANUAL TASK

Document test cases and for each of the test cases write a short comment explaining why you think that case is important to test.

I used the 20/80 rule to write test cases to cover as many scenarios as possible. I created a flow, starting with negative test scenarios and continuing on to the positive ones. I had user experience and possible automation in mind. I could have written more in-detail test cases if I had more in-detail instructions regarding the application’s correct behaviour. For example, character limit, mandatory fields, number of unsuccessful login attempts, duration of one login session, whether is user automatically logged out if they log in to their account from a different device or browser, accessibility, etc. I had so many ideas but did not know if certain behaviour is a bug or common behaviour. :)

Document all bugs you found during the testing and determine if it is a Front-End or Back-End issue.

As for the bug reports, I organised them into sheets for better transparency. I chose the basic fields but could have added more columns, such as reporter, environment, network, app version, devices, etc.

In Postman create requests (positive and negative scenarios) for the certain API endpoint:

 I created the following Postman collection:

POST : Create new booking - In the first request used dynamic variables and avoided hard-coded ones. In the Pre-request Tab, I generated check-in and check-out dates. I wrote a simple test, just to check if the request is successful.

POST : Create new booking vol 2 - In the second request, I created variables in the Pre-request Script Tab and used them later for the request body. I wrote a multiple-assertion test script to check whether data from the request and response body match. Also, I created bookingId variable and stored the value from the response, for later potential use.

GET : Check if a new booking is in the DB - In the third request, I checked whether a newly created booking is persisted in the database and is part of a response body.

GET : Get a newly created booking - In the fourth request, I got a newly created booking by its ID to check if the route is alright, as well as if data from the response body match the one we forwarded while creating that certain booking.

I tried to update/delete that specific booking, but I do not have permission to do so. 
I used mostly collection variables because global ones must be exported separately, so this was an easier way to avoid potential complications.


AUTOMATION TASK

Part I

Assignment specification
Write test cases to verify the following:
● Verify that the home page is displayed correctly.
● Verify search functionality.
● Verify filtering of search results.
● Verify title tab text
● Verify alert message

Since I do not have an account on Katalon and still do not know how to use it and unfortunately do not have time to learn so, here are a few ideas regarding the above:

Home Page Display Test Case:

Verify home page display:
Input: Open the home page of the web application
Expected Output: The home page should be displayed correctly with all its components
Test Steps:
Open the home page in a web browser
Verify that the page header, navigation menu, and main content are displayed correctly
Verify that all images and videos are properly loaded
Verify that all links are working and redirecting to the correct pages
Verify that the homepage is correctly formatted and styled.
If the home page is displayed correctly, the test case passes, otherwise it fails

Search Functionality Test Case:

Verify search functionality:
Input: Perform a search using the search bar
Expected Output: The search results should match the expected results
Test Steps:
Open the home page in a web browser
Enter a search term in the search bar and submit the search
Verify that the user is able to search for a specific item or keyword.

Verify that the search results page is displayed
Verify that the search results match the expected results
Verify that the relevant items are displayed in the correct order, such as by relevance or date.
If the search results are correct, the test case passes, otherwise it fails

Filtering Test Case:

Verify filtering of search results:
Input: Filter the search results using a specific criterion
Expected Output: The filtered search results should match the expected results
Test Steps:
Open the search results page in a web browser
Filter the search results using a specific criterion, such as date, relevance, or price
Verify that the filtered search results match the expected results
If the filtered search results are correct, the test case passes, otherwise it fails

Title Tab Test Case:

Verify title tab text:
Input: Open a web page
Expected Output: The title tab text should match the expected page title
Test Steps:
Open the web page in a web browser
Retrieve the title tab text using JavaScript or a browser API
Compare the retrieved title tab text with the expected page title
If they match, the test case passes, otherwise it fails

Verify alert message:

Input: Trigger an alert message
Expected Output: The alert message should match the expected message
Test Steps:
Trigger the alert message 
Retrieve the alert message
Compare the retrieved alert message text with the expected message
If they match, the test case passes, otherwise it fails

 
Part II

Since I only worked with Cypress using JavaScript, this was a bit challenging task for me, but I did my best. A lot of commands that Selenium supports, and I suppose Katalon does too, Cypress does not, so I had to be creative and improvise a lot, so you will see a few custom commands and a few added plugins. Workarounds to the max! :)

I organised my project following the Page Object Model principles. Pages are located in the Support folder. 

Also, I tried to keep test files as clean and concise as possible, so most of my methods are located in the pageTitle files. 

I would usually put the environment variables file in the git.ignore, but for the purposes of the test, I won't.

I tried to solve bonus material regarding selectin Min, Max, and Random priced products but did not manage to do it yet, I had a few ideas. I will leave them here. :)

    let prices = []
    let products = []

    cy.get('.product-price')
      .each(($el, index) => {
        const price = parseFloat($el.text().replace('$', ''))
        prices.push(price)
        products.push($el.parent())
      })

    const minPriceIndex = prices.indexOf(Math.min(...prices))
    const maxPriceIndex = prices.indexOf(Math.max(...prices))

    products[minPriceIndex].find('.add-to-basket-button').click()
    products[maxPriceIndex].find('.add-to-basket-button').click()

    let randomIndex
    do {
      randomIndex = Math.floor(Math.random() * prices.length)
    } while (randomIndex === minPriceIndex || randomIndex === maxPriceIndex)

    products[randomIndex].find('.add-to-basket-button').click()
  })
})







