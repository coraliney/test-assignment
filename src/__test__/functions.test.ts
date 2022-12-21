import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { removeAllTodos, changeTodo, addTodo } from "./../ts/functions";

test("should remove allTodos", () => {
  //arrange

  let list: Todo[] = [
    new Todo("study", true),
    new Todo("eat", true),
    new Todo("sleep", true),
  ];
  //act
  removeAllTodos(list);

  //assert

  expect(list.length).toBe(0);
});

describe("ChangeTodo", () => {
  test("Should mark a todo true", () => {
    // Arrange
    let todo: Todo = new Todo("Todo", false);
    console.log(todo);
    // Act
    changeTodo(todo);
    console.log(todo);
    // Arrest
    expect(todo.done).toBe(!false);
  });
});

describe("AddTodo", () => {
  test("See if this works", () => {
    // Arrange
    let todos: Todo[] = [];
    let todoText: string = "Min text";
    let length: number = todos.length;

    // Act
    let result = addTodo(todoText, todos);

    // Arrest
    expect(todos.length).toBe(length + 1);
    expect(result.success).toBe(true);
  });
});

test("If it breaks", () => {
  // Arrange
  let todos: Todo[] = [new Todo("Do something now", false)];
  let todoText: string = "Min andra text";

  // Act
  let result: IAddResponse = addTodo(todoText, todos);

  // Testar för mig själv i console
  console.log(todos);
  console.log("Ditt resultat blev", result.success);

  // Arrest
  expect(todos.length).toBe(1);
  expect(result.success).toBe(false);
});
