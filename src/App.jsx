import { useState } from "react"
import LoginScreen from "./components/LoginScreen/LoginScreen"
import Workspace from "./components/Workspace/Workspace"

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
                <Workspace />                
            )}
        </main>
    )
}

export default App