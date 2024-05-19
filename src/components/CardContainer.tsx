import { Grid } from "@mui/material";
import { getSampleJdJSON } from "../data";
import JobCard from "./JobCard";

const CardContainer = () => {
  const jobs = getSampleJdJSON();

  return (
    <Grid container rowSpacing={6} columnSpacing={4} paddingY="60px">
      {jobs.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </Grid>
  );
};

export default CardContainer;
