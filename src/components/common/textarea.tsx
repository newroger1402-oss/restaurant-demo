import { ReactNode } from 'react';

interface TextareaProps {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  label?: ReactNode;
  error?: string;
  rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  required = false,
  id,
  label,
  error,
  rows = 4,
}) => {
  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="text-(--color-bg-dark) font-medium text-sm">
          {label}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border border-(--color-primary)/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-(--color-primary) transition-all duration-200 bg-white/50 disabled:bg-(--color-bg-light)/50 ${className}`}
        disabled={disabled}
        required={required}
        id={id}
        rows={rows}
      />
      {error && <p className="text-[rgb(220,38,38)] text-xs mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;