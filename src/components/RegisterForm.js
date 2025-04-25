import React, {useState} from "react";

function RegisterForm({onSuccess,onError}){
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');

    const handleSubmit = async (event)=>{
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/register',
                {
                    method:'POST',
                    headers:{
                        'content-Type':'application/json',
                    },
                    body: JSON.stringify({username,password}),
                }
            );

            const data = await response.json();

            if (response.ok) {
                onSuccess(data.message);
                setUsername('');
                setPassword('');
            } else {
                onError('data.error');
                
            }
        } catch (error) {
            onError('Error al comunicarse con el servidor.');
            console.error('Error de red:',error);
            
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="register_usermane">Usuario:</label>
                <input
                type="text"
                id="register-username"
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                required
                />
            </div>
            <div>
                <label htmlFor="register-password">Contraseña:</label>
                <input
                type="password"
                id="register-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                required
                />
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
}

export default RegisterForm;