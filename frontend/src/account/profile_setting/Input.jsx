import { forwardRef } from "react";

const Input = forwardRef(
  ({ id, label, type, placeholder, error, isOptional, ...props }, ref) => {
    return (
      <section className="flex flex-col gap-2">
        {isOptional ? (
          <label htmlFor={id} className="text-gray-900 text-sm flex gap-1">
            <span>{label}</span>
            <span className="text-gray-500">(Optional)</span>
          </label>
        ) : (
          <label htmlFor={id} className="text-gray-900 text-sm">
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          ref={ref}
          placeholder={placeholder}
          className="border border-gray-100 rounded-sm text-gray-700 focus:outline-none px-3 py-2 "
          {...props}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </section>
    );
  }
);

Input.displayName = "Input";

export default Input;
