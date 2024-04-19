import logo from "../assets/Logo.svg";
import perfil from "../assets/icons8-usuario-masculino-en-círculo-24.png";
import { Link } from "react-router-dom";
import Groups from "../utils/Groups";

function Body() {
  return (
    <>
      <nav
        className="container 
      width: 100%
      bg-Color_primario 
      text-white
      "
      >
        <div className="flex pt-3 px-4 ">
          <div className="flex font-semibold ">
            <img src={logo} alt="img_logo" />
            <p>Mi vaquita</p>
          </div>
          <div className="">
            <img src={perfil} alt="" />
          </div>
        </div>
        <ul className="flex flex-row justify-between font-bold px-4 py-4">
          <li>Amigos</li>
          <li>Gastos</li>
          <li key={Groups}>
            <Link to="/groups">Groups</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Body;
