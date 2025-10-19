//Include and import all relevant class modules
const path = require('path');

import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
import { data } from '../data/data';

//////////////////////////////////////////////TEST CASE
/*
* Type: Hook - BeforeEach
* Description: Navigates to specified URL and verifies its correct navigation.
*/
test.beforeEach('Navigation to URL', async({page}) => {
    await test.step('Go to: https://the-internet.herokuapp.com/login', async () => {
        //Navigate to the respective URL and verify correct page is displayed
        await page.goto(process.env.BASE_URL);
        await expect(page).toHaveTitle(process.env.PAGE_TITLE);
    })
})

/*
* Type: Parametrized Test Case based on different input data
* Description: Test case covers the following scenarios =>
*   - Valid login
*   - Invalid username
*   - Invalid password
*   - Missing username
*   - Missing password
*   - Missing username and password
*/
data.forEach(({Username, Password, Test_Scenario}) => {
    test(`${Test_Scenario}`, async({page}) => {

        //Classes Object instances
        const loginPage = new LoginPage(page);
        const homePage = new HomePage(page);

        /*
        * Description: Verify user is on login page.
        */ 
        await test.step('On Login page', async () => {
            try{
            //Verify "Login" page is correctly displayed
                await expect(await loginPage.loginPageTitleGetText()).toEqual('Login Page');
                await expect(loginPage.loginButton).toBeVisible();
            
            } catch (error) {
                throw error;
            }
        });

        /*
        * Description: Login with user credentials
        */ 
        await test.step('Enter user credentials', async () => {
            try{
                //Enter username and password
                await loginPage.usernameTextboxFill(Username);
                await loginPage.passwordTextboxFill(Password);
            
            } catch (error) {
                throw error;
            }
        });

        /*
        * Description: Clicks on "Login" button to complete login process.
        */ 
        await test.step('Click on login button', async () => {
            try{
                await loginPage.loginButtonClick();

            } catch (error) {
                throw error;
            }
        });

        /*
        * Description: Verify user login status 
        */ 
        await test.step('Verify login status', async () => {
            try{
                if(Test_Scenario === 'Valid credentials'){
                    //Verify correct messages, web elements and redirection to URL after user login successfully.
                    await expect(page).toHaveURL(process.env.SECURE_URL);
                    await expect(await homePage.flashMsgGetText()).toEqual('You logged into a secure area!');
                    await expect(await homePage.homePageTitleGetText()).toEqual(' Secure Area');
                    await expect(await homePage.homePageWelcomeMsgGetText()).toEqual('Welcome to the Secure Area. When you are done click logout below.');
                    await expect(homePage.logoutButton).toBeVisible();

                }else if (Test_Scenario === 'Invalid username' || Test_Scenario === 'Missing username' || Test_Scenario === 'Missing credentials'){
                    //Verify user remains on login page and error message is correctly displayed.
                    await expect(await loginPage.loginPageTitleGetText()).toEqual('Login Page');
                    await expect(loginPage.loginButton).toBeVisible();
                    await expect(await loginPage.flashMsgGetText()).toEqual('Your username is invalid!');

                }else if (Test_Scenario === 'Invalid password' || Test_Scenario === 'Missing password'){
                    //Verify user remains on login page and error message is correctly displayed.
                    await expect(await loginPage.loginPageTitleGetText()).toEqual('Login Page');
                    await expect(loginPage.loginButton).toBeVisible();
                    await expect(await loginPage.flashMsgGetText()).toEqual('Your password is invalid!');
                }
            } catch (error) {
                throw error;
            }
        });

        if (Test_Scenario === 'Valid credentials'){
            /*
            * Description: Verify successfull log out process and navigation to login page.
            */ 
            await test.step('Verify successful logout', async () => {
                try{
                    //Verify correct messages and web elements after user logout.
                    await homePage.logoutButtonClick();
                    await expect(page).toHaveURL(process.env.BASE_URL);
                    await expect(loginPage.loginButton).toBeVisible();
                    await expect(await loginPage.flashMsgGetText()).toEqual('You logged out of the secure area!');

                } catch (error) {
                    throw error;
                }
            });
        }

    });
});
    
/*
* Type: Hook - AfterEach
* Description: Attach test case completion evidence and generates the report.
*/
test.afterEach('Teardown', async({page}) => {
    await test.step('Attach Test Case Screenshot to report', async () => {
        //Waits for 0.5 second to take and attach screenshot to report
        const screenhotBuffer = await page.screenshot({fullPage: true});
        await page.waitForTimeout(500);
        await test.info().attach('Automation Coding Test', {contentType: 'image/png', body: screenhotBuffer});

        //Close driver
        await page.close();
    });
});