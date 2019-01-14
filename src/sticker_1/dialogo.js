import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class Dialogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    };
  };
  
  titulo = 'titulo';
  mensaje ='mensaje';


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.titulo}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.mensaje}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Acepar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Dialogo;