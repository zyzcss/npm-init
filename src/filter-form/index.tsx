import { Form } from 'antd';
import { WrappedFormUtils } from 'antd/es/form/Form';
import { FormComponentProps } from 'antd/es/form';
import React, { PureComponent } from 'react';

import YuseiIcon from '../icon/index';
import './styles.less';

interface filterColumn {
  dataIndex: string;
  title: string;
  component: React.ReactNode;
  initialValue?: any;
  refactory?: (val: any) => any;
}

export interface FilterFormProps extends FormComponentProps {
  filterColumns: Array<filterColumn>;
  searchFunc: (params?: any, values?: any) => void;
  resetFunc?: (form?: WrappedFormUtils) => void;
  noReload?: boolean;
  refForm?: (form?: WrappedFormUtils) => void;
  visible?: boolean;
  pageName?: string;
  timeout?: number;
  hiddenBoxShadow?: boolean;
}

export interface FilterFormStates {
  visible?: boolean;
}

class FilterForm extends PureComponent<FilterFormProps, FilterFormStates> {
  private items: any = null;
  constructor(props: FilterFormProps) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }

  componentDidMount() {
    const { refForm } = this.props;
    if (refForm) {
      refForm(this.props.form);
    }
  }

  private submit = (e: React.FormEvent, form: WrappedFormUtils) => {
    // 提交筛选内容
    if (e) {
      e.preventDefault();
    }
    form.validateFields((err: any, values: any) => {
      if (!err) {
        const params: any = {};
        const { filterColumns } = this.props;
        Object.keys(values).forEach(item => {
          const col: any | undefined = filterColumns.find(c => c.dataIndex === item);

          if (typeof col.refactory === 'function' && values[item]) {
            params[item] = col.refactory(values[item]);
          } else {
            params[item] = values[item];
          }
        });
        this.props.searchFunc(params, values);
      }
    });
  };

  private reset = (form: WrappedFormUtils) => {
    // 重置筛选表单数据（保留了有初始值的表单数据）
    const { resetFunc } = this.props;
    if (typeof resetFunc === 'function') {
      resetFunc(form);
    } else {
      form.resetFields();
      this.props.searchFunc({});
    }
  };

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
    const { form, filterColumns, hiddenBoxShadow = false } = this.props;
    const { getFieldDecorator } = form;
    const { visible } = this.state;
    const isOnly = filterColumns.length === 1;
    const btnGourp = (
      <div>
        <div
          style={{
            display: 'inline-block',
            marginRight: isOnly ? 0 : 10,
          }}
        >
          <button type="submit">12321</button>
        </div>
        <span hidden={isOnly}>
          <button type="reset">aaa</button>
        </span>
      </div>
    );
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
    const FormItems = filterColumns.map(item => {
      const { component, dataIndex, initialValue, title } = item;
      return (
        <div
          key={dataIndex}
          style={{
            marginBottom: !visible ? 100 : 8,
            marginLeft: 10,
          }}
        >
          <span>
            {title}
            {title ? '：' : ''}
          </span>
          {getFieldDecorator(dataIndex, {
            initialValue,
          })(component)}
        </div>
      );
    });
    return (
      <Form
        onSubmit={e => {
          this.submit(e, form);
        }}
        onReset={() => {
          this.reset(form);
        }}
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
              {FormItems}
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
      </Form>
    );
  }
}

const Filter = Form.create<FilterFormProps>()(FilterForm);

export default Filter;
