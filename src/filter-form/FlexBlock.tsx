import React, { PureComponent } from 'react';

import YuseiIcon from '../icon/index';
import './styles.less';

export interface FlexBlockProps {
  visible: boolean;
  hiddenBoxShadow?: boolean;
  btnGourp?: React.ReactDOM;
  content?: React.ReactDOM;
}


export interface FlexBlockStates {
  visible?: boolean;
}

class FlexBlock extends PureComponent<FlexBlockProps, FlexBlockStates> {
  private items: any = null;
  constructor(props: FlexBlockProps) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }

  private toggle = (visible: boolean) => {
    if (visible) {
      this.setState({
        visible,
      });
    } else {
      this.setState({
        visible,
      });
    }
  };

  render() {
    const { hiddenBoxShadow = false, btnGourp = null, content = null } = this.props;
    const { visible } = this.state;
    let maxHeight = !visible ? 46 : 9999;
    let hidden = true;
    if (this.items !== null) {
      const height = this.items.offsetHeight;
      if (height >= 50) {
        hidden = false;
        if (maxHeight === 46) {
          maxHeight = 60;
        }
      }
    }
    return (
      <div
        className="filter-wrap-form"
        style={{
          maxHeight,
          overflow: 'hidden',
          boxShadow: hiddenBoxShadow ? '0px 0px 0px #fff' : '0px 0px 12px #D7E3FA',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
              ref={ref => {
                this.items = ref;
              }}
            >
              {content}
            </div>
            <div style={{ width: 1, height: 16 }} hidden={hidden} />
            <div
              className="filter-wrap-form-pullIcon"
              style={{ textAlign: 'center' }}
              hidden={hidden}
              onClick={() => this.toggle(!visible)}
            >
              {visible ? (
                <YuseiIcon className="iconfont" iconCode="&#xec7c;" color="#999" size={14} />
              ) : (
                  <YuseiIcon className="iconfont" iconCode="&#xe624;" color="#999" size={14} />
                )}
            </div>
          </div>
          <div style={{ flex: 0, paddingRight: 10, minWidth: 160, textAlign: 'right' }}>
            {btnGourp}
          </div>
        </div>
      </div>
    );
  }
}


export default FlexBlock;
