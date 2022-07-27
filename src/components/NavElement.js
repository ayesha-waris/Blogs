import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
const NavElement = (props) => {
  const navigate = useNavigate();

  const clickHandler = () => {
   navigate(props.path,{replace: true});
  }
  return (
    <Button onClick={clickHandler} sx={{ my: 3, color: 'orange', display: 'block' }}>
      {props.page}
    </Button>
  );
};

export default NavElement;
