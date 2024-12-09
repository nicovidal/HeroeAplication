import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"


describe('Prueba en <PublicRoute/>',()=>{

    test('debe de mostrar el children si no esta autenticado',()=>{

        const contextValue={
            logged:false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta publica')).toBeTruthy()

        screen.debug()


    });


    test('debe de navegar si esta autenticado',()=>{




    });
})