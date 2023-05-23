import { Navigation } from "src/components/navigation";

import style from "./layout.module.css";

import "../lib/index.css";

export const metadata = {
    title: "Design System",
    icons: "/logo.svg",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={style["app-layout"]}>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
