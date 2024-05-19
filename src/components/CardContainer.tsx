import { Grid } from "@mui/material";
import { useEffect } from "react";
import { getSampleJdJSON } from "../data";
import { setJobsAction } from "../store";
import { useFilteredJobCards } from "../store/hooks";
import { useAppDispatch } from "../store/store";
import JobCard from "./JobCard";

const CardContainer = () => {
  const jobs = useFilteredJobCards();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const response = getSampleJdJSON();
    dispatch(setJobsAction(response));
  }, []);

  return (
    <Grid container rowSpacing={6} columnSpacing={4} paddingY="60px">
      {jobs.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </Grid>
  );
};

export default CardContainer;
