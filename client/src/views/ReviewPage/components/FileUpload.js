import React, { Fragment, useState } from "react";
import axios from "axios";
import Message from "./message";
import ProgressBar from "./ProgressBar";

const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setuploadPercentage] = useState(0);
  const imgArray = ["image/jpeg", "image/png", "image/gif"];

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(file.type);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      if (imgArray.includes(file.type) && file.size < 3145728) {
        const res = await axios.post("/imgUpload", formData, {
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
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
        setMessage("File Uploaded");
      } else {
        setMessage("File type is not allowed or is too large!");
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
    <p>Please upload a photo here...</p>
      {message ? <Message msg={message} /> : null}
      <form onSubmit={onSubmit}>
        <div className="custom-file">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>

        <ProgressBar percentage={uploadPercentage} />
        <input
          type="submit"
          value="Upload"
          className="btn btn-info btn-block mt-4"
        />
      </form>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
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
