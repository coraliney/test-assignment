/**
*@jest-environment jsdom
*/

import * as mainfunctions from "../ts/main";
import * as functionsfromfunction from "../ts/functions";
import { Todo } from "../ts/models/Todo";

import {
    createNewTodo,
    createHtml,
    toggleTodo,
    displayError,
    clearTodos,
  } from "./../ts/main";

 


test("should create new to do", ()=>{
    //arrange
    let spy = jest.spyOn(mainfunctions, "createHtml").mockReturnValue();
    let todoText: string = "inlämning";
    let todos: Todo[] = [new Todo("Inlämning", false)];

    //act
    mainfunctions.createNewTodo(todoText, todos);
    //assert
    expect(spy).toBeCalled();
})


test("should change all todos", ()=>{
    //arrange
    let spy = jest.spyOn(functionsfromfunction, "changeTodo").mockReturnValue();
    let todo = new Todo("write a story", false);
    //act
    mainfunctions.toggleTodo(todo);
    //assert
    expect(spy).toHaveBeenCalled();
})

test("should not create todo", () => {
    //arrange
    let spy = jest.spyOn(mainfunctions, "displayError").mockReturnValue();
    let todoText: string = "no";
    let todos: Todo[] = [new Todo("Inlämning", false)];
    //act
    mainfunctions.createNewTodo(todoText, todos);
    //assert
    expect(spy).toBeCalled();
  });


test("should call HTML", ()=>{
    //arrange
    let spy = jest.spyOn(mainfunctions, "createHtml").mockReturnValue();
    let todoTwo = new Todo("calling out for html", false);
    //act
    mainfunctions.toggleTodo(todoTwo);
    //assert
    expect(spy).toHaveBeenCalled();
})


test("should remove all todos", () => {
    //arrange
    let spy = jest.spyOn(functionsfromfunction, "removeAllTodos").mockReturnValue();
    let clearAllTodos: Todo[] = [new Todo("remove all todos", false)];
    //act
    mainfunctions.clearTodos(clearAllTodos);
    //assert
    expect(spy).toHaveBeenCalled();
});

test("should call createHtml", () => {
    //arrange
    let spy = jest.spyOn(mainfunctions, "createHtml").mockReturnValue();
    let todos: Todo[] = [new Todo("inlämning", false)];
    //act
    mainfunctions.clearTodos(todos);
    //assert
    expect(spy).toHaveBeenCalled();
})



/* test("should not creatNewTodo", ()=>{
    //arrange
    //act
    //assert
}) */