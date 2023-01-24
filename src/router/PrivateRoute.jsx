import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth"

export const PrivateRoute = ({children}) => {

    const {logged} = useContext(AuthContext);
    const {pathname,search}=useLocation();

    const lastPath=pathname + search;
    localStorage.setItem('lastPath',lastPath);

    //if user are login , active the children components , if not back to login
  return (logged)?
  children
  :<Navigate to="login"/>
}
