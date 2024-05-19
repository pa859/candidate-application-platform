import {
  setCompanyNameAction,
  setExperienceAction,
  setLocationAction,
  setMinBasePayAction,
  setRolesAction,
  useFilterValue,
} from "../../store";
import { useAppDispatch } from "../../store/store";
import { FILTER_COMPONENT_MAP, FilterConfigType } from "./config";

const FilterComponent = (props: FilterConfigType) => {
  const { type, name, options, label } = props;
  const Component = FILTER_COMPONENT_MAP[type];
  const value = useFilterValue(name);
  const dispatch = useAppDispatch();

  const handleChange = (event: any) => {
    const value = event.target.value;
    if (name === "experience") {
      dispatch(setExperienceAction(value));
    } else if (name === "company-name") {
      dispatch(setCompanyNameAction(value));
    } else if (name === "location") {
      dispatch(
        setLocationAction(typeof value === "string" ? value.split(",") : value)
      );
    } else if (name === "min-base-pay") {
      dispatch(setMinBasePayAction(value));
    } else if (name === "role") {
      dispatch(
        setRolesAction(typeof value === "string" ? value.split(",") : value)
      );
    }
  };

  return (
    <Component
      label={label}
      value={value}
      onChange={handleChange}
      items={options}
    />
  );
};

export default FilterComponent;
