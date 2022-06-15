import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function LoadingSping() {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CircularProgress className="circular-progress" size={100}/>
      </Box>
    </Container>
  );
}
