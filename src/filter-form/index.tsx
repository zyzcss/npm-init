import { Form } from "antd";
import { WrappedFormUtils } from "antd/es/form/Form";
import React, { PureComponent } from "react";

import YuseiIcon from "../Icon/Icon";
import { FilterFormProps, FilterFormStates } from "../types/filter";

import "./styles.less";

class FilterForm extends PureComponent<FilterFormProps, FilterFormStates>  {
    public items: any = null;
    constructor(props: FilterFormProps) {
        super(props);
        this.state = {
            visible: props.visible,
        };
    }

    public componentDidMount() {
        const { refForm, pageName, timeout = 0 } = this.props;
        if (refForm) {
            refForm(this.props.form);
        }
        if (pageName) {
            // const formValue = this.props.filterForm[pageName] || {};
            // if (formValue) {
            //     setTimeout(() => {
            //         this.props.form.setFieldsValue(formValue, () => {
            //             this.submit(null, this.props.form);
            //         });
            //     }, timeout);
            // }
        }
    }

    public componentWillUnmount() {
        const { pageName } = this.props;
        if (pageName) {
            // const formValue = this.props.form.getFieldsValue();
            // this.props.dispatch({
            //     type: "filterForm/saveValues",
            //     payload: formValue,
            //     pageName,
            // });
        }
    }

    public submit = (e: React.FormEvent, form: WrappedFormUtils) => { // 提交筛选内容
        if (e) { e.preventDefault(); }
        form.validateFields((err: any, values: any) => {
            if (!err) {
                const params: any = {};
                const { filterColumns } = this.props;
                Object.keys(values).forEach((item) => {
                    const col: any | undefined = filterColumns.find((c) => c.dataIndex === item);

                    if (typeof col.refactory === "function" && values[item]) {
                        params[item] = col.refactory(values[item]);
                    } else {
                        params[item] = values[item];
                    }
                });
                this.props.searchFunc(params, values);
            }
        });
    }

    public reset = (form: WrappedFormUtils) => {// 重置筛选表单数据（保留了有初始值的表单数据）
        const { resetFunc } = this.props;
        if (typeof resetFunc === "function") {
            resetFunc(form);
        } else {
            form.resetFields();
            this.props.searchFunc({});
        }
    }

    public toggle = (visible: boolean) => {
        if (visible) {
            this.setState({
                visible,
            });
        } else {
            this.setState({
                visible,
            });
        }
    }

    public render() {
        const { form, filterColumns, hiddenBoxShadow = false } = this.props;
        const { getFieldDecorator } = form;
        const { visible } = this.state;
        const isOnly = filterColumns.length === 1;
        const btnGourp = (
            <div>
                <div
                    style={{
                        display: "inline-block",
                        marginRight: isOnly ? 0 : 10,
                    }}
                >
                    <button
                        type="submit"
                    >12321</button>
                </div>
                <span hidden={isOnly}>
                    <button
                        type="reset"
                    >aaa</button>
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
        const FormItems = filterColumns.map((item) => {
            const { component, dataIndex, initialValue, title } = item;
            return (
                <div
                    key={dataIndex}
                    style={{
                        marginBottom: !visible ? 100 : 8,
                        marginLeft: 10,
                    }}
                >
                    <span>{title}{title ? "：" : ""}</span>
                    {
                        getFieldDecorator(dataIndex, {
                            initialValue,
                        })(component)
                    }
                </div>
            );
        });
        return (
            <Form
                onSubmit={(e) => { this.submit(e, form); }}
                onReset={() => { this.reset(form); }}
                className="filter-wrap-form"
                style={{ maxHeight, overflow: "hidden", boxShadow: hiddenBoxShadow ? "0px 0px 0px #fff" : "0px 0px 12px #D7E3FA" }}
            >
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1 }}>
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                            }}
                            ref={(ref) => { this.items = ref; }}
                        >
                            {FormItems}
                        </div>
                        <div style={{ width: 1, height: 16 }} hidden={hidden} />
                        <div
                            className="filter-wrap-form-pullIcon"
                            style={{ textAlign: "center" }}
                            hidden={hidden}
                            onClick={() => this.toggle(!visible)}
                        >
                            {visible ? (
                                <YuseiIcon
                                    className="iconfont"
                                    iconCode="&#xec7c;"
                                    color="#999"
                                    size={14}
                                />) : (
                                    <YuseiIcon
                                        className="iconfont"
                                        iconCode="&#xe624;"
                                        color="#999"
                                        size={14}
                                    />
                                )}
                        </div>
                    </div>
                    <div style={{ flex: 0, paddingRight: 10, minWidth: 160, textAlign: "right" }}>
                        {btnGourp}
                    </div>
                </div>
            </Form>
        );
    }
}

const Filter = Form.create<FilterFormProps>()(FilterForm);

export default Filter;
