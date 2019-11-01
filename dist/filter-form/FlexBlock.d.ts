import React, { PureComponent } from 'react';
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
declare class FlexBlock extends PureComponent<FlexBlockProps, FlexBlockStates> {
    private items;
    constructor(props: FlexBlockProps);
    private toggle;
    render(): JSX.Element;
}
export default FlexBlock;
