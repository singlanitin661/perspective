import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(()=>{alert("Logged in successfully!")}).catch((e)=>{alert(e.message)});
        setEmail('');
        setPassword('')
    };
    return <div>
        <form onSubmit={signIn}>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    </div>;
}

export default Login;
