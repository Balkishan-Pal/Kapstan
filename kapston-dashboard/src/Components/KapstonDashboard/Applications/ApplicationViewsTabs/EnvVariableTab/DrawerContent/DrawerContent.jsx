import React, { useEffect, useRef, useState } from "react";
import "./DrawerContent.scss";
import UploadIcon from "../../../../../Common/ImagesAndIcons/UploadIcon";
import KapPrimaryButton from "../../../../../Common/KapPrimaryButton/KapPrimaryButton";
import KapSecondaryButton from "../../../../../Common/KapSecondayButton/KapSecondaryButton";
import DeleteIcon from "../../../../../Common/ImagesAndIcons/DeleteIcon";

function DrawerContent(props) {
  const { handleClose, setResfreshPageAfterClosing } = props;
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState(null);
  const [envData, setEnvData] = useState({});
  const [consentAfterAddingFile, setConsentAfterAddingFile] = useState(false);
  const [isNotEnvFile, setIsNotEnvfile] = useState(false);
  console.log(envData, "envData");

  //   to check if the file is only .env file
  const isEnvFile = (file) => {
    if (!file) return false;
    const fileName = file.name.toLowerCase();
    return fileName.includes(".env");
  };

  // cleankey and clean value funtions to clean keys and values.
  const cleanKey = (key) => {
    return key.replace(/^.*?(\b[A-Z_]+\b)/i, "$1").trim();
  };

  const cleanValue = (value) => {
    return value.replace(/\\cf4\s*\\strokec4|}\s*$/g, "").trim();
  };

  // to read file data after uploading or dragging and dropping.
  const parseEnvFiles = (fileList) => {
    const envDataObj = {};
    Array.from(fileList).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const text = e.target.result;
        const lines = text.split("\n");
        lines.forEach((line) => {
          const equalIndex = line.indexOf("=");
          if (equalIndex !== -1) {
            const key = line.slice(0, equalIndex).trim();
            const value = line.slice(equalIndex + 1).trim();
            const cleanedValue = cleanValue(value);
            envDataObj[cleanKey(key)] = cleanedValue;
          }
        });
        setEnvData(envDataObj);
        localStorage.setItem("envVariables", JSON.stringify(envDataObj));
      };
      reader.readAsText(file);
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    setFiles(droppedFiles);
    parseEnvFiles(droppedFiles);
  };

  const handleFileSelect = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);
    parseEnvFiles(selectedFiles);
  };

  const handleAddToEnvVariablesList = () => {
    if (!consentAfterAddingFile) {
      setConsentAfterAddingFile(true);
    } else {
      // if user gives consent fir
      const existingData = JSON.parse(localStorage.getItem("envVariables"));
      const newData = existingData ? { ...existingData } : {};
      const updatedData = {
        ...newData,
        ...envData,
      };
      localStorage.setItem("envVariables", JSON.stringify(updatedData));

      handleClose();
      setResfreshPageAfterClosing(true);
    }
  };

  const handelCancel = () => {
    setFiles(null);
    setEnvData({});
    setConsentAfterAddingFile(false);
  };

  // to check all files are evv files
  useEffect(() => {
    if (files && Object.keys(files).length > 0) {
      let allEnvFile = Object.values(files).some((file) => !isEnvFile(file));
      setIsNotEnvfile(allEnvFile);
    }
  }, [files]);

  const handleInputs = (event, index) => {
    const { name, value } = event.target;
    const updatedEnvData = { ...envData };
    if (name === "key") {
      const newKey = value.trim();
      const oldValue = Object.values(envData)[index];
      delete updatedEnvData[Object.keys(envData)[index]];
      updatedEnvData[newKey] = oldValue;
    } else {
      const key = Object.keys(envData)[index];
      updatedEnvData[key] = value.trim();
    }
    setEnvData(updatedEnvData);
  };

  const handleDelete = (index) => {
    const updatedEnvData = { ...envData };
    const keys = Object.keys(updatedEnvData);
    const keyToDelete = keys[index];
    if (keyToDelete) {
      delete updatedEnvData[keyToDelete];
      setEnvData(updatedEnvData);
    }
  };

  return (
    <div className="drawer-content">
      <div className="drop-wrapper">
        {!consentAfterAddingFile ? (
          <>
            <div
              onClick={() => {
                fileInputRef.current.click();
              }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="actual-drop-n-click-wrap"
            >
              {!files ? (
                <>
                  <UploadIcon />
                  <div className="text-content-inside-drop">
                    Click or drag file(s) here to upload
                  </div>
                </>
              ) : (
                <div>
                  <ul>
                    {Array.from(files).map((file, index) => (
                      <li key={index}>{file?.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              hidden
              ref={fileInputRef}
            />

            <div className="sub-heading-env-info">
              Upload a .env file. It should not be greater than 5KB.
              {isNotEnvFile && (
                <p className="error-heading">Please choose env file</p>
              )}
            </div>
          </>
        ) : (
          <div className="inputts-top-wrapper">
            {Object?.keys(envData)?.length > 0 &&
              Object.entries(envData).map(([key, valueLabel], index) => (
                <div className="particular-row-data" key={index}>
                  <span className="name-text">
                    <label>Name</label>
                    <input
                      name="key"
                      value={key}
                      onChange={(event) => handleInputs(event, index)}
                      className="key"
                    ></input>
                  </span>

                  <span className="name-text">
                    <label>Value</label>
                    <input
                      name="value"
                      className="value"
                      onChange={(event) => handleInputs(event, index)}
                      value={valueLabel}
                    ></input>
                  </span>

                  <div
                    className="delete-wrapper-1"
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
              ))}
          </div>
        )}

        <div className="footer-env-wrap">
          <KapPrimaryButton
            buttonText="Add"
            onClick={handleAddToEnvVariablesList}
            disabled={
              !files ||
              Object.keys(files).length === 0 ||
              Object.values(files).some((file) => !isEnvFile(file))
            }
          />

          <KapSecondaryButton buttonText="Cancel" onClick={handelCancel} />
        </div>
      </div>
    </div>
  );
}

export default DrawerContent;
