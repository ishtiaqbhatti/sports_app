import React from "react";
import { withStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import GroupForm from "components/Form/GroupForm";
import InputGroup from "components/CustomInput/InputGroup";
import Button from "components/CustomButtons/Button.js";
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

const styles = {
  dialogPaper: {
    minHeight: "50vh",
    maxHeight: "90vh",
    minWidth: "50vw "
  }
};

const FormDialog = ({ classes, dialogState, dialogText }) => {
  const [open, setOpen] = React.useState(dialogState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.dialogPaper }}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <DialogTitle id="form-dialog-title">{dialogText}</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
          */}

          <form noValidate>
            <div className="row">
              <div className="form-group col-md-10 pl-10">
                <label htmlFor="inputEmail4">Enter your Club Name</label>
                <InputGroup
                  name="clubName"
                  //    value={data.clubName}
                  //    onChange={onChange}
                />
              </div>
            </div>
            <div className="bd-top" />
          </form>
        </DialogContent>

        <DialogActions>
          {/* <Button color="warning" round>
            
          </Button> */}
          <Button color="success" round>
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default withStyles(styles)(FormDialog);
