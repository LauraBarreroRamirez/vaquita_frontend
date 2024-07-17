import React, { useEffect, useMemo, useState } from "react";
import TargetGroup from "./TargetGroup";
import { useGroups } from "../utils/GroupsContext";
import PrincipalButton from "./buttons/PrincipalButton";
import { useNavigate } from "react-router-dom";
import { allGroups } from "../api/groups.jsx";
import LogoutButton from "../utils/providers/auth/Logout.jsx";

function Body() {
  const { groups: contextGroups, setGroups: setContextGroups } = useGroups();
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadGroups = async () => {
      try {
        const response = await allGroups();
        setGroups(response.data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    };

    loadGroups();
  }, []);

  const sortedGroups = useMemo(() => {
    return [...groups].sort((a, b) => b.id - a.id);
  }, [groups]);

  const handleEditClick = (name) => {
    navigate(`/group/${name}`);
  };

  if (!Array.isArray(groups)) {
    console.error("Expected 'groups' to be an array but got:", groups);
    return <p>Error: 'groups' no es un array.</p>;
  }

  return (
    <>
      <div className="mx-6 font-semibold">
        <p className="text-sm">Debes</p>
        <p className="text-red text-4xl mb-10">${}</p>
      </div>
      <div className="p-5">
        {groups.length === 0 ? (
          <>Aun no tienes un grupo creado</>
        ) : (
          <ul>
            {sortedGroups.map((group) => (
              <li key={group.id}>
                <TargetGroup
                  name={group.name}
                  colorGroup={group.color}
                  className="mb-4"
                  message="Debes"
                  editButton={
                    <PrincipalButton
                      text="Editar"
                      width="60px"
                      onClick={() => handleEditClick(group.name)}
                    />
                  }
                  deleteButton={
                    <PrincipalButton text="Eliminar" width="70px" />
                  }
                />
              </li>
            ))}
          </ul>
        )}
        <div>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}

export default Body;
