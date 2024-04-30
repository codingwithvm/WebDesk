import { useState } from "react"
import LoginScreen from "./components/LoginScreen/LoginScreen"

const App = () => {
    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => {
        setIsLogged(true)
    }

    return (
        <main>
            {!isLogged ? (
                <LoginScreen onLogin={handleLogin} />
            ) : (
                // Aqui você pode renderizar outros componentes da sua aplicação após o login
                <div>
                    <h1>Bem-vindo ao WebDesk!</h1>
                    {/* Outros componentes da sua aplicação */}
                </div>
            )}
        </main>
    )
}

export default App