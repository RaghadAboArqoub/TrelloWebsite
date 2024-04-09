class DeleteListActions {
   
 
    deleteList(){
        cy.findByTestId("OverflowMenuHorizontalIcon").click({ multiple: true , force: true})
        cy.get(".js-close-list").click({force: true})

    }

}
export default DeleteListActions;