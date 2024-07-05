import logo from "../assets/Logo.svg";
import perfil from "../assets/icons8-usuario-masculino-en-círculo-24.png";
import { Link } from "react-router-dom";
import Groups from "../views/groups/Groups";

function Header() {
  return (
    <>
      <div
        className="
      
      bg-Color_primario 
      text-white
      "
      >
        <div
          className="flex pt-3 px-4"
          style={{ justifyContent: "space-between" }}
        >
          <div className="flex font-semibold ">
            <img src={logo} alt="img_logo" />
            <p>Mi vaquita</p>
          </div>
          <div className="">
            <img src={perfil} alt="" className="h-6 w-6" />
          </div>
        </div>
        <nav className="">
          <ul className="flex flex-row justify-between font-bold px-4 py-4">
            <li>
              <Link to="/friends" relative="path">
                Amigos
              </Link>
            </li>
            <li>
              <Link to="/expenses" relative="path">
                Gastos
              </Link>
            </li>
            <li key={Groups}>
              <Link to="/groups" relative="path">
                Grupos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
