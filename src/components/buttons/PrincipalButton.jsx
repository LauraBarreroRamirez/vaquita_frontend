import PropTypes from "prop-types";

const PrincipalButton = ({ id, onClick, text }) => {
  return (
    <>
      <button
        className="
            btn-principal
            rounded-md
            text-sm
            bg-Color_primario 
            text-white
            mt-6
            px-3
            py-1
            font-semibold 
            align-content: flex-end
            position: relative
            "
        id={id}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

PrincipalButton.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default PrincipalButton;
