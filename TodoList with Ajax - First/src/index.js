import { todoList } from './components/todoList/todoListHandler.js';
import { loadUsers } from './components/userList/loadUser.js';
import { userList } from './components/userList/userListHandler.js';

const todoApp = async () => {
  await loadUsers();
  userList();
  todoList();
}

window.addEventListener("DOMContentLoaded", todoApp);