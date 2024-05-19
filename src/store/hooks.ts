import { FilterType } from "../components/filters/config";
import {
  AndSpecification,
  CompanyNameSpecification,
  ExperienceSpecification,
  JobFilter,
  LocationSpecification,
  MinBasePaySpecification,
  RoleSpecification,
} from "../services/Filter.service";
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

export const useJobCards = () => {
  return useAppSelector((state) => state.jobs);
};

export const usePageNumber = () => {
  return useAppSelector((state) => state.pageNum);
};

export const useFilteredJobCards = () => {
  const experience = useFilterExperience();
  const companyName = useFilterCompanyName();
  const jobs = useAppSelector((state) => state.jobs);
  const location = useFilterLocation();
  const roles = useFilterRole();
  const minPay = useFilterMinBasePay();
  const spec = new AndSpecification(
    new CompanyNameSpecification(companyName),
    new ExperienceSpecification(experience === "" ? 0 : parseInt(experience)),
    new LocationSpecification(location),
    new RoleSpecification(roles),
    new MinBasePaySpecification(
      minPay === "" ? 0 : parseInt(minPay.slice(0, -1))
    )
  );
  return JobFilter.filter(jobs, spec);
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
