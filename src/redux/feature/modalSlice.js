const initialState = {
  isOpen: false,
}

const modalReducer = (state = initialState,action) =>{
  switch (action.type){
    case 'openModal':
      return {...state,
       isOpen : state.isOpen = !state.isOpen
    };
    default:
      return state;
  }
}

export const openModal = () =>{
  return {type:'openModal'};
}

export default modalReducer;