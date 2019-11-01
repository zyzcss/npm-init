/// <reference types="react" />
export interface IconProps {
    /** icon标识 */
    iconCode: string;
    /** 可替换的类名 */
    className?: any;
    /** 颜色 默认#333 */
    color?: string;
    /** 大小 默认14 */
    size?: number;
    /** 点击事件 */
    onClick?: (event: React.MouseEvent) => void;
    /** 样式 */
    style?: any;
    /** html id标识 */
    id?: string;
}
