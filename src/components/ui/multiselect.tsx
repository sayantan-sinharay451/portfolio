'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

type Option = {
  label: string;
  value: string;
};

interface MultiSelectProps {
  options: Option[];
  selected?: string[]; // <-- optional, safe fallback added
  onChange: (values: string[]) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  className?: string;
}

export function MultiSelect({
  options,
  selected = [], // <-- ensures always array
  onChange,
  placeholder = 'Select items...',
  searchPlaceholder = 'Search...',
  className,
}: MultiSelectProps) {
  // Always ensure selected is an array (double layer of protection)
  const safeSelected = Array.isArray(selected) ? selected : [];

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const handleSelect = (value: string) => {
    if (safeSelected.includes(value)) {
      onChange(safeSelected.filter((v) => v !== value));
    } else {
      onChange([...safeSelected, value]);
    }
  };

  const handleRemove = (value: string) => {
    onChange(safeSelected.filter((v) => v !== value));
  };

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('min-h-[42px] w-full flex-wrap justify-start gap-2 text-left', className)}
        >
          {/* Placeholder */}
          {safeSelected.length === 0 && (
            <span className="text-muted-foreground">{placeholder}</span>
          )}

          {/* Selected Badges */}
          {safeSelected.length > 0 && (
            <div className="flex flex-wrap items-center gap-1">
              {safeSelected.map((value) => {
                const option = options.find((o) => o.value === value);
                if (!option) return null;

                return (
                  <Badge
                    key={value}
                    variant="outline"
                    className="flex items-center gap-1 px-2 py-1"
                  >
                    {option.label}
                    <X
                      className="h-3 w-3 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemove(value);
                      }}
                    />
                  </Badge>
                );
              })}
            </div>
          )}

          {/* Dropdown Indicator */}
          <span className="text-muted-foreground ml-auto">▼</span>
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} value={search} onValueChange={setSearch} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            <CommandGroup>
              {filteredOptions.map((opt) => {
                const isSelected = safeSelected.includes(opt.value);

                return (
                  <CommandItem
                    key={opt.value}
                    onSelect={() => handleSelect(opt.value)}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <span>{opt.label}</span>
                    {isSelected && <span className="text-primary font-semibold">✔</span>}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
