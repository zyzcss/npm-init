import React, { PureComponent } from 'react';
import { FilterForm, Icon, Button } from './index';
import styles from '../assets/font/iconfont.css';
import {
  handleResponse,
  tirmUrlValue,
  handleDownloadFile,
  responseDownloadOrShowMessage,
} from './utils/index';
import 'antd/dist/antd.css';
const { ButtonDropDown, IconDropDown } = Button;
/**
 * 测试启动页
 */
class test extends PureComponent {
  state = {
    selectIndex: 0,
  };
  componentDidMount() {}

  handleClick = e => {
    this.setState({
      selectIndex: e.key,
    });
  };
  render() {
    const { selectIndex } = this.state;
    return (
      <div>
        <FilterForm
          filterColumns={[
            {
              component: <select></select>,
              title: '123',
              dataIndex: '123',
            },
          ]}
        />
        <Icon iconCode="&#xe63d;" />
        <Button action="create" />
        <ButtonDropDown
          menus={['短', '长------------------------', '不长不短']}
          type="primary"
          icon={<span>①</span>}
          onClick={this.handleClick}
          selectIndex={selectIndex}
        />
        <IconDropDown
          menus={['短', <span>长--------------------------</span>, '不长不短']}
          icon={<Icon iconCode="&#xe608;" />}
        />
      </div>
    );
  }
}

export default test;
