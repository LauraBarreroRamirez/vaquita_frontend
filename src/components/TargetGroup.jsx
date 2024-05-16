import ImgGroup from "../assets/layer-MC1.svg";
import PrincipalButton from "./buttons/PrincipalButton";

function TargetGroup() {
  return (
    <>
      <section
        className="
      mx-3 font-semibold
     bg-gray-100 
      py-3
      px-2
      flex-row 
      flex
      "
      >
        <img
          className=" h-15
          w-20 
          p-2 
          border-2 
          rounded-md"
          src={ImgGroup}
          alt="Img_Group"
        />
        <div className="mx-2">
          <div>
            <p>Grupo #{}</p>
            <div className="text-xs flex justify-self-start">
              <p className="pr-1">Debes:</p>
              <p className="text-red">${}</p>
            </div>
          </div>
          <div className="flex-row ">
            <PrincipalButton text="Editar" />
            <PrincipalButton text="Borrar" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TargetGroup;
