import { FilterType } from "../components/filters/config";
import { useAppSelector } from "./store";

export const useFilterExperience = () => {
  return useAppSelector((state) => state.filters.experience);
};

export const useFilterCompanyName = () => {
  return useAppSelector((state) => state.filters.companyName);
};

export const useFilterLocation = () => {
  return useAppSelector((state) => state.filters.location);
};

export const useFilterMinBasePay = () => {
  return useAppSelector((state) => state.filters.minBasePay);
};

export const useFilterRole = () => {
  return useAppSelector((state) => state.filters.role);
};

export const useFilterValue = (name: FilterType) => {
  const experience = useFilterExperience();
  const companyName = useFilterCompanyName();
  const location = useFilterLocation();
  const minBasePay = useFilterMinBasePay();
  const role = useFilterRole();

  let value: string | string[] = "";
  if (name === "experience") {
    value = experience;
  } else if (name === "company-name") {
    value = companyName;
  } else if (name === "location") {
    value = location;
  } else if (name === "min-base-pay") {
    value = minBasePay;
  } else if (name === "role") {
    value = role;
  }

  return value;
};
