import { Box } from "@mui/material";
import DocContainer from "./DocContent";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <DocContainer />
    </Box>
  );
};

export default Dashboard;
