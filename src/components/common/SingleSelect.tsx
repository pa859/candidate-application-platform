import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const SingleSelect = ({
  value,
  items,
  label,
  onChange,
}: {
  value: string;
  items: string[];
  label: string;
  onChange: (event: SelectChangeEvent<string>) => void;
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`multiple-${label}-label`}>{label}</InputLabel>
      <Select
        labelId={`multiple-${label}-label`}
        id={`multiple-${label}`}
        value={value}
        onChange={onChange}
        input={<OutlinedInput id={`select-multiple-${label}`} label={label} />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            <Chip key={selected} label={selected} />
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {items.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SingleSelect;
