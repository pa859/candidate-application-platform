import { Stack } from "@mui/material";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

const Layout = () => {
  return (
    <Stack paddingX="200px">
      <Header />
      <CardContainer />
    </Stack>
  );
};

export default Layout;
