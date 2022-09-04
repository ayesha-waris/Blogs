import LoginForm from '../components/UI/Forms/LoginForm';
import Wrapper from '../components/UI/Wrapper';
import AuthUser from '../hooks/AuthFetch';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/authSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onLoginSubmit = async (credentials) => {
    const data = await AuthUser(
      'http://localhost:8000/account/login/',
      credentials
    );
    if (data.token) {
      localStorage.setItem('access_token', JSON.stringify(data.token.access));
      localStorage.setItem('refresh_token', JSON.stringify(data.token.refresh));
      setError(false);
      dispatch(authActions.login());
      navigate('/index');
    } else {
      setError(true);
    }
  };

  return (
    <Wrapper>
      {!isAuthenticated && (
        <>
          <LoginForm onLoginSubmit={onLoginSubmit} />
          {error && <p> 'Your password or email incorrect!!' </p>}
        </>
      )}
      {isAuthenticated && <p> 'you are already logged in' </p>}
    </Wrapper>
  );
};

export default Login;
