import { Grid, OutlinedInput } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import MultipleSelect from "./common/MultipleSelect";
import SingleSelect from "./common/SingleSelect";

const experiences = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const locations = ["Remote", "Hybrid", "In-office"];

const roles = ["frontend", "ios", "android", "tech lead", "backend"];

const pays = ["0", "10", "20", "30", "40", "50", "60", "70"];

const Header = () => {
  const [experience, setExperience] = React.useState<string>("");
  const [location, setLocation] = React.useState<string[]>([]);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [basePay, setBasePay] = React.useState<string>("");

  const handleExperienceChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setExperience(value);
  };

  const handleLocationChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setLocation(typeof value === "string" ? value.split(",") : value);
  };

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const handleBasePayChange = (event: SelectChangeEvent<string>) => {
    const {
      target: { value },
    } = event;
    setBasePay(value);
  };

  return (
    <Grid container gap={1} paddingTop="30px">
      <Grid item lg={2}>
        <SingleSelect
          label="Experience"
          value={experience}
          onChange={handleExperienceChange}
          items={experiences}
        />
      </Grid>
      <Grid>
        <OutlinedInput placeholder="Company Name" />
      </Grid>
      <Grid lg={2}>
        <MultipleSelect
          label="Location"
          value={location}
          onChange={handleLocationChange}
          items={locations}
        />
      </Grid>
      <Grid lg={2}>
        <MultipleSelect
          label="Roles"
          value={personName}
          onChange={handleChange}
          items={roles}
        />
      </Grid>
      <Grid lg={2}>
        <SingleSelect
          label="Min Base Pay"
          value={basePay}
          onChange={handleBasePayChange}
          items={pays}
        />
      </Grid>
    </Grid>
  );
};

export default Header;
