import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import PageActions from "../../support/Resources/pageActions";

const pages = new PageActions()

Given(/^I am on the amazon site$/, function () {
    cy.visit('/');
});

Then(/^I should find a list of Items$/, function () {
    cy.fixture('element-mapper').then((em)=>{
    });

});

When(/^I search for "([^"]*)"$/, function (item) {
    cy.fixture('element-mapper').then((em)=>{
    switch (item) {
        case "ferrari-458":
            pages.typeAvalue(em.searchBox, em.ferrariItem);
            pages.clickElement(em.searchBtn);
            break;

        case "iPhone 12 Pro Max Turbo Charger":
            pages.typeAvalue(em.searchBox, em.phoneItem);
            pages.clickElement(em.searchBtn);

    }

    });

});
Then(/^I should find a list of Items for a "([^"]*)"$/, function (list) {
    cy.fixture('element-mapper').then((em)=>{
        switch (list) {
            case "ferrari":
                pages.pageLoadEvent(em.searchResult);
                pages.viewElementText(em.searchResult, em.ferrariItem);
                break;

            case "iPhone":
                pages.pageLoadEvent(em.searchResult);
                pages.viewElementText(em.searchResult, em.phoneItem);

        }

    });

});