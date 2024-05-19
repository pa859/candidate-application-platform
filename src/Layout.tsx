import { Stack } from "@mui/material";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <Stack maxWidth="80%" margin="auto">
      <Header />
      <CardContainer />
    </Stack>
  );
};

export default Layout;
