class PageActions{
    clickElement(element){
        cy.get(element).click();
    }

    typeAvalue(field, value){
        cy.get(field).type(value);
    }

    pageLoadEvent(element){
        cy.get(element).should('be.visible');
    }

    viewElementText(element, text){
        cy.get(element).should('contain', text);
    }

}
export default PageActions