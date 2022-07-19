import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';


export function NavBar() {

  const {user, logOut} = useAuth ()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
    await logOut()
    navigate('/');
  } catch (error) {
    console.error(error)
  }
};



  return (
    <div className='Container-NavBar'>
    <div className='Saludo'>
    <h3>Hola, {console.log(user) || user.email}</h3>
    </div>
    <div className='Content-BtnLogOut'>
    <button className='BtnLogOut' data-testid="btnLogOutNote" onClick={handleLogout}>
      Cerrar Sesión
    </button>
    </div>

    </div>
  );
}