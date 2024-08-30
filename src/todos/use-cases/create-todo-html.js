import { Todo } from "../models/todo.model.js";

/**
 * Crea un elemento HTML para representar un Todo.
 *
 * @param {Todo} todo - El Todo a representar.
 * @return {string} El elemento HTML.
 */
export const createTodoHTML = (todo) => {
    
    if (!todo) throw new Error('El todo es obligatorio');

    const { done, description, id} = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
        `;
    const liElement = document.createElement('li');

    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);
    if(done) liElement.classList.add('completed');

    return liElement;
}