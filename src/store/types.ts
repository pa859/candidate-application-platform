import { Job } from "../types";

export type FiltersState = {
  experience: string;
  companyName: string;
  location: string[];
  role: string[];
  minBasePay: string;
};

export type InitStateType = {
  filters: FiltersState;
  jobs: Job[];
  pageNum: number;
};
