import React, { useContext, useState } from 'react';

const CurrentUserContext = React.createContext();

export const useCurrentUserContext = () => useContext(CurrentUserContext);

const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    username: 'john Doe',
    isLoggedIn: false,
  });
  const handleSetCurrentUser = (newData) => {
    setCurrentUser({ ...currentUser, ...newData });
  };
  return (
    <CurrentUserContext.Provider
      value={{ currentUser: { ...currentUser, handleSetCurrentUser } }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
