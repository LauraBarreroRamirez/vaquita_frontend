import { useState } from "react";
import PrincipalButton from "./buttons/PrincipalButton";

function Button() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="
            rounded-md
            text-sm
            bg-Color_primario 
            text-white
            mt-6
            px-3
            py-1
            font-semibold 
            align-content: flex-end
            "
      >
        Nuevo grupo
      </button>
      {openModal && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
              <button onClick={() => setOpenModal(false)}>X</button>
              <h3 className="font-semibold ">Nuevo grupo</h3>
              <div>
                <input
                  className="shadow appearance-none border rounded w-full  text-black-700 leading-tight focus:outline-none focus:shadow-outline
                  text-black"
                  id="username"
                  type="text"
                  placeholder="Nombre del grupo"
                />
              </div>
              <div className="container border-2 border-gray-300 gap-5">
                <button className="bg-red"></button>
              </div>
              <PrincipalButton text="Crear" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Button;
