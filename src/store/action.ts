import { Job } from "../types";

export const enum ActionNames {
  SET_EXPERIENCE = "SET_EXPERIENCE",
  SET_COMPANY_NAME = "SET_COMPANY_NAME",
  SET_LOCATION = "SET_LOCATION",
  SET_ROLES = "SET_ROLES",
  SET_MIN_BASE_PAY = "SET_MIN_BASE_PAY",
  SET_JOBS = "SET_JOBS",
  SET_PAGE_NUMBER = "SET_PAGE_NUMBER",
}

type SetExperienceAction = {
  type: ActionNames.SET_EXPERIENCE;
  payload: {
    value: string;
  };
};

type SetCompanyNameAction = {
  type: ActionNames.SET_COMPANY_NAME;
  payload: {
    value: string;
  };
};

type SetLocationAction = {
  type: ActionNames.SET_LOCATION;
  payload: {
    value: string[];
  };
};

type SetRolesAction = {
  type: ActionNames.SET_ROLES;
  payload: {
    value: string[];
  };
};

type SetMinBasePayAction = {
  type: ActionNames.SET_MIN_BASE_PAY;
  payload: {
    value: string;
  };
};

type SetJobsAction = {
  type: ActionNames.SET_JOBS;
  payload: {
    value: Job[];
  };
};

type SetPageNumberAction = {
  type: ActionNames.SET_PAGE_NUMBER;
  payload: {
    value: number;
  };
};

export type ActionTypes =
  | SetExperienceAction
  | SetCompanyNameAction
  | SetLocationAction
  | SetRolesAction
  | SetMinBasePayAction
  | SetJobsAction
  | SetPageNumberAction;

export const setExperienceAction = (value: string): SetExperienceAction => ({
  type: ActionNames.SET_EXPERIENCE,
  payload: { value },
});

export const setCompanyNameAction = (value: string): SetCompanyNameAction => ({
  type: ActionNames.SET_COMPANY_NAME,
  payload: { value },
});

export const setLocationAction = (value: string[]): SetLocationAction => ({
  type: ActionNames.SET_LOCATION,
  payload: { value },
});

export const setRolesAction = (value: string[]): SetRolesAction => ({
  type: ActionNames.SET_ROLES,
  payload: { value },
});

export const setMinBasePayAction = (value: string): SetMinBasePayAction => ({
  type: ActionNames.SET_MIN_BASE_PAY,
  payload: { value },
});

export const setJobsAction = (value: Job[]): SetJobsAction => ({
  type: ActionNames.SET_JOBS,
  payload: { value },
});

export const setPageNumberAction = (value: number): SetPageNumberAction => ({
  type: ActionNames.SET_PAGE_NUMBER,
  payload: { value },
});
