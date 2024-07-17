import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrincipalButton from "./buttons/PrincipalButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { useGroups } from "../utils/GroupsContext.jsx";
import { createGroups } from "../api/groups.jsx";
import useAuthContext from "../utils/providers/auth/useAuthContext.jsx";

function ButtonModal() {
  const [openModal, setOpenModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [groupName, setGroupName] = useState("");
  const { groups, setGroups } = useGroups();
  const [colorGroup, setColorGroup] = useState("bg-orange");
  const [colorInputError, setColorInputError] = useState(false);
  const navigate = useNavigate();

  const createdGroups = new Set(groups.map((group) => group.name));

  const { user } = useAuthContext();

  const handleCreateGroup = async (event) => {
    event.preventDefault();

    if (groupName.trim() === "") {
      setErrorMessage("Elige un nombre para continuar");
      setColorInputError(true);
    } else if (groupName.length > 30) {
      setErrorMessage(
        "El nombre del grupo no puede tener más de 30 caracteres."
      );
      setColorInputError(true);
    } else if (createdGroups.has(groupName)) {
      setErrorMessage("El nombre del grupo ya existe.");
      return;
    }
    try {
      console.log("user.id", user.id);
      const newGroupData = {
        color: colorGroup,
        name: groupName,
        createdAt: new Date(),
        ownerUserId: user.id,
      };

      const { data } = await createGroups(newGroupData);

      setGroups([...groups, data]); // Agrega el nuevo grupo
      setOpenModal(false); // Cierra el modal
      setGroupName(""); // Limpia el campo de entrada
      setErrorMessage(""); // Limpia el mensaje de error
      setColorGroup(""); // Limpia el color seleccionado
      setColorInputError(false); // Resetea el borde rojo
      navigate("/groups", { state: { groups: { groups: data } } }); // Redirige a la ruta /grupos y pasa el estado de los grupos
      createdGroups.add(groupName); // Agrega el nombre del nuevo grupo al Set
      setTimeout(() => {
        window.location.reload();
      }, 200);
    } catch (error) {
      console.error("Error al crear el grupo:", error);
      // Manejar el error como sea necesario
    }
  };

  const handleColorSelect = (color) => {
    setColorGroup(color); // Actualiza el color seleccionado
  };

  return (
    <div className="">
      <div className="mt-5 mr-2 flex justify-end ">
        <PrincipalButton
          onClick={() => setOpenModal(true)}
          text="Nuevo Grupo"
        />
      </div>

      {openModal && (
        <>
          <div className="border-2 fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center ">
            <div className=" bg-white  pt-1 pr-6 pl-6 py-5 rounded-lg shadow-lg h-auto">
              <div className="flex justify-end">
                <button
                  onClick={() => setOpenModal(false)}
                  className="font-bold"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleCreateGroup}>
                <div>
                  <p
                    className="text-lg font-semibold text-Color_primario"
                    style={{ textAlign: "center" }}
                  >
                    Nuevo grupo
                  </p>
                </div>
                <div className="flex items-center space-x-2 py-5">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      className={`w-full pl-4 pr-10 py-2 border-2 ${
                        colorInputError
                          ? "border-rose-600/100"
                          : "border-gray-300"
                      } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 `}
                      placeholder="Nombre del grupo"
                      value={groupName}
                      onChange={(e) => {
                        setGroupName(e.target.value); // Actualizar el estado del campo de entrada
                        setColorInputError(false); // Resetea el borde rojo cuando el usuario empieza a escribir
                        setErrorMessage(""); // Limpia el mensaje de error si el usuario empieza a escribir
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    />
                  </div>
                </div>

                <div className=" mx-auto">
                  <div className="grid grid-cols-4 gap-4 w-64 h-32 rounded-md border-2 p-3">
                    <button
                      type="button"
                      className=" bg-orange rounded-md"
                      onClick={() => handleColorSelect("bg-orange")}
                    ></button>
                    <button
                      type="button"
                      className="bg-green500 rounded-md"
                      onClick={() => handleColorSelect("bg-green500")}
                    ></button>
                    <button
                      type="button"
                      className="bg-sky600 rounded-md"
                      onClick={() => handleColorSelect("bg-sky600")}
                    ></button>
                    <button
                      type="button"
                      className="bg-rose800 rounded-md"
                      onClick={() => handleColorSelect("bg-rose800")}
                    ></button>
                    <button
                      type="button"
                      className="bg-violet900 rounded-md"
                      onClick={() => handleColorSelect("bg-violet900")}
                    ></button>
                    <button
                      type="button"
                      className="bg-indigo300 rounded-md"
                      onClick={() => handleColorSelect("bg-indigo300")}
                    ></button>
                    <button
                      type="button"
                      className="bg-pink300 rounded-md"
                      onClick={() => handleColorSelect("bg-pink300")}
                    ></button>
                    <button
                      type="button"
                      className="bg-zinc800 rounded-md"
                      onClick={() => handleColorSelect("bg-zinc800")}
                    ></button>
                  </div>
                </div>
                <div className="pt-3">
                  <PrincipalButton
                    text="Crear"
                    width="100%"
                    height="30px"
                    type="submit"
                    // onClick={() => {
                    //   return createGroups();
                    // }}
                  />
                </div>
                {errorMessage && (
                  <p className="text-left mt-4 font-bold text-xs	text-Color_errores">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ButtonModal;
