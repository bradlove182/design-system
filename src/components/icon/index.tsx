import IconArrow from "./arrow";
import IconCross from "./cross";
import IconGitHub from "./github";
import IconDot from "./dot";
import IconEyeOpen from "./eye-open";
import IconEyeClosed from "./eye-closed";
import IconEye from "./eye";
import IconMail from "./mail";

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
Icon.Eye = IconEye;
Icon.EyeOpen = IconEyeOpen;
Icon.EyeClosed = IconEyeClosed;
Icon.Mail = IconMail;

export { Icon };
