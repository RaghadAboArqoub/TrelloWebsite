class updateListAssertions {
    checkListNameContainValue(listName){
        cy.findByTestId("list-name-textarea").should('contain',listName)
        return this;
    }

    checkListNameIsVisible(){
        cy.wait(1000)
        cy.findByTestId("list-name-textarea")
        return this;
    }
}
export default updateListAssertions;