import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SettingsIcon from "@mui/icons-material/Settings";
import "./dropdownComp.scss";
import { Collapse } from "@mui/material";

const DropdownComp = () => {
  const { t } = useTranslation();
  const characteristics = ["Security Level", "Other"];
  const [displayDropdown, setDisplayDropdown] = useState(false);

  return (
    <div className="dropdown-wrapper">
      <div className="element new">
        <div className="icon right">
          <InsertDriveFileIcon />
        </div>
        <p>New Configuration</p>
      </div>
      <div
        className="element dropdown"
        onClick={() => setDisplayDropdown(!displayDropdown)}
      >
        <div className="icon right">
          <SettingsIcon />
        </div>
        <p>Characteristics</p>
        <div className="icon left">
          {displayDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      <div className={`children `}>
        <Collapse in={displayDropdown}>
          {displayDropdown &&
            characteristics.map((char) => (
              <div className={`${char} element child`}>
                <p>{char}</p>
              </div>
            ))}
        </Collapse>
      </div>
    </div>
  );
};

export default DropdownComp;
