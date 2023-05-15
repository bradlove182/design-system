import React, { useRef, useCallback } from "react";
import { Text, Grid, Dropdown, Button } from "@components";

const SectionDropdown: React.ComponentType = () => {
    return (
        <Grid as="section" alignItems="start" columns={1} gap={3}>
            <Text as={"h2"}>{"Dropdown"}</Text>
            <Grid columns={1} gap={5}>
                <Dropdown align="right">
                    <Dropdown.Target>
                        <Button>{"Show Dropdown"}</Button>
                    </Dropdown.Target>
                    <Dropdown.Menu>
                        <div>{"Menu Item 1"}</div>
                        <div>{"Menu Item 2"}</div>
                        <div>{"Menu Item 3"}</div>
                        <div>{"Menu Item 4"}</div>
                        <div>{"Menu Item 5"}</div>
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
        </Grid>
    );
};

export default SectionDropdown;
