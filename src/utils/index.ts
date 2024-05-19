import { EXCHANGE_RATE } from "../constants";

export const capitalizeWords = (str: string) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

export const convertSalaryToINR = (salary: number) => {
  const annualSalaryUSD = salary * 365;
  const annualSalaryINR = annualSalaryUSD * EXCHANGE_RATE;
  return Math.round(annualSalaryINR / 100000);
};

export const salaryText = (
  minJdSalary: number | null,
  maxJdSalary: number | null
) => {
  const minSalary = minJdSalary ? convertSalaryToINR(minJdSalary) : null;
  const maxSalary = maxJdSalary ? convertSalaryToINR(maxJdSalary) : null;

  if (minSalary && maxSalary) {
    return `Estimated Salary: ₹${minSalary} - ${maxSalary} LPA`;
  } else if (maxSalary) {
    return `Estimated Salary: Up to ₹${maxSalary} LPA`;
  } else if (minSalary) {
    return `Estimated Salary: From ₹${minSalary} LPA`;
  }

  return "";
};
