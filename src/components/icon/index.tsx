export interface IconProps {
    variant?:
        | "brand"
        | "error"
        | "success"
        | "warning"
        | "default"
        | "subdued"
        | "amplified";
    size?: 1 | 2 | 3 | 4 | 5;
}

export { default as IconGitHub } from "./github";
export { default as IconArrow } from "./arrow";
export { default as IconCross } from "./cross";
