import { ReactNode } from 'react';

interface SelectProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: ReactNode }>;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  label?: ReactNode;
  error?: string;
}

const Select: React.FC<SelectProps> = ({
  placeholder,
  value,
  onChange,
  options,
  className = '',
  disabled = false,
  required = false,
  id,
  label,
  error,
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="text-(--color-bg-dark) font-medium text-sm">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border border-(--color-primary)/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all duration-200 bg-white/50 disabled:bg-(--color-bg-light)/50 ${className}`}
        disabled={disabled}
        required={required}
        id={id}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-[rgb(220,38,38)] text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Select;