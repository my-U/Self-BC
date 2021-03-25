import { loadUsers } from './components/userList/loadUser.js';
import { userList } from './components/userList/userListHandler.js';

const todoApp = async () => {
  await loadUsers();
  userList();
}

window.addEventListener("DOMContentLoaded", todoApp);