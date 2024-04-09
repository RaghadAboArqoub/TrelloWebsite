class createListActions {
    // methods needed in create list 
   
    typeListName(listName){
        cy.findByTestId("list-name-textarea").click().type(listName);
        cy.wait(1000)
        return this;
    }
    clickOnAddList2(){
        cy.findByTestId("list-composer-add-list-button").click()
        cy.wait(1000)

        cy.findByTestId("list-wrapper").click()
        return this;
    }
    

}
export default createListActions;