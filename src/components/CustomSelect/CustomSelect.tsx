import { useState } from "react";
import './CustomSelect.css';

interface CustomSelectProps {
  options: string[];
  label: string;
  onSelect: (selectedValue: string) => void;
}

export default function CustomSelect({ options, label, onSelect }: CustomSelectProps) {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className="custom-select">
      <label className="custom-select__label">{label}</label>
      <select
        className="custom-select__dropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
