import { PureComponent } from 'react';
import { BtnProps } from './ButtonInterface';
import ButtonDropDown from './ButtonDropDown';
import IconDropDown from './IconDropDown';
declare class Btn extends PureComponent<BtnProps, {}> {
    static ButtonDropDown: typeof ButtonDropDown;
    static IconDropDown: typeof IconDropDown;
    render(): JSX.Element;
}
export default Btn;
