import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomSelect from './CustomSelect';

describe('CustomSelect', () => {
  const options = ['en', 'pt', 'es'];
  const label = 'Select Language';
  const mockOnSelect = jest.fn();

  it('should render the component correctly', () => {
    render(<CustomSelect options={options} label={label} onSelect={mockOnSelect} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    options.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument();
    });
  });

  it('should call onSelect with the correct value when an option is selected', () => {
    render(<CustomSelect options={options} label={label} onSelect={mockOnSelect} />);

    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: 'pt' } });

    expect(mockOnSelect).toHaveBeenCalledWith('pt');
  });

  it('should update the selected value when a new option is selected', () => {
    render(<CustomSelect options={options} label={label} onSelect={mockOnSelect} />);

    const selectElement = screen.getByRole('combobox') as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: 'es' } });

    expect(selectElement.value).toBe('es');
  });
});
