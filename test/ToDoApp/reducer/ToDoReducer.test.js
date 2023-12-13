import { ToDoReducer } from "../../../src/ToDoApp/reducer/ToDoReducer";

/* eslint-disable no-undef */
describe('Pruebas en ToDoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }]
    test('Debe de regresar el estado inicial', () => {  

        const newState = ToDoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un TODO', () => {  

        const newTodo = {
            id: 2,
            description: 'Demo Todo 2',
            done: false
        }
        const action = {
            type: '[TODO] Add Todo',
            payload: newTodo
        }
        const newState = ToDoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe de eliminar un TODO', () => {  

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }
        const newState = ToDoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('Debe de hacer toggle a un TODO', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = ToDoReducer(initialState, action);
        expect(newState[0].done).toBe(true);

        const newState2 = ToDoReducer(newState, action);
        expect(newState2[0].done).toBe(false);
    });


 })