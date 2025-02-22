import { useState } from "react";
import { Switch } from "@chakra-ui/react";

const SwitchCustom = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <Switch.Root
      colorPalette="orange"
      key="xs"
      size="xs"
      checked={isChecked}
      onCheckedChange={handleChange}
    >
      <Switch.HiddenInput />
      <Switch.Control>
        <Switch.Thumb />
      </Switch.Control>
      <Switch.Label />
    </Switch.Root>
  );
};

export default SwitchCustom;
