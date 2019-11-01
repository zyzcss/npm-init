import React from 'react';

import{ IconProps } from './iconInterface'
import './index.less';

class Icon extends React.PureComponent<IconProps, {}> {
  public render() {
    const {
      iconCode,
      color = '#333',
      size = 14,
      // tslint:disable-next-line: no-empty
      onClick = (event: React.MouseEvent) => {},
      style = {},
      id,
      className = null,
    } = this.props;
    return (
      <i
        className={className ? className : 'ui-icon-font'}
        style={{ color, fontSize: size, cursor: 'pointer', ...style }}
        onClick={onClick}
        id={id}
      >
        {iconCode}
      </i>
    );
  }
}
export default Icon;
