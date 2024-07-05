import PropTypes from "prop-types";

const PrincipalButton = ({
  id,
  onClick,
  text,
  width,
  height,
  padding,
  margin,
  disabled,
}) => {
  const style = {
    width: width || "auto", // valor por defecto si no se proporciona
    height: height || "auto",
    padding: padding || "0", // valor por defecto para padding si no se proporciona
    margin: margin || "0", // valor por defecto si no se proporciona
  };
  return (
    <>
      <button
        className="rounded-md
        text-sm
        bg-Color_primario 
        text-white
        font-semibold"
        id={id}
        onClick={onClick}
        style={style}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
};

PrincipalButton.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  width: PropTypes.string, // puede ser cualquier valor de CSS para width
  height: PropTypes.string, // puede ser cualquier valor de CSS para height
  padding: PropTypes.string, // puede ser cualquier valor de CSS para padding
  margin: PropTypes.string, // puede ser cualquier valor de CSS para margin
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

PrincipalButton.defaultProps = {
  width: "auto",
  height: "auto",
  padding: "0",
  margin: "0",
};

export default PrincipalButton;
