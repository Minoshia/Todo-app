import { Todo } from "../models/todo.model.js";
import { createTodoHTML } from "./";

let element;

/**
 * Renderiza los todos en el elemento HTML especificado.
 *
 * @param {string} elementId - El ID del elemento HTML donde se renderizará los todos.
 * @param {Todo[]} todos - Un arreglo de objetos Todo.
 */
export const renderTodos = (elementId, todos = []) =>{

    if(!element) element = document.querySelector(elementId);

    if(!element) throw new Error(`No se encontro el elemento ${elementId}`);

    element.innerHTML = '';

    todos.forEach( todo =>{
        element.append(createTodoHTML(todo));
    });
}