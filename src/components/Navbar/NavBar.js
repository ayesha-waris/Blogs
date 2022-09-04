import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import NavElement from './NavElement';

const NavBar = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate('/index');
  };

  const sx = {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'orange',
    textDecoration: 'none',
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'black',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BorderColorIcon
            sx={{ display: { xs: 'none', md: 'flex' }, color: 'orange' }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={onClickHandler}
            sx={sx}
          >
            Blogs
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' } }}>
            <NavElement page='Home' path='/index' />
            <NavElement page='Login' path='/login' />
            <NavElement page='Add Blog' path='/newBlog' />
            <NavElement page='My Blogs' path='/myBlogs' />
            <NavElement page='Logout' path='/myBlogs' />
            
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
