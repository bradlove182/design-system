import IconArrow from "./arrow";
import IconCross from "./cross";
import IconGitHub from "./github";
import IconDot from "./dot";

export interface IconProps {
    variant?:
        | "info"
        | "error"
        | "success"
        | "warning"
        | "default"
        | "subdued"
        | "amplified";
    size?: 1 | 2 | 3 | 4 | 5;
}

const Icon = () => {};

Icon.Arrow = IconArrow;
Icon.GitHub = IconGitHub;
Icon.Cross = IconCross;
Icon.Dot = IconDot;

export { Icon };
