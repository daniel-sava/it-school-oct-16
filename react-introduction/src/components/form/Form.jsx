import { useEffect, useState } from "react";
import "./Form.css";

export default function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        console.log({ firstName, lastName, email, password });
    }, [isSubmitted]);

    return (
        <>
            {!isSubmitted ? (
                <div className="form-container">
                    <input type="text" placeholder="Prenume" onChange={(event) => setFirstName(event.target.value)} />
                    <input type="text" placeholder="Nume" onChange={(event) => setLastName(event.target.value)} />
                    <input type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button onClick={() => setIsSubmitted(true)}>Submit</button>
                </div>
            ) : (
                <h1>Formularul a fost trimis cu succes!</h1>
            )}
        </>
    );
}
