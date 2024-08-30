import {Todo} from '../todos/models/todo.model.js';

export const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del espacio'),
        new Todo('Piedra de la mente'),
        new Todo('Piedra del poder'),
        new Todo('Piedra de la realidad')
    ],
    filter: Filters.All,
}

const initStore = () => {
    loadStore();
    console.log('Iniciando el store');
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return;
    
    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
};

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Filtro no válido: ${filter}`);
    }
}

const addTodo = (description) => {
    if (!description)throw new Error('La descripción es obligatoria');

    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

const toggleTodo = (id) => {
    state.todos = state.todos.map( todo => {
        if (todo.id === id) {
            todo.done = !todo.done;
        }
        return todo;
    })
    saveStateToLocalStorage();
}

const deleteTodo = (id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
    saveStateToLocalStorage();
}

const deletedCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deletedCompleted,
    setFilter,
    getCurrentFilter
}

