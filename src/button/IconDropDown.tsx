import React, { PureComponent } from 'react';
import { Dropdown, Menu } from 'antd';
import { IconDropDownProps } from './IconDropDownInterface';
import './iconDropDown.less';

class IconDropDown extends PureComponent<IconDropDownProps, {}> {
  render() {
    const { icon, menus = [], onClick, itemStyle } = this.props;
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
                  ...itemStyle,
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
      <Dropdown overlay={menu} trigger={['click']}>
        {icon}
      </Dropdown>
    );
  }
}
export default IconDropDown;
