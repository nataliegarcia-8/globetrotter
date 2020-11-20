import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

export default class Dropzone extends Component {
  state = {
    open: false,
    files: [],
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    console.log(files);
    this.setState({
      files: files,
      open: false,
    });
  };

  handleOpen = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant='contained'
          style={{
            color: "white",
            border: "2px solid #BB86FC",
            backgroundColor: "transparent",
            width: 150,
            marginBottom: "7px",
          }}
          startIcon={<CameraAltIcon />}>
          Upload
        </Button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}
