const initialState = {
    name: '',
    number: '',
}

export const contactFormReducer = (state = initialState, action) => {
    switch(action.type){
     case 'contactForm/name': {
        return{...state, name: action.payload }
     }
     default: return state;
    };
}
