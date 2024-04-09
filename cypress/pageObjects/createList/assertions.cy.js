class createListAssertions {
    checkListNameContainValue(listName){
        cy.findByTestId("list-name").should('contain',listName)
        return this;
    }

    checkListNameIsVisible(){
        cy.findByTestId("list-name").should("be.visible")
        return this;
    }
}
export default createListAssertions;