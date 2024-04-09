/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import createListActions from "../../../pageObjects/createList/actions.cy";
import createListAssertions from "../../../pageObjects/createList/assertions.cy";
import createBoardActions from "../../../pageObjects/createBoard/actions.cy";

const createListAction =new createListActions();
const createListAssertion = new createListAssertions();
const createBoardAction = new createBoardActions();
const boardName = "My First Board";

before(() => {
    cy.loginToTrello()
    cy.wait(3000)
    createBoardAction.clickOnCreateButton()
    createBoardAction.chooseCreateBoardOption()
    createBoardAction.typeInBoradTitleInputField(boardName)
    createBoardAction.clickOnCreateBoardButton()
  
})

const ran = Math.floor(Math.random() * 10);
const listName ="Test list" + ran

When("Types in List title input field the list name",()=>{
    cy.wait(1000)
    createListAction.typeListName(listName)
});

When("Clicks on Add list",()=>{
    createListAction.clickOnAddList2()
});

Then("The List will be created successfully",()=>{
    createListAssertion.checkListNameContainValue(listName).checkListNameIsVisible()
});

