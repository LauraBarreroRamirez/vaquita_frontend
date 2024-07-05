import ImgGroup from "../assets/layer-MC1.svg";
import PropTypes from "prop-types";
import PrincipalButton from "./buttons/PrincipalButton";
import { useNavigate } from "react-router-dom";
function TargetGroup({ name, colorGroup, message }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`
        font-semibold
        bg-gray-50
        py-3
        px-2
        flex-row 
        flex
        mb-2
       
        `}
      >
        <img
          className={`h-15
          w-20 
          p-2 
          border-2 
          rounded-md
          ${colorGroup}
         `}
          src={ImgGroup}
          alt="Img_Group"
        />
        <div className="mx-2">
          <div>
            <p className="text-lg font-semibold text-Color_primario">{name}</p>
            <div className="text-xs flex justify-self-start">
              <p className="pr-1">{message}:</p>
              <p className="text-red">${}</p>
            </div>
          </div>
          <PrincipalButton
            text="Editar"
            onClick={() => {
              navigate("/groups/:id");
            }}
          ></PrincipalButton>
          {/* <div className="flex-row mr-2">
            {editButton && (
              <div className="inline-block mr-2">{editButton}</div>
            )}
            {deleteButton && <div className="inline-block">{deleteButton}</div>}
          </div> */}
        </div>
      </div>
    </>
  );
}
TargetGroup.propTypes = {
  name: PropTypes.string,
  colorGroup: PropTypes.string,
  message: PropTypes.string,
  editButton: PropTypes.node, // Un nodo React para el botón de edición
  deleteButton: PropTypes.node, // Un nodo React para el botón de eliminacións
};

export default TargetGroup;
