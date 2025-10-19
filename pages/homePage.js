/*
Description: This class contains all the web elements used and actions performed in the user HOME main page.
*/

exports.HomePage = class HomePage {

    /**
     *Parameter(s) used by default when this class is instanciated
     * @param {import ('@playwright/test').Page} page 
     */
    constructor(page){
        //Reuse of same page object within the same test
        this.page = page;

        //Web Elements locators
        this.flashMsg = page.locator('id=flash-messages');
        this.homePageTitle = page.getByRole('heading', {level: 2});
        this.homePageWelcomeMsg = page.getByRole('heading', {level: 4});
        this.logoutButton = page.getByRole('link', {name: 'Logout'});
    }

    //////////////////////////////////////////Actions methods

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

    /*
    * Parameter: None
    * Description: The method waits a max of 3 secs for the element to be available in page and gets element text
    * Return: String -> Element's text
    */
    async homePageTitleGetText() {
        await this.homePageTitle.waitFor({ state: 'visible', timeout: 3000 });
        let homePageTitleText = await this.homePageTitle.textContent();
        return homePageTitleText;          
    }

    /*
    * Parameter: None
    * Description: The method waits a max of 3 secs for the element to be available in page and gets element text
    * Return: String -> Element's text
    */
    async homePageWelcomeMsgGetText() {
        await this.homePageWelcomeMsg.waitFor({ state: 'visible', timeout: 3000 });
        let homePageWelcomeMsgText = await this.homePageWelcomeMsg.textContent();
        return homePageWelcomeMsgText;          
    }
    
    /*
    * Parameter: None
    * Description: The method waits a max of 3 secs for the element to be available in page and clicks on button
    */
    async logoutButtonClick() {
        await this.logoutButton.waitFor({ state: 'visible', timeout: 3000 });
        await this.logoutButton.click();
    }

}