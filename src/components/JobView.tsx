import BoltIcon from "@mui/icons-material/Bolt";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Job } from "../types";
import { capitalizeWords, salaryText } from "../utils";
import { CloseOutlined } from "@mui/icons-material";

const JobView = ({ job, onClose }: { job: Job; onClose: () => void }) => {
  const { minJdSalary, maxJdSalary, minExp } = job;

  return (
    <Grid width="100%">
      <Card
        elevation={4}
        sx={{
          height: "100%",
          borderRadius: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          sx={{ paddingTop: "24px", paddingBottom: 0, paddingX: "24px" }}
          avatar={
            <img
              src={job.logoUrl}
              alt={`${job.companyName}-logo`}
              width="24"
              height="24"
              loading="lazy"
            />
          }
          title={
            <Grid>
              <Typography fontSize="14px" color="gray">
                {job.companyName}
              </Typography>
              <Typography>{capitalizeWords(job.jobRole)}</Typography>
            </Grid>
          }
          subheader={
            <Typography fontSize="12px">
              {capitalizeWords(job.location)}
            </Typography>
          }
          action={
            <Button onClick={onClose}>
              <CloseOutlined />
            </Button>
          }
        />
        <CardContent sx={{ paddingTop: "8px", paddingX: "24px" }}>
          <Stack>
            {(minJdSalary || maxJdSalary) && (
              <Grid>
                <Stack direction="row" gap="4px">
                  <Typography color="gray">
                    {salaryText(minJdSalary, maxJdSalary)}
                  </Typography>
                  <Checkbox
                    checked
                    size="small"
                    sx={{
                      padding: 0,
                      "&.Mui-checked": {
                        color: "#489557",
                      },
                    }}
                  />
                </Stack>
              </Grid>
            )}
            <Grid position="relative" overflow="hidden" marginTop="12px">
              <Typography fontSize="18px">About Company:</Typography>
              <Typography fontWeight={600}>About us</Typography>
              <Typography>{job.jobDetailsFromCompany}</Typography>
            </Grid>
            {minExp && (
              <Grid marginTop="16px">
                <Typography color="gray">Minimum Experience</Typography>
                <Typography>{minExp} years</Typography>
              </Grid>
            )}
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            paddingTop: 0,
            paddingBottom: "12px",
            paddingX: "24px",
            marginTop: "auto",
          }}
        >
          <Link
            href={job.jdLink}
            target="_blank"
            role="button"
            width="100%"
            borderRadius="8px"
            padding="12px"
            sx={{
              color: "black",
              cursor: "pointer",
              backgroundColor: "#54efc2",
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BoltIcon sx={{ color: "yellow" }} />
            <Typography>Easy Apply</Typography>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default JobView;
