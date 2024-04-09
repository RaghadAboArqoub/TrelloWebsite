/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import UpdateListActions from "../../../pageObjects/updateList/actions.cy";
import updateListAssertions from "../../../pageObjects/updateList/assertions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
const createListAction =new createListActions();
const createListAssertion = new createListAssertions();
const createBoardAction = new createBoardActions();
const UpdateListAction =new UpdateListActions();
const updateListAssertion = new updateListAssertions();
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
    createListAction.typeListName(listName)
    createListAction.clickOnAddList2()
})
When("Navigate the  and Update the title of the list",()=>{
    UpdateListAction.updateList(listName2)
});

Then("The List Name will be Updated successfully",()=>{
updateListAssertion.checkListNameContainValue(listName2).checkListNameIsVisible
})