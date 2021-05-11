import { API } from '../../api/api.js';

const memberTodoListTemplate = (todo) => {
    return `
      <li id="${todo._id}" class="todo-list-item">
        <div class="view">
          <input class="toggle" type="checkbox" ${todo.isCompleted ? 'completed' : ""}/>
          <label class="label">
            <div class="chip-container">
              <select class="chip select">
                <option value="0" selected>순위</option>
                <option value="1">1순위</option>
                <option value="2">2순위</option>
              </select>
            </div>
            ${todo.contents}
          </label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${todo.contents}" />
      </li>`
  }

export const loadMemberTodo = (todos) => {
    const memberTodo = todos.map((todo) => memberTodoListTemplate(todo));
    const memberTodoList = memberTodo.join('');
    return memberTodoList
    
};