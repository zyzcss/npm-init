import { ButtonProps } from 'antd/es/button';

export interface BtnProps extends ButtonProps {
  style?: any;
  action?: 'add' | 'delete' | '导入' | '导出' | '下载' | '生成' | '刷新';
  customIcon?: React.ReactNode;
}
