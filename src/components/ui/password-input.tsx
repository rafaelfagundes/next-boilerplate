"use client";

import { useState } from "react";

import { Input, InputProps } from "@nextui-org/react";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";

function PasswordInput(props: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Input
      {...props}
      endContent={
        props.value ? (
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
            aria-label="toggle password visibility"
          >
            {isVisible ? (
              <IconEyeClosed className="pointer-events-none opacity-50" />
            ) : (
              <IconEye className="pointer-events-none opacity-50" />
            )}
          </button>
        ) : null
      }
      type={isVisible ? "text" : "password"}
      className="w-full"
    />
  );
}

export default PasswordInput;
