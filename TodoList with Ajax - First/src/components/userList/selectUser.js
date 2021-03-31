import { loadTodo } from "../todoList/loadTodo.js";
import { loadUsers } from "./loadUser.js";

export const selectUser = async (target) => {
    const userId = target.id;

    await loadUsers(userId);
    loadTodo(userId);
}