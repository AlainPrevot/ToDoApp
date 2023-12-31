import { useEffect, useReducer } from 'react';
import { ToDoReducer } from '../reducer/ToDoReducer';


// La funcion init sirve de iniciador para el reducer, en este caso rescata lo almacenado en el localStorage en la memoria que tenga como
// nombre la ruta de la pagina actual
const init = () => {
    return JSON.parse(localStorage.getItem(location.pathname)) || [];
}

export const useToDo = () => {
  
    const [ todos, dispatch ] = useReducer( ToDoReducer, [], init );

    // Con el useEffect cada vez que haya un cambio en la lista lo almaceno en el localStorage
    useEffect(() => {
      localStorage.setItem(location.pathname, JSON.stringify( todos ) );
    }, [todos])
    
    // Estas son las diferentes opciones que pueden utilizarse en el reducer (crear, eliminar, marcar como echo)

    // Agrega un nuevo TODO
    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }
    // Elimina un TODO
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }    
    // Transfiere un TODO a otra lista
    const handleTransferTodo = (todo, path) => {
        dispatch({
            type: '[TODO] Transfer Todo',
            payload: todo.id,
            path: path,
            todo: todo,
            local: JSON.parse(localStorage.getItem(path))
        });
    }
    // Marca un TODO como echo
    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=> !todo.done).length,

        handleNewTodo,
        handleDeleteTodo,
        handleTransferTodo,
        handleToggleTodo,
    }

}
