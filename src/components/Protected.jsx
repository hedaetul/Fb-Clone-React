import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';

export const Protected = ( {children} ) => {
  const { user } = useContext(Context);

  if (!user) {
    return <Navigate to='/' replace />;
  } else {
    return children;
  }
};

