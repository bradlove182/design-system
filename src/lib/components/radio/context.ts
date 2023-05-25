import { createServerContext } from "react";

export const RadioContext = createServerContext("radio-context", {
    name: "",
});
