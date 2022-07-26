import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
const NavElement = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
   navigate(props.path,{replace: true});
  }
  return (
    <Button onClick={clickHandler} sx={{ my: 2, color: 'white', display: 'block' }}>
      {props.page}
    </Button>
  );
};

export default NavElement;
