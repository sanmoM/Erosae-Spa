"use client"

import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import PhoneNumberInput, {
  getCountryCallingCode,
} from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

/* ---------------- Phone Input ---------------- */

const PhoneInput = React.forwardRef(
  ({ className, onChange, value, ...props }, ref) => {
    return (
      <PhoneNumberInput
        ref={ref}
        className={cn("flex", className)}
        flagComponent={FlagComponent}
        countrySelectComponent={CountrySelect}
        inputComponent={InputComponent}
        smartCaret={false}
        value={value || undefined}
        onChange={(value) => onChange?.(value || "")}
        {...props}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

/* ---------------- Input ---------------- */

const InputComponent = React.forwardRef(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    className={cn("rounded-e-lg rounded-s-none", className)}
    {...props}
  />
));

InputComponent.displayName = "InputComponent";

/* ---------------- Country Select ---------------- */

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options,
  onChange,
}) => {
  const scrollAreaRef = React.useRef(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Popover
      open={isOpen}
      modal
      onOpenChange={(open) => {
        setIsOpen(open);
        open && setSearchValue("");
      }}
    >
      <PopoverTrigger asChild>
        <Button
          type="button"
         
          className="flex gap-1 border rounded-e-none rounded-s-lg border-r-0 py-5 px-3"
          disabled={disabled}
        >
          <FlagComponent
            country={selectedCountry}
            countryName={selectedCountry}
          />
          <ChevronsUpDown className="-mr-2 size-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput
            placeholder="Search country..."
            value={searchValue}
            onValueChange={setSearchValue}
          />
          <CommandList>
            <ScrollArea ref={scrollAreaRef} className="h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              <CommandGroup>
                {options.map(
                  ({ value, label }) =>
                    value && (
                      <CommandItem
                        key={value}
                        onSelect={() => {
                          onChange(value);
                          setIsOpen(false);
                        }}
                        className="gap-2"
                      >
                        <FlagComponent
                          country={value}
                          countryName={label}
                        />
                        <span className="flex-1 text-sm">{label}</span>
                        <span className="text-sm text-muted-foreground">
                          +{getCountryCallingCode(value)}
                        </span>
                        <CheckIcon
                          className={cn(
                            "ml-auto size-4",
                            value === selectedCountry
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    )
                )}
              </CommandGroup>
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

/* ---------------- Flag ---------------- */

const FlagComponent = ({ country, countryName }) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm ">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};

export { PhoneInput };
