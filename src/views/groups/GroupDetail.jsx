import Header from "../../components/Header";
import TargetGroup from "../../components/TargetGroup";
import PrincipalButton from "../../components/buttons/PrincipalButton";
import { useParams } from "react-router-dom";
import { useGroups } from "../../utils/GroupsContext";

function GroupDetail() {
  const { id } = useParams(); // Obtén el id del grupo de la URL
  const { groups } = useGroups(); // Obtén los grupos del contexto

  const group = groups.find((g) => g.name === name);

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <PrincipalButton text="Nuevo Gasto" />
        <PrincipalButton text="Nuevo Amigo" />
        <PrincipalButton text="Editar Grupo" />
      </div>
      <div className="container mx-auto mt-5">
        <TargetGroup
          name={group.name}
          colorGroup={group.color}
          message="Debes en total"
          editButton={<PrincipalButton text="Salir del Grupo" width="60px" />}
        />
      </div>
    </>
  );
}

export default GroupDetail;
