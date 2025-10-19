/*
Description: This class contains all the web elements used and actions performed in the user LOGIN process.
*/

exports.LoginPage = class LoginPage {

    /**
     * Parameter(s) used by default when this class is instanciated
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        //Reuse of same page object within the same test
        this.page = page;

        //Web Elements locators
        this.loginPageTitle = page.getByRole('heading', {name: 'Login Page'});
        this.usernameTextbox = page.getByRole('textbox', { name: 'username' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'password' });
        this.loginButton = page.getByRole('button', { name: ' Login' });
        this.flashMsg = page.locator('id=flash-messages');
    }

    //////////////////////////////////////////Actions methods

    /*
    * Parameter: None
    * Description: The method waits a max of 3 secs for the element to be available in page and gets element text
    * Return: String -> Element's text
    */
    async loginPageTitleGetText() {
        await this.loginPageTitle.waitFor({ state: 'visible', timeout: 3000 });
        let loginPageTitleText = await this.loginPageTitle.textContent();
        return loginPageTitleText;
    }

    /*
    * Parameter: Receives data to be input into textbox
    * Description: The method waits a max of 3 secs for the element to be available in page, clears the textbox and fill it with the received data as a parameter
    */
    async usernameTextboxFill(username) {
        await this.usernameTextbox.waitFor({ state: 'visible', timeout: 3000 });
        await this.usernameTextbox.clear();
        await this.usernameTextbox.fill(username);
    }
    
    /*
    * Parameter: Receives data to be input into textbox
    * Description: The method waits a max of 3 secs for the element to be available in page, clears the textbox and fill it with the received data as a parameter
    */
    async passwordTextboxFill(password) {
        await this.passwordTextbox.waitFor({ state: 'visible', timeout: 3000 });
        await this.passwordTextbox.clear();
        await this.passwordTextbox.fill(password);
    }
     
    /*
    * Parameter: None
    * Description: The method waits a max of 3 secs for the element to be available in page and clicks on button
    */
    async loginButtonClick() {
        await this.loginButton.waitFor({ state: 'visible', timeout: 3000 });
        await this.loginButton.click();
    }
 
    /*
    * Parameter: None
    * Description: The method waits a max of 3 secs for the element to be available in page and gets element text
    * Return: String -> Element's text
    */
    async flashMsgGetText() {
        await this.flashMsg.waitFor({ state: 'visible', timeout: 3000 });
        let flashMsgText = await this.flashMsg.textContent();
        flashMsgText = flashMsgText.trim();
        flashMsgText = flashMsgText.slice(0, (flashMsgText.indexOf('!')+1));
        return flashMsgText; 
    }

}