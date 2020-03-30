import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./message";
import ProgressBar from "./ProgressBar";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({ });
  const [message, setMessage] = useState("");
  const [uploadPercentage, setuploadPercentage] = useState(0);
  const imgArray = ["image/jpeg", "image/png", "image/gif"];

  const onChangeImg = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(file.type);
    onSubmitImg(e)
  };

  const onSubmitImg = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      if (imgArray.includes(file.type) && file.size < 5000000) {
        const res = await axios.post("/api/reviews/foodImgUpload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: progressEvent => {
            setuploadPercentage(
              parseInt(
                Math.round(progressEvent.loaded * 100) / progressEvent.total
              )
            );
            setTimeout(() => setuploadPercentage(0), 4000);
          }
        });
        const { filename, filePath } = res.data;
        setUploadedFile({ filename, filePath });
        props.getImgPath(filePath)
        console.log(filePath, file.size,"KB", file.type)
        setMessage("File Uploaded");
      } 
      else {
        setMessage("Must be jpg/png/gif, max size 5MB!");
      }
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server!");
        setMessage("There was a problem with the server!");
      } else {
        console.log(err.response.data.msg);
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      {message ? <Message msg={message} /> : null}
        <div className="custom-file">
          <input name="photo"
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChangeImg}
          />
          <input type="hidden" id="photo" name="photo" />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <br/>
        <ProgressBar percentage={uploadPercentage} />
        <input
          type="button" onClick={onSubmitImg}
          value="Upload Photo"
          className="btn btn-info btn-block mt-2"
        />
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            {/* <h3 className="text-center">{uploadedFile.fileName}</h3> */}
            <img
              alt={uploadedFile.fileName}
              src={uploadedFile.filePath}
              style={{ width: "100%" }}
            />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};


export default FileUpload;