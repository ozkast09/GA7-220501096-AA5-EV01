import React, {useState} from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

function AuthForm(){

    const [isRegistering,setIsRegistering]=useState(false);
    const [message,setMessage]=useState('');

    const handleAuthSuccess=(successMessage)=>{
        setMessage(successMessage);
        //redirigimos al usuario a la pagina principal
        console.log('Exito:',successMessage);
    };

    const handleAuthError=(errorMessage)=>{
        setMessage(errorMessage);
        console.error('Error:',errorMessage);
    };

    const toggleForm= ()=>{
        setIsRegistering(!isRegistering);
        setMessage(''); //Limpia mensajes al cambiar de formulario
    };

    return(
        <div>
            <h1>{isRegistering ? 'Registro de Usuario': 'Inicio sesion'}</h1>
            {message && <p>{message}</p>}
            {isRegistering ?(
                <RegisterForm onSuccess={handleAuthSuccess} onError={handleAuthError}/>
            ) : (
                <LoginForm onSuccess={handleAuthSuccess} onError={handleAuthError}/>
            )
        }
        <button onClick={toggleForm}>
            {isRegistering ? '¿Ya tienes una cuenta? Inicia sesion': '¿No tienes una cuenta? Registrate'}
        </button>
        </div>
    );
    
}

export default AuthForm;