import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/styles";
import DrawerContent from "../DrawerContent/DrawerContent";

const useStyles = makeStyles({
    modelPaper:{
        width:'50%'
    }
})


export default function DrawerEnv(props) {
  const { open, handleClose } = props;
  const classes = useStyles();

  const handleCloseDrawer = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
    }
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        onKeyDown={handleCloseDrawer}
        classes = {{
            paper:classes.modelPaper,
        }}
        BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
          PaperProps={{
            style: {
              boxShadow: "-16px 0px 12px 0px #00000014",
            },
          }}

      >
       <DrawerContent/>
      </Drawer>
    </div>
  );
}
