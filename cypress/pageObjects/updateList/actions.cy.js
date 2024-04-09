class UpdateListActions {
    // methods needed in Update list 
 
    updateList(updateListName){
        cy.findByTestId("list-name").click()
        cy.findByTestId("list-name-textarea").type(updateListName,{force: true}).type('{enter}', {force: true});
        return this;
    }

}
export default UpdateListActions;