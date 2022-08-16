

export const todoReducer = (initialState = [], action) => {
  switch ( action.type ) {
    case 'Add Todo':
      return [...initialState, action.payload]
      // throw new Error('Action.type = ABC no está implementado') // poner esto para cuando se dispara la accion y todavia no esta implementado el case, de un error

    case 'Remove Todo':
      return initialState.filter( todo => todo.id !== action.payload )

    case 'Toggle Todo':
      return initialState.map( todo => {
        
        if (todo.id === action.payload) {
          return{
            ...todo,
            done: !todo.done
          }
        }
        return todo

      })
    default:
      return initialState;
  }
}
