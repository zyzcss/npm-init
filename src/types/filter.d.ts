import { FormComponentProps } from 'antd/es/form';
import { WrappedFormUtils } from 'antd/es/form/Form'
interface filterColumn {
    dataIndex: string,
    title: string,
    component: React.ReactNode,
    initialValue?: any,
    refactory?: (val: any) => any,
}

export interface FilterFormProps extends FormComponentProps {
    filterColumns: Array<filterColumn>,
    searchFunc: (params?: any, values?: any) => void,
    resetFunc?: (form?: WrappedFormUtils) => void,
    noReload?: boolean,
    refForm?: (form?: WrappedFormUtils) => void,
    visible?: boolean,
    pageName?: string,
    timeout?: number,
    hiddenBoxShadow?: boolean,
}


export interface FilterFormStates {
    visible?: boolean,
}
