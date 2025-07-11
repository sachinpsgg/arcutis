import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import {
    Filter,
    X,
    Search,
    MoreHorizontal,
    ChevronDown
} from 'lucide-react';

interface FilterPanelProps {
    isFilterOpen: boolean;
    setIsFilterOpen: (open: boolean) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ isFilterOpen, setIsFilterOpen }) => {
    const [filterType, setFilterType] = useState("Basic filtering");
    const [advancedFilter, setAdvancedFilter] = useState("is less than");
    const [selectedYears, setSelectedYears] = useState<string[]>([]);

    const years = ["2020", "2021", "2022", "2023", "2024"];

    const pageFilters = [
        "Day Supply",
        "NDC",
        "OCC",
        "Total Benefit",
        "Month",
        "Quarter",
        "Brand",
        "Claim Type",
        "Group",
        "Preferred NCPDP Group",
        "Preferred NPI Group",
        "Parent Preferred Pharmacy",
        "Preferred Pharmacy",
        "Nimble Pharmacy",
        "Coverage Code",
        "Program Type",
        "npi",
    ];

    const allPageFilters = [
        "Drug NDC",
        "Brand",
        "Claim Type",
        "Group",
        "Preferred NCPDP Group",
        "Preferred NPI Group",
        "Parent Preferred Pharmacy",
        "Preferred Pharmacy",
        "Nimble Pharmacy",
        "Coverage Code",
        "Program Type",
        "npi",
    ];

    if (!isFilterOpen) return null;

    return (
        <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl border-l border-gray-200 z-50 overflow-y-auto">
            <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 sticky top-0 bg-white pb-4 border-b">
                    <div className="flex items-center space-x-2">
                        <Filter className="w-5 h-5 text-zoryve-primary" />
                        <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFilterOpen(false)}
                    >
                        <X className="w-4 h-4" />
                    </Button>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input placeholder="Search filters..." className="pl-10" />
                    </div>
                </div>

                {/* Filters on this page */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-900">Filters on this page</h3>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="space-y-6">
                        {/* Year Filter */}
                        <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">Year</span>
                                <div className="flex items-center space-x-1">
                                    <ChevronDown className="w-4 h-4 text-gray-400" />
                                    <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">is (All)</div>

                            <div className="space-y-3">
                                <div>
                                    <label className="text-sm font-medium text-gray-700">Filter type</label>
                                    <Select value={filterType} onValueChange={setFilterType}>
                                        <SelectTrigger className="mt-1">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Basic filtering">Basic filtering</SelectItem>
                                            <SelectItem value="Advanced filtering">Advanced filtering</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {filterType === "Basic filtering" && (
                                    <div className="space-y-2">
                                        {years.map((year) => (
                                            <div key={year} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={year}
                                                    checked={selectedYears.includes(year)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setSelectedYears([...selectedYears, year]);
                                                        } else {
                                                            setSelectedYears(selectedYears.filter((y) => y !== year));
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={year} className="text-sm text-gray-700">
                                                    {year}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {filterType === "Advanced filtering" && (
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Show items when the value
                                        </label>
                                        <Select value={advancedFilter} onValueChange={setAdvancedFilter}>
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="is less than">is less than</SelectItem>
                                                <SelectItem value="is less than or equal to">is less than or equal to</SelectItem>
                                                <SelectItem value="is greater than">is greater than</SelectItem>
                                                <SelectItem value="is greater than or equal to">is greater than or equal to</SelectItem>
                                                <SelectItem value="is">is</SelectItem>
                                                <SelectItem value="is not">is not</SelectItem>
                                                <SelectItem value="is blank">is blank</SelectItem>
                                                <SelectItem value="is not blank">is not blank</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Other Page Filters */}
                        {pageFilters.map((filter) => (
                            <div key={filter} className="space-y-2 p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">{filter}</span>
                                    <div className="flex items-center space-x-1">
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">is (All)</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Filters on all pages */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-gray-900">Filters on all pages</h3>
                        <MoreHorizontal className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="space-y-3">
                        {allPageFilters.map((filter) => (
                            <div key={filter} className="space-y-2 p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">{filter}</span>
                                    <div className="flex items-center space-x-1">
                                        <ChevronDown className="w-4 h-4 text-gray-400" />
                                        <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">is (All)</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;