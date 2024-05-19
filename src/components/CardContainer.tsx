import { Grid } from "@mui/material";
import { useEffect } from "react";
import { setJobsAction } from "../store";
import { useFilteredJobCards, usePageNumber } from "../store/hooks";
import { useAppDispatch } from "../store/store";
import { fetchJobs } from "../utils";
import JobCard from "./JobCard";

const CardContainer = () => {
  const jobs = useFilteredJobCards();
  const pageNums = usePageNumber();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const res = fetchJobs(pageNums);
    dispatch(setJobsAction([...jobs, ...res]));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.body;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        const res = fetchJobs(pageNums);
        dispatch(setJobsAction([...jobs, ...res]));
      }
    };

    const bodyElement = document.querySelector("body");
    bodyElement?.addEventListener("scroll", handleScroll);

    return () => {
      bodyElement?.removeEventListener("scroll", handleScroll);
    };
  }, [pageNums, jobs]);

  return (
    <Grid container rowSpacing={6} columnSpacing={4} paddingY="60px">
      {jobs.map((job) => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </Grid>
  );
};

export default CardContainer;
