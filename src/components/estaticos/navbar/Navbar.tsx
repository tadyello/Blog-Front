import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Navbar(): JSX.Element {
    const dispatch = useDispatch();

    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    
    function goLogout() { 
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar className='fundo' variant="dense">
                    <Box className='logo' mr={60}>
                        <img src="https://raw.githubusercontent.com/tadyello/Gen-JavaScript/main/meulogo1.2.png"  alt='logoMentalize' />
                    </Box>
                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Pagina Inicial
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/postagens" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography className='texto' variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>
                    </Link>
                    
                    <Link to="/usuarios" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography className='texto' variant="h6" color="inherit">
                          Usuários
                        </Typography>
                   </Box>
                   </Link>
                   <Link to="/perfil" className="text-decorator-none">
                    <Box mx={1} className="cursor">
                        <Typography className='texto' variant="h6" color="inherit">
                          Perfil
                        </Typography>
                   </Box>
                   </Link>
                </Box>
                <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography className='texto' variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;
