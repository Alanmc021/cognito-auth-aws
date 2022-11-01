import { useState } from 'react';
import '../App.css';

function App({ signIn, signUp, confirmSignUp }) {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [changeView, setChangeView] = useState(true)
    const [codeInEmail, setCodeInEmail] = useState('')

    function login(e) {
        e.preventDefault();
        signIn(email, password)
    }

    function createAccount(e){
        e.preventDefault();
        signUp(email,password)
    }

    function confirmSignUpInEmail(e){
        e.preventDefault();
        confirmSignUp(codeInEmail);
    }

    if (changeView) {
        return (
            <div className="container">
                <h1 className="title">Entrar no sistema</h1>
                <form className="form" onSubmit={login}>
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <input className="button" type="submit" value="Enviar" />
                </form>
                <button className="buttonCreateAccount" onClick={() => { setChangeView(false) }}>Criar conta</button>
            </div>
        );
    } else {
        return (
            <div className="container">
            <h1 className="title">Criar conta</h1>
            <form className="form" onSubmit={createAccount}>
                <input
                    className="input"
                    type="text"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    className="input"
                    type="text"
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input className="button" type="submit" value="Enviar" />
            </form>
            <button className="buttonCreateAccount" onClick={() => { setChangeView(true) }}>Voltar</button>
            <h1>Validar sua conta. Inisra o codigo abaixo</h1>
            
            <form className="form" onSubmit={confirmSignUpInEmail}>
                <input
                    className="input"
                    type="text"
                    placeholder="Digite codigo"
                    onChange={(e) => setCodeInEmail(e.target.value)}
                    value={codeInEmail}
                />               
                <input className="button" type="submit" value="Enviar" />
            </form>
        </div>
        )
    }
}

export default App;