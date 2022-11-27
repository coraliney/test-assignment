import { Todo } from "../ts/models/Todo";

import { removeAllTodos } from "./../ts/functions";





test("should remove allTodos", () => {

  //arrange


  let list: Todo[] = [
    new Todo("studdy", true),
    new Todo("eat", true),
    new Todo("sleep", true),
  ];
  //act
  removeAllTodos(list);

  //assert

  expect(list.length).toBe(0);
});