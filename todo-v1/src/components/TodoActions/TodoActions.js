import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import "./TodoActions.css";

function TodoActions({ handleChangeTab, tab }) {
  return (
    <div className="actions-wrapper">
      <Tabs 
      value={tab} 
      onChange={(e, tabValue) => handleChangeTab(tabValue)}>
        <Tab label={<FormatListBulletedIcon />} />
        <Tab label={<RadioButtonUncheckedIcon />} />
        <Tab label={<DownloadDoneIcon />} />
      </Tabs>
    </div>
  );
}

export default TodoActions;
