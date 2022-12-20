import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField, Button, Divider } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../service/Service';
import UserLogin from '../../models/UserLogin';
import './TelaLogin.css';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addId, addToken } from '../../store/tokens/actions';

function TelaLogin() {
    let navigate = useNavigate();

    const dispatch = useDispatch();

    const [token, setToken] = useState('');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: '',
            senha: '',
            token: ''
        }
    )

   
    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: '',
    })

    useEffect(() => {
        if (token != "") {
            dispatch(addToken(token))
            navigate('/home');

        }
    }, [token]);


  

    useEffect(() => {
        if (respUserLogin.token !== "") {
            dispatch(addToken(respUserLogin.token))
            dispatch(addId(respUserLogin.id.toString()))
            navigate('/home')
        }
    }, [respUserLogin.token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/auth/logar`, userLogin, setRespUserLogin);
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }

    return (
            <Box  display='flex' className='caixaLogin'>
                <Divider />
                <Typography color='textPrimary' align='center' className='texto1-login'>Entrar</Typography>
                <Divider />
                <Box display='flex' justifyContent='center' >
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center' className='texto2-login'>Informe o seu e-mail e senha para acessar sua conta:</Typography>
                    </Box>
                </Box>
                <form onSubmit={onSubmit} className='formlogin' >
                    <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Endereço de e-mail' variant='outlined' name='usuario' margin='normal' fullWidth className='campos' />
                    <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth className='campos' />
                    <Box marginTop={2} textAlign='center'>
                        <Button type='submit' variant='contained' className='btnLogin'>
                            Login
                        </Button>
                    </Box>
                </form>
                <Box display='flex' justifyContent='center' marginRight={1} className='txt-cadastro'>
                    <Box marginRight={1}>
                        <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                    </Box>
                    <Link to='/cadastrousuario'>
                        <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se</Typography>
                    </Link>
                </Box>
            </Box>

    );
}

export default TelaLogin;