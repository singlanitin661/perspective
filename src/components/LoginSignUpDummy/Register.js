import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("Registered successfully!");
            })
            .catch((e) => {
                alert(e.message);
            });
        setEmail("");
        setPassword("");
    };
    return (
        <div>
            <h1>Register!</h1>
            <form onSubmit={signUp}>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
}

export default Register;
