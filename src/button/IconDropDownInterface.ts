import { DropDownProps } from 'antd/es/dropdown';
import { MenuProps } from 'antd/es/menu';

export interface IconDropDownProps extends DropDownProps, MenuProps {
  icon: React.ReactNode;
  menus: Array<string | React.ReactNode>;
  itemStyle?: any;
}
