import React, { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import S3FileUpload from "react-s3";
import { uploadFile } from "react-s3";
import API from "../../../../utils/API";
import AWS from "../../../../utils/keys";


export default function Dropzone(props) {
  const [name, setName] = useState("");
  const [file, setFile] = useState([]);
  const [open, setOpen] = useState(false);

  const [response, setResponse] = useState("");
  // state = {
  //   open: false,
  //   files: [],
  // };
  const config = {
    bucketName: "stateside-img-bucket",
    region: "us-east-1",
    dirName: "photos",
    accessKeyId: AWS.access,
    secretAccessKey: AWS.secret,
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (files) => {
    //Saving files to state for further use and closing Modal.
    console.log(files[0]);
    setFile(files);
    setOpen(false);
    uploadFile(files[0], config)
      .then((data) => {
        console.log(data.location);
        API.savePhoto(props.id, { photo: data.location }).then(()=>{

          props.reset()
        });
      })
      .catch((err) => console.error(err));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{
          color: "white",
          border: "2px solid #BB86FC",
          backgroundColor: "transparent",
          width: 150,
          marginBottom: "7px",
        }}
        startIcon={<CameraAltIcon />}
      >
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
