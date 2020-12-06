import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import Amplify, { Storage } from 'aws-amplify'
export default function Dropzone() {
  const [name, setName] = useState('')
  const [file, setFile] = useState([])
  const [open, setOpen] = useState(false)

  const [response, setResponse] = useState('')
  // state = {
  //   open: false,
  //   files: [],
  // };

  const handleClose = () => {
    setOpen(false)
  };

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    console.log(files);
    setFile(files)
    setOpen(false)
    Storage.put(files[0].name, files, {
      /* level: 'protected', */
      contentType: file.type,
    })
      .then((result) => {
        console.log(result)
        setResponse(`Success uploading file: ${name}!`)
      })
      .catch((err) => {
        console.log(err)
        setResponse(`Can't upload file: ${err}`)
      })

    
  };

 const handleOpen = () => {
    setOpen(true)

  };

  
    return (
      <div>
        <Button
          onClick={handleOpen}
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
          open={open}
          onSave={handleSave}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={handleClose}
        />
      </div>
    );
  
}
