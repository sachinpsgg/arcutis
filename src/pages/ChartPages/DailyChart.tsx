import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Maximize2, X } from "lucide-react";
import {
    ComposedChart,
    LineChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

// Sample data for the charts spanning multiple months
const monthlyData = [
    {
        date: "30-05-2023",
        claims: 1250,
        avgBenefit: 285,
        avgCopay: 45,
        avgOOP: 15,
        members: 1244,
        prescribers: 314,
        pharmacies: 89,
        totalBenefit: 356235.45,
        avgDaySupply: 30.5,
    },
    {
        date: "31-05-2023",
        claims: 1354,
        avgBenefit: 292,
        avgCopay: 42,
        avgOOP: 18,
        members: 1350,
        prescribers: 325,
        pharmacies: 92,
        totalBenefit: 395108.0,
        avgDaySupply: 31.2,
    },
    {
        date: "01-06-2023",
        claims: 1456,
        avgBenefit: 298,
        avgCopay: 48,
        avgOOP: 16,
        members: 1425,
        prescribers: 318,
        pharmacies: 95,
        totalBenefit: 433888.0,
        avgDaySupply: 29.8,
    },
    {
        date: "27-06-2023",
        claims: 1739,
        avgBenefit: 310,
        avgCopay: 52,
        avgOOP: 19,
        members: 1747,
        prescribers: 340,
        pharmacies: 105,
        totalBenefit: 539290.0,
        avgDaySupply: 31.5,
    },
    {
        date: "28-06-2023",
        claims: 1891,
        avgBenefit: 315,
        avgCopay: 46,
        avgOOP: 14,
        members: 1851,
        prescribers: 350,
        pharmacies: 108,
        totalBenefit: 595765.0,
        avgDaySupply: 30.2,
    },
    {
        date: "29-06-2023",
        claims: 1954,
        avgBenefit: 322,
        avgCopay: 49,
        avgOOP: 17,
        members: 1925,
        prescribers: 365,
        pharmacies: 112,
        totalBenefit: 629388.0,
        avgDaySupply: 31.8,
    },
    {
        date: "30-06-2023",
        claims: 2068,
        avgBenefit: 298,
        avgCopay: 44,
        avgOOP: 15,
        members: 2054,
        prescribers: 375,
        pharmacies: 118,
        totalBenefit: 616264.0,
        avgDaySupply: 30.5,
    },
    {
        date: "01-07-2023",
        claims: 2137,
        avgBenefit: 305,
        avgCopay: 47,
        avgOOP: 16,
        members: 2124,
        prescribers: 380,
        pharmacies: 115,
        totalBenefit: 651785.0,
        avgDaySupply: 29.9,
    },
    {
        date: "24-09-2023",
        claims: 2456,
        avgBenefit: 340,
        avgCopay: 55,
        avgOOP: 22,
        members: 2398,
        prescribers: 425,
        pharmacies: 135,
        totalBenefit: 835040.0,
        avgDaySupply: 32.1,
    },
    {
        date: "25-09-2023",
        claims: 2521,
        avgBenefit: 335,
        avgCopay: 51,
        avgOOP: 19,
        members: 2487,
        prescribers: 430,
        pharmacies: 138,
        totalBenefit: 844535.0,
        avgDaySupply: 31.6,
    },
    {
        date: "26-09-2023",
        claims: 2687,
        avgBenefit: 348,
        avgCopay: 58,
        avgOOP: 24,
        members: 2654,
        prescribers: 445,
        pharmacies: 142,
        totalBenefit: 935076.0,
        avgDaySupply: 30.8,
    },
    {
        date: "27-09-2023",
        claims: 2798,
        avgBenefit: 352,
        avgCopay: 54,
        avgOOP: 20,
        members: 2789,
        prescribers: 458,
        pharmacies: 145,
        totalBenefit: 984696.0,
        avgDaySupply: 31.3,
    },
    {
        date: "14-05-2024",
        claims: 4129,
        avgBenefit: 425,
        avgCopay: 68,
        avgOOP: 28,
        members: 4087,
        prescribers: 625,
        pharmacies: 210,
        totalBenefit: 1754825.0,
        avgDaySupply: 32.5,
    },
    {
        date: "15-05-2024",
        claims: 4216,
        avgBenefit: 430,
        avgCopay: 65,
        avgOOP: 25,
        members: 4198,
        prescribers: 635,
        pharmacies: 215,
        totalBenefit: 1812880.0,
        avgDaySupply: 31.9,
    },
];

const DailyChart = () => {
    const [fullscreenChart, setFullscreenChart] = useState<{
        title: string;
        content: React.ReactNode;
    } | null>(null);

    // Filter states
    const [filters, setFilters] = useState({
        channel: "All",
        ndc: "All",
        specialty: "All",
        memberType: "All",
        daySupply: "All",
        quantity: "All",
    });

    const openFullscreen = (title: string, content: React.ReactNode) => {
        setFullscreenChart({ title, content });
    };

    const closeFullscreen = () => {
        setFullscreenChart(null);
    };

    const FilterDropdown = ({
                                label,
                                value,
                                onChange,
                            }: {
        label: string;
        value: string;
        onChange: (value: string) => void;
    }) => (
        <div className="flex flex-col space-y-1">
            <label className="text-xs font-medium text-gray-700">{label}</label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full h-8 text-xs">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Option1">Option 1</SelectItem>
                    <SelectItem value="Option2">Option 2</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );

    return (
        <div className="space-y-6">
            {/* Filter Row */}
            <Card>
                <CardContent className="p-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        <FilterDropdown
                            label="Channel"
                            value={filters.channel}
                            onChange={(value) =>
                                setFilters((prev) => ({ ...prev, channel: value }))
                            }
                        />
                        <FilterDropdown
                            label="NDC"
                            value={filters.ndc}
                            onChange={(value) =>
                                setFilters((prev) => ({ ...prev, ndc: value }))
                            }
                        />
                        <FilterDropdown
                            label="Specialty"
                            value={filters.specialty}
                            onChange={(value) =>
                                setFilters((prev) => ({ ...prev, specialty: value }))
                            }
                        />
                        <FilterDropdown
                            label="Member Type"
                            value={filters.memberType}
                            onChange={(value) =>
                                setFilters((prev) => ({ ...prev, memberType: value }))
                            }
                        />
                        <FilterDropdown
                            label="Day Supply"
                            value={filters.daySupply}
                            onChange={(value) =>
                                setFilters((prev) => ({ ...prev, daySupply: value }))
                            }
                        />
                        <FilterDropdown
                            label="Quantity"
                            value={filters.quantity}
                            onChange={(value) =>
                                setFilters((prev) => ({ ...prev, quantity: value }))
                            }
                        />
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left side - Charts */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Combined Bar and Line Chart */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-sm font-medium">
                                        Claims and Avg. Benefit limited to 28 days
                                    </CardTitle>
                                    <div className="flex items-center space-x-4 text-xs mt-2">
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            <span>Claims</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                            <span>Avg Benefit</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                        openFullscreen(
                                            "Claims and Avg. Benefit limited to 28 days",
                                            <ResponsiveContainer width="100%" height={500}>
                                                <ComposedChart data={monthlyData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="date" />
                                                    <YAxis yAxisId="left" />
                                                    <YAxis yAxisId="right" orientation="right" />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Bar
                                                        yAxisId="left"
                                                        dataKey="claims"
                                                        fill="#3b82f6"
                                                        name="Claims"
                                                    />
                                                    <Line
                                                        yAxisId="right"
                                                        type="monotone"
                                                        dataKey="avgBenefit"
                                                        stroke="#f59e0b"
                                                        strokeWidth={3}
                                                        name="Avg Benefit"
                                                    />
                                                </ComposedChart>
                                            </ResponsiveContainer>,
                                        )
                                    }
                                    className="h-8 w-8 p-0"
                                >
                                    <Maximize2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={200}>
                                <ComposedChart data={monthlyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis yAxisId="left" />
                                    <YAxis yAxisId="right" orientation="right" />
                                    <Tooltip />
                                    <Bar
                                        yAxisId="left"
                                        dataKey="claims"
                                        fill="#3b82f6"
                                        name="Claims"
                                    />
                                    <Line
                                        yAxisId="right"
                                        type="monotone"
                                        dataKey="avgBenefit"
                                        stroke="#f59e0b"
                                        strokeWidth={2}
                                        name="Avg Benefit"
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Line Chart */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-sm font-medium">
                                        Claims and Avg. Benefit limited to 28 days
                                    </CardTitle>
                                    <div className="flex items-center space-x-4 text-xs mt-2">
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span>Avg Benefit</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                            <span>Avg Copay</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                            <span>Avg OOP</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                        openFullscreen(
                                            "Average Metrics Trends",
                                            <ResponsiveContainer width="100%" height={500}>
                                                <LineChart data={monthlyData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="date" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="avgBenefit"
                                                        stroke="#22c55e"
                                                        strokeWidth={3}
                                                        name="Avg Benefit"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="avgCopay"
                                                        stroke="#f59e0b"
                                                        strokeWidth={3}
                                                        name="Avg Copay"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="avgOOP"
                                                        stroke="#8b5cf6"
                                                        strokeWidth={3}
                                                        name="Avg OOP"
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>,
                                        )
                                    }
                                    className="h-8 w-8 p-0"
                                >
                                    <Maximize2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={200}>
                                <LineChart data={monthlyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="date" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="avgBenefit"
                                        stroke="#22c55e"
                                        strokeWidth={2}
                                        name="Avg Benefit"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="avgCopay"
                                        stroke="#f59e0b"
                                        strokeWidth={2}
                                        name="Avg Copay"
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="avgOOP"
                                        stroke="#8b5cf6"
                                        strokeWidth={2}
                                        name="Avg OOP"
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Right side - Data Table */}
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-sm font-medium">
                                    Monthly Breakdown
                                </CardTitle>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                        openFullscreen(
                                            "Monthly Breakdown - Detailed Table",
                                            <div className="overflow-x-auto">
                                                <table className="w-full text-sm">
                                                    <thead>
                                                    <tr className="border-b">
                                                        <th className="text-left p-3 font-medium">
                                                            Month
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Claims
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Members
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Prescribers
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Pharmacies
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Total Benefit
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Avg Copay
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Avg Benefit
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Avg OOP
                                                        </th>
                                                        <th className="text-right p-3 font-medium">
                                                            Avg Day Supply
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {monthlyData.map((row, index) => (
                                                        <tr
                                                            key={index}
                                                            className="border-b hover:bg-gray-50"
                                                        >
                                                            <td className="p-3 font-medium">{row.date}</td>
                                                            <td className="p-3 text-right">
                                                                {row.claims.toLocaleString()}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                {row.members.toLocaleString()}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                {row.prescribers.toLocaleString()}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                {row.pharmacies.toLocaleString()}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                ${row.totalBenefit.toLocaleString()}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                ${row.avgCopay.toFixed(2)}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                ${row.avgBenefit.toFixed(2)}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                ${row.avgOOP.toFixed(2)}
                                                            </td>
                                                            <td className="p-3 text-right">
                                                                {row.avgDaySupply.toFixed(1)}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>,
                                        )
                                    }
                                    className="h-8 w-8 p-0"
                                >
                                    <Maximize2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto max-h-96">
                                <table className="w-full text-xs">
                                    <thead className="sticky top-0 bg-white">
                                    <tr className="border-b">
                                        <th className="text-left p-2 font-medium">Month</th>
                                        <th className="text-right p-2 font-medium">Claims</th>
                                        <th className="text-right p-2 font-medium">Members</th>
                                        <th className="text-right p-2 font-medium">
                                            Prescribers
                                        </th>
                                        <th className="text-right p-2 font-medium">Pharmacies</th>
                                        <th className="text-right p-2 font-medium">
                                            Total Benefit
                                        </th>
                                        <th className="text-right p-2 font-medium">Avg Copay</th>
                                        <th className="text-right p-2 font-medium">
                                            Avg Benefit
                                        </th>
                                        <th className="text-right p-2 font-medium">Avg OOP</th>
                                        <th className="text-right p-2 font-medium">
                                            Avg Day Supply
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {monthlyData.map((row, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="p-2 font-medium">{row.date}</td>
                                            <td className="p-2 text-right">
                                                {row.claims.toLocaleString()}
                                            </td>
                                            <td className="p-2 text-right">
                                                {row.members.toLocaleString()}
                                            </td>
                                            <td className="p-2 text-right">
                                                {row.prescribers.toLocaleString()}
                                            </td>
                                            <td className="p-2 text-right">
                                                {row.pharmacies.toLocaleString()}
                                            </td>
                                            <td className="p-2 text-right">
                                                ${row.totalBenefit.toLocaleString()}
                                            </td>
                                            <td className="p-2 text-right">
                                                ${row.avgCopay.toFixed(2)}
                                            </td>
                                            <td className="p-2 text-right">
                                                ${row.avgBenefit.toFixed(2)}
                                            </td>
                                            <td className="p-2 text-right">
                                                ${row.avgOOP.toFixed(2)}
                                            </td>
                                            <td className="p-2 text-right">
                                                {row.avgDaySupply.toFixed(1)}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Fullscreen Modal */}
            <Dialog open={!!fullscreenChart} onOpenChange={closeFullscreen}>
                <DialogContent className="max-w-7xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle>{fullscreenChart?.title}</DialogTitle>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={closeFullscreen}
                                className="h-8 w-8 p-0"
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                    </DialogHeader>
                    <div className="mt-4">{fullscreenChart?.content}</div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DailyChart;
