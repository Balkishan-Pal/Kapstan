import React, { useState } from "react";
import "./EnvVariableTab.scss";
import AddIcon from "../../../../Common/ImagesAndIcons/AddIcon";
import DownLoadIcon from "../../../../Common/ImagesAndIcons/DownLoadIcon";
import DeleteIcon from "../../../../Common/ImagesAndIcons/DeleteIcon";
import DrawerEnv from "./DrawerEnv/DrawerEnv";

const testData = [{ abc: "123" }, { def: "456" }, { ghi: "789" }];

function EnvVariableTab() {
  const [envVariableList, setEnvVariableList] = useState(testData);
  const [openDrawer,setOpenDrawer] = useState(false);

  const closeDrawer = ()=>{
    setOpenDrawer(false)
  }
const handleOpenDrawer = ()=>{
  setOpenDrawer(true)

}
  return (
    <div className="environ-top-wrapper">
      <div className="heading-wrapper-env-variable">
        <h3>Environment File Details</h3>
        <span className="btn-wrapper-env">
          <button type="button" onClick={handleOpenDrawer} >
            <AddIcon />
          </button>
          <button type="button">
            <DownLoadIcon />
          </button>
        </span>
      </div>

      <div className="data-to-show-wrapper">
        {envVariableList?.length === 0 ? (
          <div className="info-not-present">
            No environment variable created.
          </div>
        ) : (
          <div className="info-present-list-env">
            {envVariableList?.map((envData, index) => (
              <div className="particular-line" key={index}>
                {Object.entries(envData).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <div>{key}</div>
                    <div>{value}</div>
                    <div><DeleteIcon/></div>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

     {
      openDrawer && (
        <DrawerEnv open ={openDrawer}  handleClose = {closeDrawer}/>
       
      )
     }

    </div>
  );
}

export default EnvVariableTab;
