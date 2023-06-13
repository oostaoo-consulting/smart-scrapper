import React, { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from 'react';

const objectProfile: Person = {
  cursor: '',
  socialAccounts: [],
  id: '',
  name: '',
  login: '',
  location: '',
  email: '',
  url: '',
  websiteUrl: '',
  avatarUrl: '',
  bio: '',
};

interface Props {
  children: ReactNode;
}

interface ObjectDataContext {
  currentProfile: Person;
}

interface DataContextProps {
  miscData: ObjectDataContext; // replace `any` with the type of your miscData
  setMiscData: Dispatch<SetStateAction<ObjectDataContext>>,
}

// Créer le contexte
export const DataContext = createContext<DataContextProps>({
  miscData: {
    currentProfile: objectProfile,
  },
  setMiscData: () => { },
});

// création du composant de contexte à placer dans App.js
function DataContextProvider({ children }: Props): JSX.Element {
  // donnée à irriguer, il peut y en voir plusieurs
  const [miscData, setMiscData] = useState({
    currentProfile: objectProfile,
  });

  const contextValue = useMemo(() => ({ miscData, setMiscData }), [miscData]);

  // création du provider qui permet de fournir les infos grâce à "props.children"
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
