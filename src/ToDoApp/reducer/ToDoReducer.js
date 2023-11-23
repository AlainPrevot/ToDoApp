// Este es el reducer con las 3 acciones que se pueden realizar

export const ToDoReducer = ( initialState = [], action ) => {


    switch ( action.type ) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ];

        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload );

            
        case '[TODO] Delete Todo':
            console.log(initialState)
            return initialState.filter( todo => todo.done === false );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload ) {// id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 

                return todo;
            });
    
        default:
            return initialState;
    }


}