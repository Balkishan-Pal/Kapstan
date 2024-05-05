import React, { useEffect, useState } from "react";
import "./EnvVariableTab.scss";
import AddIcon from "../../../../Common/ImagesAndIcons/AddIcon";
import DownLoadIcon from "../../../../Common/ImagesAndIcons/DownLoadIcon";
import DeleteIcon from "../../../../Common/ImagesAndIcons/DeleteIcon";
import DrawerEnv from "./DrawerEnv/DrawerEnv";

function EnvVariableTab() {
  const [envVariableList, setEnvVariableList] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const [refreshPageAfterClosing,setResfreshPageAfterClosing] = useState(false)

  const closeDrawer = () => {
    setOpenDrawer(false);
  };
  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  useEffect(() => {
    const storedEnvVariables = localStorage.getItem("envVariables");
    if (storedEnvVariables) {
      setEnvVariableList(JSON.parse(storedEnvVariables));
    }
  }, [refreshPageAfterClosing]);

  const handleDeleteEntry = (key) => {
    const updatedEnvVariableList = { ...envVariableList };
    delete updatedEnvVariableList[key];
    setEnvVariableList(updatedEnvVariableList);
    localStorage.setItem("envVariables", JSON.stringify(updatedEnvVariableList));
  };


  return (
    <div className="environ-top-wrapper">
      <div className="heading-wrapper-env-variable">
        <h3>Environment File Details</h3>
        <span className="btn-wrapper-env">
          <button type="button" onClick={handleOpenDrawer}>
            <AddIcon />
          </button>
          <button type="button">
            <DownLoadIcon />
          </button>
        </span>
      </div>

      <div className="data-to-show-wrapper">
        {Object.keys(envVariableList).length === 0 ? (
          <div className="info-not-present">
            No environment variable created.
          </div>
        ) : (
          <div className="info-present-list-env">
            {Object?.entries(envVariableList)?.map(([key, value]) => (
              <div className="particular-line" key={key}>
                <div className="box1">{key}</div>
                <div className="box2">{value}</div>
                <div className="box3" onClick={() => handleDeleteEntry(key)}>
                  <DeleteIcon />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {openDrawer && <DrawerEnv open={openDrawer} handleClose={closeDrawer} setResfreshPageAfterClosing={setResfreshPageAfterClosing} />}
    </div>
  );
}

export default EnvVariableTab;
