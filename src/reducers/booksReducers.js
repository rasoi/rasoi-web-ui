"use strict"
export function booksReducers(state={books: [{
      _id: 1,
      title: "Rasoi ki kitaab",
      description: 'hohoho',
      price: 6
    },{
      _id: 2,
      title: "Rasoi ki doosri kitaab",
      description: 'hohoho',
      price: 8.9
    },
    ]
  }, action){
  switch(action.type){
    case "GET_BOOK":
    return {...state, books:[...state.books]}
    case "POST_BOOK":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {books: [...state.books, ...action.payload]}
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
  }
  return state
}
