import { userList } from './components/userList/userListHandler.js';

const todoApp = async () => {
  userList();
}

window.addEventListener("DOMContentLoaded", todoApp);