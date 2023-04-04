import { useState } from "react";

import { Button, Text } from "../components";

function App() {
    return (
        <div>
            <Text as={"h1"}>{"Design System"}</Text>
            <Text as={"h2"}>{"Design System"}</Text>
            <Text as={"h3"}>{"Design System"}</Text>
            <Text as={"h4"}>{"Design System"}</Text>
            <Text as={"h5"}>{"Design System"}</Text>
            <Text as={"h6"}>{"Design System"}</Text>
            <Text>{"Design System"}</Text>
            <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                    <Button>{"Button"}</Button>
                    <Button appearance="transparent">{"Button"}</Button>
                    <Button appearance="outline">{"Button"}</Button>
                </div>
                <div className="flex gap-2">
                    <Button variant="icon">{"1"}</Button>
                    <Button variant="icon" appearance="transparent">
                        {"2"}
                    </Button>
                    <Button variant="icon" appearance="outline">
                        {"3"}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default App;
