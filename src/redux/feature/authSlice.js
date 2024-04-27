const initialAccount ={
    email:'',
    password:'',
    isLoggedIn: false,
}

const authReducer = (state = initialAccount, action)=>{
    switch(action.type){
        case 'Login':
            return {...state,
                email: action.payload.email,
                password: action.payload.password,
                isLoggedIn: true,
                
            }
        case 'Logout':
            return {...state,
                email:'',
                password:'',
                isLoggedIn: false, 
            }
        default:
            return state
    }
}   

export const Login = (email,password)=>{
    return {type:'Login', 
        payload:{
            email,
            password,
        },
    }
}

export const Logout = ()=>{
    return {type:'Logout'};
}

export default authReducer