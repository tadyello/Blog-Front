import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button } from "@material-ui/core"
import {Box} from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import './ModalLogin.css';
import TelaLogin from '../TelaLogin';


function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: '25%',
      height: '65%',
      backgroundColor: theme.palette.background.paper,
      border: '5px radius solid rgba(0, 0, 0, .125)',
      boxShadow: theme.shadows[5],
      
    },
  }),
);

function ModalLogin () {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      
      </Box>
      
      <TelaLogin/>
      
    </div>
  );

  return (
    <div>
      <Button
        variant="outlined"
        className="btnModal-login"
        onClick={handleOpen}>Login </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalLogin;