/// <reference types="cypress" />
describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/');
        cy.url().should('contain', 'v1/');
    });
 //S01
    it('Login with blank username', () => {
    //Login
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required');
    });
 //S02
    it('Login with blank password', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[id="login-button"]').click(); 
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required');
    });
 //S03
    it('Login with an incorrect password', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('asdfgh');
        cy.get('[id="login-button"]').click(); 
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
 //S04
    it('Login with correct username and password', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    });
 //S05
     it('Adding 1 item, then check cart page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    });
//S06
    it('Adding more than 1 item to cart, and check cart page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1st Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Add 2nd item
        cy.get('[id="item_2_title_link"]').should('contain', 'Sauce Labs Onesie');
        cy.get('[class="btn_primary btn_inventory"]').eq(3).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','2');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[id="item_2_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Onesie');
    })
//S07
    it('Add an item, check the cart page, and continue shopping', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_secondary"]').click();
    //Homepage
        cy.url().should('contain', 'inventory.html');
        cy.get('[class="btn_secondary btn_inventory"]').should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    });
//S08
    it('Add and remove an item on the homepage', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Remove Item
        cy.get('[class="btn_secondary btn_inventory"]').click();
        cy.get('[class="btn_primary btn_inventory"]').eq(0).should('have.text','ADD TO CART');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('not.exist');
    });
//S09
    it('Add and remove an item on the cart page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    //Remove item
        cy.get('[class="btn_secondary cart_button"]').click();
        cy.get('[id="item_4_title_link"]').should('not.exist');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('not.exist');
    });
//S10
    it('Add item and then checkout without filling in all the required information', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action checkout_button"]').click();
        cy.url().should('contain', 'checkout-step-one.html');
    //Checkout step one page
        cy.url().should('contain', 'checkout-step-one.html');
        cy.get('[class="btn_primary cart_button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
    });
//S11
    it('Add item and then checkout with one required field unfilled on step one page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action checkout_button"]').click();
        cy.url().should('contain', 'checkout-step-one.html');
    //Checkout step one page
        //"First Name" Unfilled
        cy.get('[data-test="lastName"]').type('Ismail');
        cy.get('[data-test="postalCode"]').type('1111');
        cy.get('[class="btn_primary cart_button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
        //"Last Name" Unfilled
        cy.get('[data-test="firstName"]').type('Imran');
        cy.get('[data-test="lastName"]').clear();
        cy.get('[class="btn_primary cart_button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required');
        //"ZIP/Postal Code" Unfilled
        cy.get('[data-test="lastName"]').type('Ismail');
        cy.get('[data-test="postalCode"]').clear();
        cy.get('[class="btn_primary cart_button"]').click();
        cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required');
    });
//S12
    it('Canceling on the checkout step one page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action checkout_button"]').click();
        cy.url().should('contain', 'checkout-step-one.html');
    //Checkout step on page
        cy.get('[class="cart_cancel_link btn_secondary"]').click();
    //Cart page
        cy.url().should('contain', 'cart.html')
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
    });
//S13
    it('Checkout and contine with all data filled on checkout step one page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action checkout_button"]').click();
        cy.url().should('contain', 'checkout-step-one.html');
    //Checkout step one page
        cy.get('[data-test="firstName"]').type('Imran');
        cy.get('[data-test="lastName"]').type('Ismail');
        cy.get('[data-test="postalCode"]').type('1111');
        cy.get('[class="btn_primary cart_button"]').click();
        cy.url().should('contain', 'checkout-step-two.html');
    //Checkout step two page
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('[id="item_4_title_link"]').should('contain', 'Sauce Labs Backpack');
    });
//S14
    it('Canceling on the checkout step two page', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action checkout_button"]').click();
        cy.url().should('contain', 'checkout-step-one.html');
    //Checkout step one page
        cy.get('[data-test="firstName"]').type('Imran');
        cy.get('[data-test="lastName"]').type('Ismail');
        cy.get('[data-test="postalCode"]').type('1111');
        cy.get('[class="btn_primary cart_button"]').click();
        cy.url().should('contain', 'checkout-step-two.html');
    //Checkout step two page
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('[id="item_4_title_link"]').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="cart_cancel_link btn_secondary"]').click();
        cy.url().should('contain', 'inventory.html');
    });
//S15
    it('Complete checkout process and back to homepage', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Add 1 Item
        cy.get('#item_4_title_link').should('contain','Sauce Labs Backpack');
        cy.get('[class="btn_primary btn_inventory"]').eq(0).click().should('have.text','REMOVE');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('contain','1');
    //Cart page
        cy.get('[data-icon="shopping-cart"]').click();
        cy.url().should('contain', 'cart.html');
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action checkout_button"]').click();
        cy.url().should('contain', 'checkout-step-one.html');
    //Checkout step one page
        cy.get('[data-test="firstName"]').type('Imran');
        cy.get('[data-test="lastName"]').type('Ismail');
        cy.get('[data-test="postalCode"]').type('1111');
        cy.get('[class="btn_primary cart_button"]').click();
        cy.url().should('contain', 'checkout-step-two.html');
    //Checkout step two page
        cy.get('[id="item_4_title_link"]').should('be.visible');
        cy.get('[id="item_4_title_link"]').should('contain', 'Sauce Labs Backpack');
        cy.get('[class="btn_action cart_button"]').click();
        cy.url().should('contain', 'checkout-complete.html');
    //Checkout complete
        cy.get('[id="checkout_complete_container"]').should('contain', 'THANK YOU FOR YOUR ORDER');
    //Back to homepage
        cy.get('[class="bm-burger-button"]').click();
        cy.get('[class="bm-item-list"]').should('be.visible');
        cy.get('[id="inventory_sidebar_link"]').should('exist');
        cy.get('[id="inventory_sidebar_link"]').click();
        cy.url().should('contain', 'inventory.html');
    //Homepage
        cy.get('[class="btn_primary btn_inventory"]').eq(0).should('have.text', 'ADD TO CART');
        cy.get('[class="fa-layers-counter shopping_cart_badge"]').should('not.exist');
    });
//S16
    it('Logout', () => {
    //Login
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[id="login-button"]').click(); 
        cy.url().should('contain', 'inventory.html');
    //Logout
        cy.get('[class="bm-burger-button"]').click();
        cy.get('[class="bm-item-list"]').should('be.visible');
        cy.get('[id="logout_sidebar_link"]').should('exist');
        cy.get('[id="logout_sidebar_link"]').click();
        cy.url().should('contain', 'index.html');
    });
});
