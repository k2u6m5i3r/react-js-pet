import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import "./DisplayTodo.css";

function DisplayTodo({
  isOpen,
  formData,
  handleCloseButton,
  handleEditTodo,
  handleRemoveTodo,
}) {
  return (
    <Dialog 
    onClose={handleCloseButton} 
    open={isOpen}
    >
      <DialogTitle className="display-todo-title">Your todo</DialogTitle>
      <DialogContent className="display-todo-content">
        <DialogContentText>
          <div>
            <h2>{formData.toDoName}</h2>
            <div>{formData.toDoNote}</div>
          </div>
        </DialogContentText>
        <DialogActions>
          <div className="display-buttons-wrapper">
            <Button
              variant="outlined"
              onClick={handleRemoveTodo}
              color="secondary"
            >
              Remove
            </Button>
            <div>
              <Button 
              onClick={handleEditTodo}
              color="primary"
              >
                Edit
              </Button>
              <Button 
              onClick={handleCloseButton} 
              color="primary"
              >
                Close
              </Button>
            </div>
          </div>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

export default DisplayTodo;
