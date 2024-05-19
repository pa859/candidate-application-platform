import { ActionNames, ActionTypes } from "./action";
import { InitStateType } from "./types";

export const initState: InitStateType = {
  filters: {
    experience: "",
    companyName: "",
    location: [],
    role: [],
    minBasePay: "",
  },
  jobs: [],
};

export const reducer = (state = initState, action: ActionTypes) => {
  let nextState = state;

  switch (action.type) {
    case ActionNames.SET_EXPERIENCE: {
      nextState = {
        ...state,
        filters: { ...state.filters, experience: action.payload.value },
      };
      break;
    }
    case ActionNames.SET_COMPANY_NAME: {
      nextState = {
        ...state,
        filters: { ...state.filters, companyName: action.payload.value },
      };
      break;
    }
    case ActionNames.SET_LOCATION: {
      nextState = {
        ...state,
        filters: { ...state.filters, location: action.payload.value },
      };
      break;
    }
    case ActionNames.SET_MIN_BASE_PAY: {
      nextState = {
        ...state,
        filters: { ...state.filters, minBasePay: action.payload.value },
      };
      break;
    }
    case ActionNames.SET_ROLES: {
      nextState = {
        ...state,
        filters: { ...state.filters, role: action.payload.value },
      };
      break;
    }
    case ActionNames.SET_JOBS: {
      nextState = {
        ...state,
        jobs: action.payload.value,
      };
      break;
    }
  }

  return nextState;
};
