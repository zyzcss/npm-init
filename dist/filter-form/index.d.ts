import { WrappedFormUtils } from 'antd/es/form/Form';
import { FormComponentProps } from 'antd/es/form';
import React, { PureComponent } from 'react';
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
declare class FilterForm extends PureComponent<FilterFormProps, FilterFormStates> {
    private items;
    constructor(props: FilterFormProps);
    componentDidMount(): void;
    private submit;
    private reset;
    private toggle;
    render(): JSX.Element;
}
declare const Filter: import("antd/lib/form/interface").ConnectedComponentClass<typeof FilterForm, Pick<FilterFormProps, "filterColumns" | "searchFunc" | "resetFunc" | "noReload" | "refForm" | "visible" | "pageName" | "timeout" | "hiddenBoxShadow" | "wrappedComponentRef">>;
export default Filter;
