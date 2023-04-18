import React, { useState } from 'react';
import { auth } from '../Firebase/config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const newErrors = [];

    if (!email) {
      newErrors.push('El correo electrónico es obligatorio');
    }

    if (!password) {
      newErrors.push('La contraseña es obligatoria');
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/form'); // Redirect to the Form component
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrors(['El correo electrónico o la contraseña son incorrectos']);
    }
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      {errors.length > 0 && (
        <div className="alert alert-danger">
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default Login;
