import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/select";
import {
    Filter,
    X,
    Search,
    MoreHorizontal,
    ChevronDown,
    ChevronRight,
} from "lucide-react";

interface FilterPanelProps {
    isFilterOpen: boolean;
    setIsFilterOpen: (open: boolean) => void;
}

interface FilterState {
    [key: string]: {
        isExpanded: boolean;
        filterType: string;
        selectedValues: string[];
    };
}

const FilterPanel: React.FC<FilterPanelProps> = ({
                                                     isFilterOpen,
                                                     setIsFilterOpen,
                                                 }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStates, setFilterStates] = useState<FilterState>({});

    const allPageFilters = [
        {
            name: "Drug NDC",
            options: [
                { value: "(Blank)", count: null },
                { value: "80610011560", count: 70907 },
                { value: "80610013060", count: 31483 },
                { value: "80610015060", count: 322057 },
            ],
        },
        { name: "Brand", options: [] },
        { name: "Claim Type", options: [] },
        { name: "Group", options: [] },
        { name: "Preferred NCPDP G...", options: [] },
        { name: "Preferred NPI Group", options: [] },
        { name: "Parent Preferred Phar...", options: [] },
        { name: "Preferred Pharmacy", options: [] },
        { name: "Nimble Pharmacy", options: [] },
        { name: "Coverage Code", options: [] },
        { name: "Program Type", options: [] },
        { name: "npi", options: [] },
    ];

    const toggleFilter = (filterName: string) => {
        setFilterStates((prev) => ({
            ...prev,
            [filterName]: {
                ...prev[filterName],
                isExpanded: !prev[filterName]?.isExpanded,
                filterType: prev[filterName]?.filterType || "Basic filtering",
                selectedValues: prev[filterName]?.selectedValues || [],
            },
        }));
    };

    const updateFilterType = (filterName: string, filterType: string) => {
        setFilterStates((prev) => ({
            ...prev,
            [filterName]: {
                ...prev[filterName],
                filterType,
                isExpanded: true,
                selectedValues: prev[filterName]?.selectedValues || [],
            },
        }));
    };

    const toggleFilterValue = (filterName: string, value: string) => {
        setFilterStates((prev) => {
            const currentFilter = prev[filterName] || {
                isExpanded: true,
                filterType: "Basic filtering",
                selectedValues: [],
            };
            const selectedValues = currentFilter.selectedValues.includes(value)
                ? currentFilter.selectedValues.filter((v) => v !== value)
                : [...currentFilter.selectedValues, value];

            return {
                ...prev,
                [filterName]: {
                    ...currentFilter,
                    selectedValues,
                },
            };
        });
    };

    const removeFilter = (filterName: string) => {
        setFilterStates((prev) => ({
            ...prev,
            [filterName]: {
                ...prev[filterName],
                selectedValues: [],
                isExpanded: false,
            },
        }));
    };

    if (!isFilterOpen) return null;

    return (
        <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl border-l border-gray-200 z-50 overflow-y-auto">
            <div className="p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                        <Filter className="w-4 h-4 text-gray-600" />
                        <h2 className="text-base font-medium text-gray-900">Filters</h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFilterOpen(false)}
                        className="p-1 h-6 w-6"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                </div>

                {/* Search */}
                <div className="mb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            placeholder="Search"
                            className="pl-10 h-9 text-sm border-gray-300"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filters on all pages */}
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-medium text-gray-700">
                            Filters on all pages
                        </h3>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="space-y-1">
                        {allPageFilters
                            .filter(
                                (filter) =>
                                    searchTerm === "" ||
                                    filter.name.toLowerCase().includes(searchTerm.toLowerCase()),
                            )
                            .map((filter) => {
                                const filterState = filterStates[filter.name];
                                const isExpanded = filterState?.isExpanded || false;
                                const selectedCount = filterState?.selectedValues?.length || 0;

                                return (
                                    <div
                                        key={filter.name}
                                        className="border border-gray-200 rounded"
                                    >
                                        {/* Filter Header */}
                                        <div
                                            className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer"
                                            onClick={() => toggleFilter(filter.name)}
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">
                            {filter.name}
                          </span>
                                                    <div className="flex items-center space-x-2">
                                                        {isExpanded ? (
                                                            <ChevronDown className="w-4 h-4 text-gray-400" />
                                                        ) : (
                                                            <ChevronRight className="w-4 h-4 text-gray-400" />
                                                        )}
                                                        <X
                                                            className="w-4 h-4 text-gray-400 hover:text-gray-600"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                removeFilter(filter.name);
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-xs text-gray-500 mt-1">
                                                    is{" "}
                                                    {selectedCount > 0
                                                        ? `(${selectedCount} selected)`
                                                        : "(All)"}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Filter Content */}
                                        {isExpanded && (
                                            <div className="border-t border-gray-200 p-3 bg-gray-50">
                                                {/* Filter Type Selector */}
                                                <div className="mb-3">
                                                    <label className="text-xs font-medium text-gray-700 block mb-1">
                                                        Filter type
                                                    </label>
                                                    <Select
                                                        value={filterState?.filterType || "Basic filtering"}
                                                        onValueChange={(value) =>
                                                            updateFilterType(filter.name, value)
                                                        }
                                                    >
                                                        <SelectTrigger className="h-8 text-sm">
                                                            <SelectValue />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="Basic filtering">
                                                                Basic filtering
                                                            </SelectItem>
                                                            <SelectItem value="Advanced filtering">
                                                                Advanced filtering
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>

                                                {/* Basic Filtering Options */}
                                                {filterState?.filterType === "Basic filtering" &&
                                                    filter.options.length > 0 && (
                                                        <div className="space-y-2">
                                                            {filter.options.map((option) => (
                                                                <div
                                                                    key={option.value}
                                                                    className="flex items-center space-x-2"
                                                                >
                                                                    <Checkbox
                                                                        id={`${filter.name}-${option.value}`}
                                                                        checked={
                                                                            filterState?.selectedValues?.includes(
                                                                                option.value,
                                                                            ) || false
                                                                        }
                                                                        onCheckedChange={() =>
                                                                            toggleFilterValue(
                                                                                filter.name,
                                                                                option.value,
                                                                            )
                                                                        }
                                                                        className="h-4 w-4"
                                                                    />
                                                                    <label
                                                                        htmlFor={`${filter.name}-${option.value}`}
                                                                        className="text-sm text-gray-700 flex-1 flex items-center justify-between cursor-pointer"
                                                                    >
                                                                        <span>{option.value}</span>
                                                                        {option.count && (
                                                                            <span className="text-xs text-gray-500">
                                        {option.count.toLocaleString()}
                                      </span>
                                                                        )}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                {/* Advanced Filtering Options */}
                                                {filterState?.filterType === "Advanced filtering" && (
                                                    <div className="space-y-2">
                                                        <label className="text-xs font-medium text-gray-700 block">
                                                            Show items when the value
                                                        </label>
                                                        <Select defaultValue="is less than">
                                                            <SelectTrigger className="h-8 text-sm">
                                                                <SelectValue />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="is less than">
                                                                    is less than
                                                                </SelectItem>
                                                                <SelectItem value="is less than or equal to">
                                                                    is less than or equal to
                                                                </SelectItem>
                                                                <SelectItem value="is greater than">
                                                                    is greater than
                                                                </SelectItem>
                                                                <SelectItem value="is greater than or equal to">
                                                                    is greater than or equal to
                                                                </SelectItem>
                                                                <SelectItem value="is">is</SelectItem>
                                                                <SelectItem value="is not">is not</SelectItem>
                                                                <SelectItem value="is blank">
                                                                    is blank
                                                                </SelectItem>
                                                                <SelectItem value="is not blank">
                                                                    is not blank
                                                                </SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <Input
                                                            placeholder="Enter value..."
                                                            className="h-8 text-sm"
                                                        />
                                                    </div>
                                                )}

                                                {/* No options message for filters without predefined options */}
                                                {filterState?.filterType === "Basic filtering" &&
                                                    filter.options.length === 0 && (
                                                        <div className="text-sm text-gray-500 italic">
                                                            No options available
                                                        </div>
                                                    )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;
