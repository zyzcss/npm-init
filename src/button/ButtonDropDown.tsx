import React, { PureComponent } from 'react';
import { Dropdown, Menu } from 'antd';
import { ButtonDropDownProps } from './ButtonDropDownInterface';
import './buttonDropDown.less';

class ButtonDropDown extends PureComponent<ButtonDropDownProps, {}> {
  render() {
    const {
      icon,
      menus = [],
      onClick,
      style = {},
      buttonStyle = {},
      type = 'default',
      selectIndex = 0,
      disabled = false,
    } = this.props;
    const length = menus.length - 1;
    const { Item } = Menu;
    const menu = (
      <Menu style={{ minWidth: 98 }} onClick={onClick}>
        {menus.map((item, i) => {
          return (
            <Item key={i}>
              <div
                className="menuItem"
                style={{
                  borderBottom: i < length ? '1px solid rgba(0,0,0,0.1)' : 'none',
                  color: '#2F54EB',
                }}
              >
                {item}
              </div>
            </Item>
          );
        })}
      </Menu>
    );
    return (
      <Dropdown overlay={menu} placement="bottomLeft" disabled={disabled}>
        <div style={{ display: 'flex', ...style }}>
          <div
            className={type === 'primary' ? 'dropButton primaryButton' : 'dropButton'}
            style={buttonStyle}
          >
            {icon}
            <span className="buttonText">{menus[selectIndex]}</span>
          </div>
          <div className={type === 'primary' ? 'dropMore primaryButton' : 'dropMore'}>...</div>
        </div>
      </Dropdown>
    );
  }
}
export default ButtonDropDown;
