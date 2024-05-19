import Input from "../common/Input";
import MultipleSelect from "../common/MultipleSelect";
import SingleSelect from "../common/SingleSelect";

export type FilterConfigType = {
  name: FilterType;
  label: string;
  type: FilterComponentType;
  options: any;
};

export type FilterComponentType = "multi-select" | "select" | "input";

export type FilterType =
  | "experience"
  | "company-name"
  | "location"
  | "min-base-pay"
  | "role";

export const FILTER_COMPONENT_MAP: Record<FilterComponentType, any> = {
  "multi-select": MultipleSelect,
  select: SingleSelect,
  input: Input,
};

export const FILTER_CONFIG: FilterConfigType[] = [
  {
    name: "experience",
    label: "Experience",
    type: "select",
    options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  },
  {
    name: "company-name",
    label: "Company Name",
    type: "input",
    options: [],
  },
  {
    name: "location",
    label: "Location",
    type: "multi-select",
    options: ["Remote", "Hybrid", "In-office"],
  },
  {
    name: "role",
    label: "Roles",
    type: "multi-select",
    options: ["Frontend", "IOS", "Android", "Tech Lead", "Backend"],
  },
  {
    name: "min-base-pay",
    label: "Min Base Pay",
    type: "select",
    options: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
  },
];
