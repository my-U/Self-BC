import { apiDeleteTodo } from "../../api/api.js";
import { getCurrentUser } from "../../util/localStorage.js";
import { loadTodo } from "./loadTodo.js";

export const deleteTodo = async (target) => {
    const currentUser = getCurrentUser();
    const currentTarget = target.closest('li').id;

    await apiDeleteTodo(currentUser, currentTarget);
    loadTodo(currentUser);
}