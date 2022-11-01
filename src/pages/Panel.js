import React, { useState } from 'react'

export default function App({ signOut }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
            <h1>Dentro do sistema</h1>
            <button onClick={() => { signOut() }}>Sair do sistema</button>
        </div>
    )
}