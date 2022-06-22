import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import presentacion from "../img/presentacion.png";

export function Home() {
  const { user } = useAuth();
  console.log(user);

  const navigate = useNavigate();
  const btnLogin = () => {
    navigate("/login");
  };
  const btnRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <header id="header">
      <div><h1>Note-iT</h1></div>
        <div id="botones">
          <button onClick={btnLogin} className="Btn-home">
            Inicia Sesión
          </button>
          <button onClick={btnRegister} className="Btn-home">
            Registrate
          </button>
        </div>
       
      </header>
      <main>
        <div>
          <img src={presentacion} className="presentacion" alt="presentacion" />
        </div>
        <div id="text">
          <h2>Bienvenido</h2>
          <p>
            Colabora, gestiona proyectos y alcanza nuevos picos de
            productividad. Desde oficinas en edificios empresariales hasta
            trabajo remoto: la forma de trabajo de cada equipo es única, pero
            siempre se puede hacer con Note-iT.
          </p>
        </div>
      </main>
    </div>
  );
}
