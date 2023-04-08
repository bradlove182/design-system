import IconArrow from "./arrow";
import IconCross from "./x";
import IconGitHub from "./github";
import IconCircle from "./circle";
import IconEye from "./eye";
import IconAt from "./at";

export interface IconProps {
    variant?:
        | "info"
        | "error"
        | "success"
        | "warning"
        | "default"
        | "subdued"
        | "amplified";
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
}

const Icon = () => {};

Icon.Arrow = IconArrow;
Icon.GitHub = IconGitHub;
Icon.Cross = IconCross;
Icon.Circle = IconCircle;
Icon.Eye = IconEye;
Icon.At = IconAt;

export { Icon };
