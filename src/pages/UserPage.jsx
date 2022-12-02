import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

const User = () => {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ margin: '60px' }}>
      <h1>{user.email}</h1>
    </div>
  );
};

export default User;
