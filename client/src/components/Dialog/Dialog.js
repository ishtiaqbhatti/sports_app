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
    minHeight: "60vh",
    maxHeight: "90vh",
    minWidth: "60vw "
  }
};

const FormDialog = ({
  classes,
  dialogState,
  dialogText,
  form,
  next,
  previous,
  nextStep,
  previousStep,
  prevBtnText,
  nextBtnText
}) => {
  const [open, setOpen] = React.useState(true);

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
          {form}
          <div className="bd-top" />
        </DialogContent>

        <DialogActions>
          {previous ? (
            <Button color="warning" round onClick={previousStep}>
              {prevBtnText}
            </Button>
          ) : null}
          {next ? (
            <Button color="success" round onClick={nextStep}>
              {nextBtnText}
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

FormDialog.defaultProps = {
  nextBtnText: "Next",
  prevBtnText: "Previous",
  previous: true,
  next: true,
  dialogText: "Tell us About Yourself"
};

export default withStyles(styles)(FormDialog);
