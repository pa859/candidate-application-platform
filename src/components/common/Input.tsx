import { OutlinedInput } from "@mui/material";

const Input = ({
  value,
  label,
  onChange,
}: {
  value: string[];
  label: string;
  onChange: (event: any) => void;
}) => {
  return (
    <OutlinedInput
      fullWidth
      placeholder={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
