import React, { useState } from "react";
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { formatCamelCaseToHuman } from '../../helpers/camelCaseFormat';

import StyledDropDown from './StyledDropDown';

const DropDownMenu = ({presets, setCurrentMode}) => {

  const [dropDownTitle, setDropDownTitle] = useState('Pick Mode');

  const onSwitchHandler = (e, modeKey, modeName) => {
    setDropDownTitle(modeName);
    setCurrentMode(modeKey)
  }

  const menu = (
    <Menu>
      {Object.entries(presets).map(el => {
        const modeKey = el[0];
        const modeName = formatCamelCaseToHuman(modeKey)

        return (<Menu.Item
            key={modeKey}
            onClick={(e) => onSwitchHandler(e, modeKey, modeName)}
          >
            {modeName}
          </Menu.Item>)
        }
      )}
    </Menu>
  );

  return (
    <StyledDropDown>
      <Dropdown overlay={menu} trigger={'click'}>
        <p className="ant-dropdown-link">
          {dropDownTitle} <DownOutlined/>
        </p>
      </Dropdown>
    </StyledDropDown>
  )
};

export default DropDownMenu