import {Container, Grid, Icon, Typography} from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Header()
{
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
            <Grid container spacing={2} className="w-0.9">
                <Grid size={12} className={"bg-zinc-800 rounded-xl"}>
                    <p className="text-6xl my-8 text-center">
                        Cameron Boutilier
                    </p>
                </Grid>
                <Grid size={12} className={"bg-zinc-800 rounded-xl"}>
                    <Container className={"flex flex-wrap justify-between my-3"}>
                        <p className="text-xl ml-2"> Software Developer </p>
                        <p className="text-xl">•</p>
                        <p className="text-xl"> Amateur Electrical Engineer </p>
                        <p className="text-xl">•</p>
                        <p className="text-xl mr-2"> Science Enjoyer </p>
                    </Container>
                </Grid>
                <Grid size={3} className={"bg-zinc-800 rounded-xl"}>
                        <p className="text-center text-xl my-3">
                            <a href="tel:+15878991025">
                                <PhoneIcon className="mb-1"/>     Phone
                            </a>
                        </p>
                </Grid>
                <Grid size={3} className={"bg-zinc-800 rounded-xl"}>
                    <p className="text-center text-xl my-3">
                        <a href="mailto:cameronboutilier@live.com">
                            <EmailIcon className="mb-1"/>   Email
                        </a>
                    </p>
                </Grid>
                <Grid size={3} className={"bg-zinc-800 rounded-xl"}>
                    <p className="text-center text-xl my-3">
                        <a href="https://www.linkedin.com/in/cameron-boutilier-653b2a9a/"> 
                            <LinkedInIcon className="mb-1"/>   LinkedIn 
                        </a>
                    </p>
                </Grid>
                <Grid size={3} className={"bg-zinc-800 rounded-xl"}>
                    <p className="text-center text-xl my-3">
                        <a href="https://www.linkedin.com/in/cameron-boutilier-653b2a9a/">
                            <GitHubIcon className="mb-1"/>   GitHub
                        </a>
                    </p>
                </Grid>
                <Grid size={12} className={"bg-zinc-800 rounded-xl"}>
                    <p className="text-xl m-8 text-left ">
                        My name is Cameron and I am a Software Developer with over a decade of professional experience, driven by a passion for tackling complex challenges and delivering optimized, robust code. Skilled in applying diverse concepts to create innovative solutions, I thrive in dynamic environments with a broad range of problems, consistently finding creative approaches to both new and familiar tasks.
                    </p>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Header;