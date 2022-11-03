import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Avatar, TableContainer } from '@mui/material';
import AddUsers from './AddUsers';
export default function ButtonAppBar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            REACT REDUX
                        </Typography>
                        <div className='flex flex-row gap-3'>
                            <Button variant='contained'><Link to='/fetch'>fetchAPI</Link></Button>
                            <Button variant="contained">
                                <Link to='/contact'>Contact</Link>
                            </Button>
                            {/* <Button variant="contained">
                                <Link to='/adduser'>Redux Toolkit</Link>
                            </Button> */}
                            <Avatar><Link to='/'>H</Link></Avatar>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
