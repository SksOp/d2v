import { MenuItem, Select } from "@mui/material";

export function Selector<T extends string>({
  items,
  value,
  onChange,
  render,
}: {
  items: T[];
  value: T;
  onChange: (value: T) => void;
  render: (value: T) => React.ReactNode;
}) {
  return (
    <Select
      value={value}
      onChange={(event) => onChange(event.target.value as T)}
      sx={{
        height: "2.3rem",
      }}
    >
      {items.map((item) => (
        <MenuItem key={item} value={item}>
          {render(item)}
        </MenuItem>
      ))}
    </Select>
  );
}
