import { Grid, Box, Typography } from "@material-ui/core";
import React from "react";
import NavbarTeste from "../../components/estaticos/navbarteste/NavbarTeste";
import './SobreNos.css'

function SobreNos() {
    return (
        <>
        <NavbarTeste/>
        <Grid container className='caixa1-about'>
            <Grid container direction='row' justifyContent='center' alignContent='center' className="txtdark">
                <Box >
                    <Box>
                        <Typography  align='center'> Missão</Typography>
                        <Typography  align='center' gutterBottom  className="txtdark"> Conectar pessoas que precisam de apoio psicológico com profissionais da área dispostos a ajudar essas pessoas de forma gratuita. Nós promovemos saúde e bem estar para população brasileira.</Typography>
                    </Box>
                    <Box>
                        <Typography align='center' className="txtdark"> Missão</Typography>
                        <Typography align='center' gutterBottom  className="txtdark"> Conectar pessoas que precisam de apoio psicológico com profissionais da área dispostos a ajudar essas pessoas de forma gratuita. Nós promovemos saúde e bem estar para população brasileira.</Typography>
                    </Box>                    
                </Box>
            </Grid>
        </Grid>
        </>
    );        
}
export default SobreNos;