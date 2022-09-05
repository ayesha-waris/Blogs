import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { useDispatch} from 'react-redux';
import { authActions } from '../../store/authSlice';


const NavElement = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {page, path, logout} = props;
   
  
  
  const clickHandler = () => {
    if(logout)
  {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("username");
    dispatch(authActions.logout());
  }

    navigate(path, { replace: true });
  };
  return (
    <Button
      onClick={clickHandler}
      sx={{ my: 3, color: 'orange', display: 'block' }}
    >
      {page}
    </Button>
  );
};

export default NavElement;
