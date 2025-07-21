"use client";

import {Container, Typography} from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
function Skills()
{
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    return (
        <Container sx={{
            minWidth: "670px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexDirection: "column",
        }}
        disableGutters={true}>
            <Accordion sx={{}} className="w-full mt-4 bg-zinc-800" expanded={expanded === 'skills'} onChange={handleChange('skill')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="skillsbh-content"
                    id="skillsbh-header"
                >
                    <Typography component="span" className="bg-zinc-800" sx={{ width: '33%', flexShrink: 0 }}>
                        Skills
                    </Typography>
                    <Typography component="span" sx={{ color: 'text.secondary' }}>
                        I am an accordion
                    </Typography>
                </AccordionSummary>
            </Accordion>
        </Container>
    );
}

export default Skills;