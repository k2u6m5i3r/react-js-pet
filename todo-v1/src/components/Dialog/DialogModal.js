import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./DialogModal.css";

function DialogModal({
  isOpen,
  handleOpenDialog,
  handleSetFieldValue,
  formData,
  handleSetTodoSubmit
}) {
  return (
    <Dialog 
    onClose={handleOpenDialog} 
    open={isOpen}
    >
      <DialogTitle>{formData.isEdit? 'Edit todo':'Add new todo'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <form onSubmit={handleSetTodoSubmit}>
            <TextField
              label="Todo"
              variant="outlined"
              onChange={(e) => handleSetFieldValue("toDoName", e.target.value)}
              value={formData.toDoName}
            />
            <TextField
              label="Note"
              variant="outlined"
              onChange={(e) => handleSetFieldValue("toDoNote", e.target.value)}
              value={formData.toDoNote}
              multiline
              rows={4}
            />
            <DialogActions>
              <Button 
              onClick={handleOpenDialog} 
              color="primary"
              >
                Close
              </Button>
              <Button
                disabled={!formData.toDoName}
                type="submit"
                color="primary"  
              >
                {formData.isEdit? 'EDIT':'ADD'}
              </Button>
            </DialogActions>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default DialogModal;
