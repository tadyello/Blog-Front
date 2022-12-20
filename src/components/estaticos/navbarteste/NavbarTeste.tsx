import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import ModalLogin from '../../login/modalLogin/ModalLogin';
import './NavbarTeste.css'

function NavbarTeste() {
    return (
        <>
            <AppBar position="fixed" className='navbar'>
                <Toolbar className='fundo' variant="dense" >
                    <Box className='logo' mr={100} >
                        <img src="https://raw.githubusercontent.com/tadyello/Gen-JavaScript/main/meulogo1.2.png" alt='logoMentalize' />
                    </Box>
                    <Box display="flex" justifyContent="end">
                        <Box mx={1} className='item'>
                            <Link to='/'>
                                <Typography className='texto' variant="h6" color="inherit">
                                    Pagina Inicial
                                </Typography>
                            </Link>
                        </Box>                      
                        <Box mx={1} className='item'>
                            <Link to='/contato'>
                                <Typography className='texto' variant="h6" color="inherit">
                                    Contato
                                </Typography>
                            </Link>
                        </Box>
                        <Box mx={1} className='item'>
                                <ModalLogin />
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavbarTeste;