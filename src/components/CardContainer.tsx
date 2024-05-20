import { Grid, Modal, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { setJobsAction } from "../store";
import { useFilteredJobCards, usePageNumber } from "../store/hooks";
import { useAppDispatch } from "../store/store";
import { fetchJobs } from "../utils";
import JobCard from "./JobCard";
import JobView from "./JobView";

const CardContainer = () => {
  const [jobID, setJobID] = useState<null | string>(null);

  const jobs = useFilteredJobCards();
  const pageNo = usePageNumber();

  const dispatch = useAppDispatch();

  const selectedCard = jobs.find((job) => job.jdUid === jobID);

  useEffect(() => {
    const res = fetchJobs(pageNo);
    dispatch(setJobsAction([...jobs, ...res]));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.body;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        const res = fetchJobs(pageNo);
        dispatch(setJobsAction([...jobs, ...res]));
      }
    };

    const bodyElement = document.querySelector("body");
    bodyElement?.addEventListener("scroll", handleScroll);

    return () => {
      bodyElement?.removeEventListener("scroll", handleScroll);
    };
  }, [pageNo, jobs]);

  const handleOnViewJobClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const { job } = target.dataset;
    job && setJobID(job);
  };

  const handleClose = () => setJobID(null);

  return (
    <Grid container rowSpacing={6} columnSpacing={4} paddingY="60px">
      {jobs.map((job) => (
        <JobCard
          key={job.jdUid}
          job={job}
          onViewJobClick={handleOnViewJobClick}
        />
      ))}
      {selectedCard && (
        <Modal
          open={Boolean(jobID)}
          onClose={() => setJobID(null)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Paper
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "24px",
            }}
          >
            <JobView job={selectedCard} onClose={handleClose} />
          </Paper>
        </Modal>
      )}
    </Grid>
  );
};

export default CardContainer;
