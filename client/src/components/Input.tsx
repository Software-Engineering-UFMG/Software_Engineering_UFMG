import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";


interface InputProps {
  placeholder: string;
  realPlaceholder?: string;
  value: string | number;
  type?: string;
  hideRevealPasswordButton?: boolean;
  onChange: (value: string) => void;
  error?: boolean;
  id?: string;
  disabled?: boolean;
  className?: string;
  wrapperClassName?: string;
  onFocus?: () => void;
}

export const Input = React.memo(
  ({
    placeholder,
    realPlaceholder,
    value,
    type = "text",
    hideRevealPasswordButton = false,
    onChange,
    error = false,
    id,
    disabled = false,
    className = "",
    wrapperClassName = "",
    onFocus,
  }: InputProps) => {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isFocused, setIsFocused] = useState(false);
    const inputId = id || placeholder.toLowerCase().replace(/\s+/g, "-");
    const isPassword = type === "password";

    const handleFocus = () => {
      setIsFocused(true);
      if (onFocus) onFocus();
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <div className={`relative ${wrapperClassName}`}>
        
        <input
          id={inputId}
          type={isPassword ? (isPasswordHidden ? "password" : "text") : type}
          value={value}
          required
          onChange={(e) => onChange(e.target.value)}
          className={`peer  w-full rounded-xl border bg-transparent !p-3 transition-colors ${error ? "border-red-500" : "border-gray-300"} ${isPassword ? "!pr-10" : ""} focus:border-blue-500 focus:outline-none ${disabled ? "cursor-not-allowed" : ""} ${className}`}
          placeholder={realPlaceholder && isFocused ? realPlaceholder : " "}
          disabled={disabled}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <label
          htmlFor={inputId}
          className={`pointer-events-none absolute !left-2.5 !origin-left transform px-1 text-gray-500 transition-[top,font-size,color] duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-1.5 peer-focus:text-xs peer-focus:text-blue-500 ${value ? "-top-1.5 text-xs" : "top-3 text-base"} ${error ? "text-red-500" : ""} bg-white `}
        >
          {placeholder}
        </label>

        {isPassword
          ? !hideRevealPasswordButton && (
              <button
                type="button"
                onClick={() => setIsPasswordHidden(!isPasswordHidden)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl pl-0.5 pr-0.5 cursor-pointer"
                aria-label={
                  isPasswordHidden ? "Show password" : "Hide password"
                }
              >
                {isPasswordHidden ? (
                  <Visibility sx={{ fontSize: 28, color: "black" }} />
                ) : (
                  <VisibilityOff sx={{ fontSize: 28, color: "black" }} />
                )}
              </button>
            )
          : null}
      </div>
    );
  }
);