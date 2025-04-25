import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface ResponsiveTabDropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export default function ResponsiveTabDropdown({
  options,
  selected,
  onChange,
}: ResponsiveTabDropdownProps) {
  return (
    <div className="w-full ">
      {options.map((option) => {
        const isOpen = selected === option;

        return (
          <div key={option} className="border-b border-gray-800">
            <button
              onClick={() => onChange(isOpen ? "" : option)}
              className="flex w-full justify-between items-center bg-black text-white py-4 px-4 focus:outline-none "
            >
              <span className="text-lg capitalize">{option}</span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

          </div>
        );
      })}
    </div>
  );
}
