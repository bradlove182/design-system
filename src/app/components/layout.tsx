import { Header } from "src/components/header";

import style from "./layout.module.css";

const ComponentLayout = ({ children }: { children: React.ReactNode }) => (
    <>
        <Header />
        <main className={style.content}>{children}</main>
    </>
);

export default ComponentLayout;
