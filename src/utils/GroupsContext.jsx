import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Crea el contexto
const GroupsContext = createContext();

// Hook para usar el contexto
export const useGroups = () => useContext(GroupsContext);

// Proveedor del contexto
export const GroupsProvider = ({ children }) => {
  const [groups, setGroups] = useState([]); // Estado inicial vacío

  return (
    <GroupsContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupsContext.Provider>
  );
};

GroupsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
