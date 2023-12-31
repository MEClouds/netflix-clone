import React from "react";
interface InputProps {
  id: string;
  onChange: any;
  value: string;
  label: string;
  type?: string;
}
const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
  return (
    <div className=" relative">
      <input
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        className="
      block rounded-md
      px-5
      pt-5
      pb-1
      w-full
      text-md
      text-white
     bg-neutral-800
      appearance-none
      focus:outline-none
      focus:ring-0
      peer

      "
        placeholder=" "
      />
      <label
        htmlFor={id}
        className="
     absolute
     text-md
    text-zinc-500
    duration-150
    transform
    -translate-y-3
    scale-75
     z-20
     top-3
    origin-[0]
    left-6
    peer-placeholder-shown:scale-100
    peer-placeholder-shown:translate-y-0
     peer-focus:scale-75
     peer-focus:-translate-y-3
      "
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
