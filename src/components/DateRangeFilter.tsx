import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const years = [2022, 2024, 2025];
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
];

const DateRangeFilter: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    const toggleMonth = (month: string) => {
        setSelectedMonths(prev =>
            prev.includes(month)
                ? prev.filter(m => m !== month)
                : [...prev, month]
        );
    };
    console.log(selectedYear,selectedMonths,startDate,endDate)
    return (
        <div className="flex flex-wrap items-start gap-6 p-4 border rounded bg-white shadow-sm">
            {/* Year Filter */}
            <div className="flex flex-col">
                <label className="font-medium text-sm mb-1">Year</label>
                <div className="flex gap-2 flex-wrap">
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`border px-3 py-1 rounded text-sm ${
                                selectedYear === year ? "bg-blue-600 text-white" : "bg-white"
                            }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            </div>

            {/* Month Filter */}
            <div className="flex flex-col">
                <label className="font-medium text-sm mb-1">Month</label>
                <div className="flex flex-row overflow-x-auto max-w-md">
                    {months.map(month => (
                        <button
                            key={month}
                            onClick={() => toggleMonth(month)}
                            className={`border px-2 py-1 rounded text-xs truncate ${
                                selectedMonths.includes(month)
                                    ? "bg-blue-600 text-white"
                                    : "bg-white"
                            }`}
                        >
                            {month}
                        </button>
                    ))}
                </div>
            </div>

            {/* Date Range Picker */}
            <div className="flex flex-col">
                <label className="font-medium text-sm mb-1">Date</label>
                <div className="flex items-center gap-2">
                    <DatePicker
                        selected={startDate}
                        onChange={(date: Date | null) => setStartDate(date)}
                        dateFormat="dd-MM-yyyy"
                        placeholderText="Start Date"
                        className="border rounded px-2 py-1 text-sm"
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date: Date | null) => setEndDate(date)}
                        dateFormat="dd-MM-yyyy"
                        placeholderText="End Date"
                        className="border rounded px-2 py-1 text-sm"
                    />
                </div>
            </div>
        </div>
    );
};

export default DateRangeFilter;
