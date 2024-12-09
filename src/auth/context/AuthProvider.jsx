import { useReducer } from "react"
import { types } from "../types/types";
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

/* const initialState={
    logged:false,
} */

const init=()=>{
  const user = JSON.parse(localStorage.getItem('user'))

  return{
    logged:!!user,
    user:user,
  }
}

//this functional component provide every information
export const AuthProvider = ({children}) => {
    //hay que establecer si un usuario esta logeado
     const [authState,dispatch]  = useReducer(authReducer,{},init);
     

     const login= (name='')=>{

      const user = {id:'ABC',name}
      const action={
        type:types.login,
        payload:{
          id:'ABC',
          name:name
        }
      }
      localStorage.setItem('user',JSON.stringify(user))
      dispatch(action);
     }

    const logout =()=>{
      localStorage.removeItem('user');
      const action ={
        type:types.logout
      }
      dispatch(action)
    }


  return (

    <AuthContext.Provider value={({
      ...authState,
      //methods
      login:login,
      logout
    })}>
        {children}
    </AuthContext.Provider>
    
  )
}
