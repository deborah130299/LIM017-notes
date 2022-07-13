import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export function Register() {
    const { signUp } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  
    const [user, setUser] = useState({
      email: "",
      password: "",
    });
  
    const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signUp(user.email, user.password)
          navigate('/Note')
        } catch (error) {
          console.log(error.code);
          if (error.code === 'auth/invalid-email') {
            setError('Correo inválido')
          }
          if (error.code === 'auth/weak-password') {
            setError('La contraseña debe contener mínimo 6 caracteres')
          }
          if (error.code === 'auth/email-already-in-use') {
            setError('Cuenta ya registrada')
          }
        }
    };

  return (
    <div class="box">
    <h2>Register</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
    <input
      type="email"
      name="email"
     required=""
      onChange={handleChange}
    />
    <label htmlFor="email">Email</label>
    </div>

<div class="user-box">
<input
      type="password"
      name="password"
      required=""
      onChange={handleChange}
    />
    <label htmlFor="password">Password</label>  
</div>

<div id="botones">
          <button id="btn">Register</button>
          {error && <p>{error}</p>}
        </div>
    </form>
    </div>
  );
}
