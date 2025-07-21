import  {Container} from "@mui/material";
import Header from "@/app/Components/Header";
import Skills from "@/app/Components/Skills";

export default function Home() {
  return (
      <Container className="bg-zinc-900 border-solid mt-6 " sx={{
          minWidth: "725px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          
      }}
                 disableGutters={true}
      >
          <Header/>
      </Container>
  );
}
