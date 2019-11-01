import React, { PureComponent } from 'react';
import { Button } from 'antd';
import { BtnProps } from './ButtonInterface';
import actionTypes from './actionTypeMaps';
import ButtonDropDown from './ButtonDropDown';
import IconDropDown from './IconDropDown';
import { Icon } from '../index';

class Btn extends PureComponent<BtnProps, {}> {
  static ButtonDropDown: typeof ButtonDropDown;
  static IconDropDown: typeof IconDropDown;
  render() {
    const { style, onClick, disabled, action, htmlType, size, type, customIcon } = this.props;
    const actionType = actionTypes[action];
    let { color, borderColor } = actionType;
    const { defaultType = 'default', iconCode, text } = actionType;
    const finalType = type || defaultType;
    const isNotDefault = finalType !== 'default';
    if (isNotDefault) {
      borderColor = color = '#FFF';
    }
    return (
      <Button
        onClick={onClick}
        disabled={disabled}
        htmlType={htmlType}
        size={size}
        type={finalType}
        style={{ color, borderColor, padding: '0 8px', ...style }}
      >
        {customIcon ? <span style={{ marginRight: 8 }}>{customIcon}</span> : null}
        {!customIcon && iconCode && (
          <Icon
            className="iconfont"
            iconCode={iconCode}
            color={color}
            size={16}
            style={{ marginRight: 8 }}
          />
        )}
        {text}
      </Button>
    );
  }
}
export default Btn;
