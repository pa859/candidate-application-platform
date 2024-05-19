import { Grid } from "@mui/material";
import FilterComponent from "./filters/FilterComponent";
import { FILTER_CONFIG } from "./filters/config";

const Header = () => {
  return (
    <Grid container gap={1} paddingTop="30px">
      {FILTER_CONFIG.map((filter) => (
        <Grid item lg={2} key={filter.name}>
          <FilterComponent
            name={filter.name}
            label={filter.label}
            options={filter.options}
            type={filter.type}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Header;
