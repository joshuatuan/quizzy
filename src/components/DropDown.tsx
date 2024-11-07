import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChangeEvent, ReactNode } from "react";

type DropDownProps = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  children: ReactNode;
};

function DropDown({ label, value, onChange, children }: DropDownProps) {
  return (
    <div className="flex items-center justify-center gap-4 md:gap-8">
      <label htmlFor="category" className="text-4xl">
        {label}:
      </label>
      <div className="relative w-full">
        <select
          name="category"
          value={value}
          onChange={onChange}
          className="mr-8 w-full cursor-pointer appearance-none rounded-full border-2 bg-gray-300 px-5 py-3 text-3xl transition-colors duration-150 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-theme dark:border-dark dark:bg-darkest"
        >
          {children}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-7 -translate-y-1/2 transform" />
      </div>
    </div>
  );
}
export default DropDown;
