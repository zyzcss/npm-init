import { DropDownProps } from 'antd/es/dropdown';
import { MenuProps } from 'antd/es/menu';

export interface ButtonDropDownProps extends DropDownProps, MenuProps {
  selectIndex?: number | string;
  icon?: React.ReactNode;
  type?: 'default' | 'primary';
  menus: Array<string | React.ReactNode>; // (string |React.ReactNode)[]
  style?: any;
  buttonStyle?: any;
}
