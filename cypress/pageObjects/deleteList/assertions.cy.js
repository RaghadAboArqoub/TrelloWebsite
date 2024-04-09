class deleteListAssertions {
    

    checkListNameIsNotVisible(){
        cy.findByTestId("list-composer-button").should("be.visible")
        return this;
        
    }
}
export default deleteListAssertions;
