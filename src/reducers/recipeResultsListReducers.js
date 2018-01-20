"use strict"
export function recipeReducers(state={books: []
  }, action){
  switch(action.type){
    case "GET_BOOK":
    return {...state, books:[...action.payload]}
    case "POST_BOOK":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {
      ...state,
      books: [...state.books, ...action.payload],
      msg: 'Saved! Click to continue',
      style:'success',
      validation:'success'
    }
    break;
    case "POST_BOOK_REJECTED":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {...state, msg:'Pleas try again', style:'danger', validation:'error'}
    break;
    case "DELETE_BOOK":
    // Create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    // Determine index
    const indexToDelete = currentBookToDelete.findIndex(
      function(book) {
        return book._id.toString() === action.payload;
      }
    )
    // use slice to remove the book at the specified indexToDelete
    return {books: [...currentBookToDelete.slice(0, indexToDelete),
    ...currentBookToDelete.slice(indexToDelete+1)]}
    break;
    case "UPDATE_BOOK":
    // Create a copy of the current array of books
    const currentBookToUpdate = [...state.books]
    // Determine index
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book) {
        return book._id === action.payload._id;
      }
    )
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    // use slice to remove the book at the specified indexToDelete
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate,
    ...currentBookToUpdate.slice(indexToUpdate+1)]}
    break;

    case "RESET_BUTTON":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {...state, msg:null, style:'primary', validation:nulls}
    break;



  }
  return state
}
