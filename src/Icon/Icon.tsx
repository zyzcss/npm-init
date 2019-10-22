import { IconProps } from "../types/Icon";

import React from "react";

class Icon extends React.PureComponent<IconProps, {}> {
    public render() {
        const {
            iconCode,
            color = "#333",
            size = 14,
            // tslint:disable-next-line: no-empty
            onClick = (event: React.MouseEvent) => {},
            style = {},
            id,
            className,
        } = this.props;
        return (
            <i
                className={className}
                style={{ color, fontSize: size, cursor: "pointer", ...style }}
                onClick={onClick}
                id={id}
            >
                {iconCode}
            </i>
        );
    }
}
export default Icon;
