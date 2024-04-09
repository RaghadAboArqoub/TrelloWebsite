//When Navigate  and delete the list 
//Then The List will be deleted successfully
/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import UpdateListActions from "../../../pageObjects/updateList/actions.cy";
import updateListAssertions from "../../../pageObjects/updateList/assertions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import DeleteListActions from "../../../pageObjects/deleteList/actions.cy";
import deleteListAssertions from "../../../pageObjects/deleteList/assertions.cy";
const createListAction =new createListActions();
const createListAssertion = new createListAssertions();
const createBoardAction = new createBoardActions();
const UpdateListAction =new UpdateListActions();
const updateListAssertion = new updateListAssertions();
const DeleteListAction = new DeleteListActions();
const deleteListAssertion = new deleteListAssertions();
const boardName = "My First Board";
const ran = Math.floor(Math.random() * 10);
const listName ="Test list" + ran
const listName2 ="Test list update" + ran
before(() => {
    cy.loginToTrello()
    cy.wait(3000)
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoradTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
    cy.wait(1000)
    createListAction.typeListName(listName)
    createListAction.clickOnAddList2()
})
When("Navigate  and delete the list",()=>{
    DeleteListAction.deleteList()
});

Then("The List will be deleted successfully",()=>{
    deleteListAssertion.checkListNameIsNotVisible()
})