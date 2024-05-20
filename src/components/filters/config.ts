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
    options: [
      { label: "None", value: "" },
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
      { label: "8", value: "8" },
      { label: "9", value: "9" },
      { label: "10", value: "10" },
    ],
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
    options: [
      { label: "None", value: "" },
      { label: "10L", value: "10" },
      { label: "20L", value: "20" },
      { label: "30L", value: "30" },
      { label: "40L", value: "40" },
      { label: "50L", value: "50" },
      { label: "60L", value: "60" },
      { label: "70L", value: "70" },
    ],
  },
];
