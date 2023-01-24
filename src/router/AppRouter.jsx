import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth"
import { HeroesRoutes } from "../heroes"
import { Navbar } from "../ui"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element=
          {<PublicRoute>
            {/* <LoginPage /> */}
            <Routes>
              <Route path="/*" element={<LoginPage/>}/>
            </Routes>          
          </PublicRoute>
          } 
        />
        {/* cualquier ruta que no quiero que sea login pase por aqui */}
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes/>
          </PrivateRoute>
        } />
      </Routes>

      {/*  <Route path="login" element={<LoginPage/>}/> */}
    </>
  )
}
