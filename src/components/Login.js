import { useState } from "react";
import {  login, loginWithGoogle} from "../context/authContext";
import { useNavigate } from "react-router-dom";


export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();//declara una variable de estado llamada error El segundo elemento retornado es una función que nos permite actualizar 

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const objectUser = await login(user.email, user.password);
      localStorage.setItem('email', objectUser.user.email);
      navigate("/Note");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Correo inválido");
      } else if (error.code === "auth/user-not-found") {
        setError("El correo no está registrado");
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const objectUser = await  loginWithGoogle();
      localStorage.setItem('email', objectUser.user.email);
      navigate("/Note");
    } catch (error) {
    if (error) {
  } if (error.code === "auth/invalid-email") {
    setError("correo inválido");
  } else if (error.code === "auth/user-not-found") {
    setError("El correo no está registrado");
  }
  }};

  return (
    <div className="box">
      <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="user-box">
      <input
        type="email"
        name="email"
       required=""
        onChange={handleChange}
      />{/* onChange se activa con cada pulsación de tecla en el teclado. */}
      <label htmlFor="email">Email</label>
      </div>

<div className="user-box">
<input
        type="password"
        name="password"
        required=""
        onChange={handleChange}
      />
      <label htmlFor="password">Password</label>  
</div>

<div id="botones">
          <button id="btn">login</button>
          <button id="btn" className='BtnGoogle' onClick={handleGoogleSignin}>Acceder con Google</button>
          {error && <p>{error}</p>}
        </div>
    </form>
    </div>
  );
}
