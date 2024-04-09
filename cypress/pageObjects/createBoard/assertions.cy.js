class createBoardAssertions {
    checkBoardNameContainValue(boardName){
        cy.findByTestId("board-name-display").should('contain',boardName)
        return this;
    }

    checkBoardNameIsVisible(){
        cy.findByTestId("board-name-display").should("be.visible")
        return this;
    }
}
export default createBoardAssertions;