import React from 'react';
import './InputField.css';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  required?: boolean;
  fullWidth?: boolean;
}

export function InputField({
  label,
  hint,
  required = false,
  fullWidth = false,
  id,
  className,
  disabled,
  ...rest
}: InputFieldProps) {
  const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

  const wrapperClasses = [
    'input-field',
    fullWidth ? 'input-field--full-width' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      {label && (
        <label className="input-field__label" htmlFor={inputId}>
          <span>{label}</span>
          {required && <span className="input-field__required">*</span>}
        </label>
      )}
      <input
        id={inputId}
        className="input-field__input"
        disabled={disabled}
        required={required}
        {...rest}
      />
      {hint && <p className="input-field__hint">{hint}</p>}
    </div>
  );
}

export default InputField;
