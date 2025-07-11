import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Maximize2, X } from "lucide-react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Line,
    LineChart,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Legend,
    ComposedChart,
    Area,
    AreaChart,
} from "recharts";
import DateRangeFilter from "@/components/DateRangeFilter.tsx";

// Sample data based on the image
const monthlyClaimsData = [
    { month: "Jan", year: "2022", claims: 25000, totalBenefit: 20000000 },
    { month: "Feb", year: "2022", claims: 28000, totalBenefit: 22000000 },
    { month: "Mar", year: "2022", claims: 32000, totalBenefit: 25000000 },
    { month: "Apr", year: "2022", claims: 35000, totalBenefit: 28000000 },
    { month: "May", year: "2022", claims: 38000, totalBenefit: 30000000 },
    { month: "Jun", year: "2022", claims: 42000, totalBenefit: 33000000 },
    { month: "Jul", year: "2022", claims: 45000, totalBenefit: 35000000 },
    { month: "Aug", year: "2022", claims: 48000, totalBenefit: 38000000 },
    { month: "Sep", year: "2022", claims: 52000, totalBenefit: 41000000 },
    { month: "Oct", year: "2022", claims: 55000, totalBenefit: 43000000 },
    { month: "Nov", year: "2022", claims: 58000, totalBenefit: 46000000 },
    { month: "Dec", year: "2022", claims: 62000, totalBenefit: 49000000 },
    { month: "Jan", year: "2023", claims: 65000, totalBenefit: 52000000 },
    { month: "Feb", year: "2023", claims: 68000, totalBenefit: 54000000 },
    { month: "Mar", year: "2023", claims: 72000, totalBenefit: 57000000 },
    { month: "Apr", year: "2023", claims: 75000, totalBenefit: 60000000 },
    { month: "May", year: "2023", claims: 78000, totalBenefit: 62000000 },
    { month: "Jun", year: "2023", claims: 82000, totalBenefit: 65000000 },
    { month: "Jul", year: "2023", claims: 85000, totalBenefit: 68000000 },
    { month: "Aug", year: "2023", claims: 88000, totalBenefit: 70000000 },
    { month: "Sep", year: "2023", claims: 92000, totalBenefit: 73000000 },
    { month: "Oct", year: "2023", claims: 95000, totalBenefit: 76000000 },
    { month: "Nov", year: "2023", claims: 98000, totalBenefit: 78000000 },
    { month: "Dec", year: "2023", claims: 102000, totalBenefit: 81000000 },
    { month: "Jan", year: "2024", claims: 105000, totalBenefit: 84000000 },
    { month: "Feb", year: "2024", claims: 108000, totalBenefit: 86000000 },
    { month: "Mar", year: "2024", claims: 112000, totalBenefit: 89000000 },
    { month: "Apr", year: "2024", claims: 115000, totalBenefit: 92000000 },
    { month: "May", year: "2024", claims: 118000, totalBenefit: 94000000 },
    { month: "Jun", year: "2024", claims: 122000, totalBenefit: 97000000 },
    { month: "Jul", year: "2024", claims: 125000, totalBenefit: 100000000 },
    { month: "Aug", year: "2024", claims: 128000, totalBenefit: 102000000 },
    { month: "Sep", year: "2024", claims: 132000, totalBenefit: 105000000 },
    { month: "Oct", year: "2024", claims: 135000, totalBenefit: 108000000 },
    { month: "Nov", year: "2024", claims: 138000, totalBenefit: 110000000 },
    { month: "Dec", year: "2024", claims: 142000, totalBenefit: 113000000 },
    { month: "Jan", year: "2025", claims: 145000, totalBenefit: 116000000 },
    { month: "Feb", year: "2025", claims: 148000, totalBenefit: 118000000 },
    { month: "Mar", year: "2025", claims: 152000, totalBenefit: 121000000 },
];

const utilizingMembersData = [
    { month: "Jan", year: "2022", members: 8000 },
    { month: "Feb", year: "2022", members: 8500 },
    { month: "Mar", year: "2022", members: 9200 },
    { month: "Apr", year: "2022", members: 9800 },
    { month: "May", year: "2022", members: 10500 },
    { month: "Jun", year: "2022", members: 11200 },
    { month: "Jul", year: "2022", members: 11800 },
    { month: "Aug", year: "2022", members: 12500 },
    { month: "Sep", year: "2022", members: 13200 },
    { month: "Oct", year: "2022", members: 13800 },
    { month: "Nov", year: "2022", members: 14500 },
    { month: "Dec", year: "2022", members: 15200 },
    { month: "Jan", year: "2023", members: 15800 },
    { month: "Feb", year: "2023", members: 16500 },
    { month: "Mar", year: "2023", members: 17200 },
    { month: "Apr", year: "2023", members: 17800 },
    { month: "May", year: "2023", members: 18500 },
    { month: "Jun", year: "2023", members: 19200 },
    { month: "Jul", year: "2023", members: 19800 },
    { month: "Aug", year: "2023", members: 20500 },
    { month: "Sep", year: "2023", members: 21200 },
    { month: "Oct", year: "2023", members: 21800 },
    { month: "Nov", year: "2023", members: 22500 },
    { month: "Dec", year: "2023", members: 23200 },
    { month: "Jan", year: "2024", members: 23800 },
    { month: "Feb", year: "2024", members: 24500 },
    { month: "Mar", year: "2024", members: 25200 },
    { month: "Apr", year: "2024", members: 25800 },
    { month: "May", year: "2024", members: 26500 },
    { month: "Jun", year: "2024", members: 27200 },
    { month: "Jul", year: "2024", members: 27800 },
    { month: "Aug", year: "2024", members: 28500 },
    { month: "Sep", year: "2024", members: 29200 },
    { month: "Oct", year: "2024", members: 29800 },
    { month: "Nov", year: "2024", members: 30500 },
    { month: "Dec", year: "2024", members: 31200 },
    { month: "Jan", year: "2025", members: 31800 },
    { month: "Feb", year: "2025", members: 32500 },
    { month: "Mar", year: "2025", members: 33200 },
];

const channelData = [
    { name: "Custom Network", percentage: 69.21, color: "#0891b2" },
    { name: "Open Web", percentage: 30.79, color: "#f59e0b" },
];

const insuranceCoverageData = [
    { name: "Covered", percentage: 63.0, color: "#0891b2" },
    { name: "Not Covered", percentage: 37.0, color: "#f59e0b" },
];

const avgCopayBenefitData = [
    { month: "Jan", year: "2022", copay: 180, benefit: 220, oop: 15 },
    { month: "Feb", year: "2022", copay: 185, benefit: 225, oop: 16 },
    { month: "Mar", year: "2022", copay: 190, benefit: 230, oop: 17 },
    { month: "Apr", year: "2022", copay: 195, benefit: 235, oop: 18 },
    { month: "May", year: "2022", copay: 200, benefit: 240, oop: 19 },
    { month: "Jun", year: "2022", copay: 205, benefit: 245, oop: 20 },
    { month: "Jul", year: "2022", copay: 210, benefit: 250, oop: 21 },
    { month: "Aug", year: "2022", copay: 215, benefit: 255, oop: 22 },
    { month: "Sep", year: "2022", copay: 220, benefit: 260, oop: 23 },
    { month: "Oct", year: "2022", copay: 225, benefit: 265, oop: 24 },
    { month: "Nov", year: "2022", copay: 230, benefit: 270, oop: 25 },
    { month: "Dec", year: "2022", copay: 235, benefit: 275, oop: 26 },
    { month: "Jan", year: "2023", copay: 240, benefit: 280, oop: 27 },
    { month: "Feb", year: "2023", copay: 245, benefit: 285, oop: 28 },
    { month: "Mar", year: "2023", copay: 250, benefit: 290, oop: 29 },
    { month: "Apr", year: "2023", copay: 255, benefit: 295, oop: 30 },
    { month: "May", year: "2023", copay: 260, benefit: 300, oop: 31 },
];

const coverageDistributionData = [
    { name: "Covered", value: 55.92, color: "#0891b2" },
    { name: "Not Covered", value: 44.08, color: "#f59e0b" },
];

const kpiData = [
    { title: "Total Benefit Paid", value: "$172M" },
    { title: "Total Claims", value: "705.49K" },
    { title: "Total Members", value: "421.2..." },
    { title: "Utilizing Members", value: "367.3..." },
    { title: "Avg Copay", value: "$260" },
    { title: "Avg Benefit", value: "$244" },
    { title: "Avg OOP", value: "$16.07" },
    { title: "Avg Claims/Member", value: "1.92" },
];

const BrandSummeryChart = () => {
    const [fullscreenChart, setFullscreenChart] = useState<{
        title: string;
        content: React.ReactNode;
    } | null>(null);

    const openFullscreen = (title: string, content: React.ReactNode) => {
        setFullscreenChart({ title, content });
    };

    const closeFullscreen = () => {
        setFullscreenChart(null);
    };

    return (
        <div className="space-y-6">
           <DateRangeFilter/>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
                {kpiData.map((kpi, index) => (
                    <Card key={index} className="bg-white">
                        <CardContent className="p-4">
                            <div className="text-xs text-gray-500 mb-1">{kpi.title}</div>
                            <div className="text-lg font-bold text-gray-900">{kpi.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm">
                                    Total Claims and Benefit by month
                                </CardTitle>
                                <div className="flex items-center space-x-4 text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-blue-500 rounded"></div>
                                        <span>Claims</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-orange-500 rounded"></div>
                                        <span>Total Benefit</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    openFullscreen(
                                        "Total Claims and Benefit by month",
                                        <ResponsiveContainer width="100%" height={600}>
                                            <ComposedChart data={monthlyClaimsData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis yAxisId="left" />
                                                <YAxis yAxisId="right" orientation="right" />
                                                <Tooltip />
                                                <Bar yAxisId="left" dataKey="claims" fill="#3b82f6" />
                                                <Line
                                                    yAxisId="right"
                                                    type="monotone"
                                                    dataKey="totalBenefit"
                                                    stroke="#f59e0b"
                                                    strokeWidth={2}
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
                        <ResponsiveContainer width="100%" height={300}>
                            <ComposedChart data={monthlyClaimsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis yAxisId="left" />
                                <YAxis yAxisId="right" orientation="right" />
                                <Tooltip />
                                <Bar yAxisId="left" dataKey="claims" fill="#3b82f6" />
                                <Line
                                    yAxisId="right"
                                    type="monotone"
                                    dataKey="totalBenefit"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm">Claims by Channel</CardTitle>
                                <div className="text-xs text-gray-500">
                                    Group • Custom Network • Open Web • 100036 - Employee Offer
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    openFullscreen(
                                        "Claims by Channel",
                                        <div className="space-y-6">
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-lg">Custom Network</span>
                                                    <span className="text-lg font-medium">69.21%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-12">
                                                    <div
                                                        className="bg-zoryve-teal h-12 rounded-full flex items-center justify-end pr-4"
                                                        style={{ width: "69.21%" }}
                                                    >
                            <span className="text-white text-lg font-medium">
                              69.21%
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-lg">Open Web</span>
                                                    <span className="text-lg font-medium">30.79%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-12">
                                                    <div
                                                        className="bg-zoryve-orange h-12 rounded-full flex items-center justify-end pr-4"
                                                        style={{ width: "30.79%" }}
                                                    >
                            <span className="text-white text-lg font-medium">
                              30.79%
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500 mt-4">
                                                100036 - Employee...
                                            </div>
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
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">Custom Network</span>
                                    <span className="text-sm font-medium">69.21%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-6">
                                    <div
                                        className="bg-zoryve-teal h-6 rounded-full flex items-center justify-end pr-2"
                                        style={{ width: "69.21%" }}
                                    >
                                        <span className="text-white text-xs">69.21%</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">Open Web</span>
                                    <span className="text-sm font-medium">30.79%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-6">
                                    <div
                                        className="bg-zoryve-orange h-6 rounded-full flex items-center justify-end pr-2"
                                        style={{ width: "30.79%" }}
                                    >
                                        <span className="text-white text-xs">30.79%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500 mt-2">
                                100036 - Employee...
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-sm">
                                Utilizing Members by Month
                            </CardTitle>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    openFullscreen(
                                        "Utilizing Members by Month",
                                        <ResponsiveContainer width="100%" height={600}>
                                            <BarChart data={utilizingMembersData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="members" fill="#0891b2" />
                                            </BarChart>
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
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={utilizingMembersData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="members" fill="#0891b2" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm">
                                    Claims by Insurance Coverage
                                </CardTitle>
                                <div className="text-xs text-gray-500">
                                    Coverage • Covered • Not Covered
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    openFullscreen(
                                        "Claims by Insurance Coverage",
                                        <div className="space-y-6">
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-lg">Covered</span>
                                                    <span className="text-lg font-medium">63.00%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-12">
                                                    <div
                                                        className="bg-zoryve-teal h-12 rounded-full flex items-center justify-center"
                                                        style={{ width: "63%" }}
                                                    >
                            <span className="text-white text-lg font-medium">
                              63.00%
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="text-lg">Not Covered</span>
                                                    <span className="text-lg font-medium">37.00%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-12">
                                                    <div
                                                        className="bg-zoryve-orange h-12 rounded-full flex items-center justify-center"
                                                        style={{ width: "37%" }}
                                                    >
                            <span className="text-white text-lg font-medium">
                              37.00%
                            </span>
                                                    </div>
                                                </div>
                                            </div>
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
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">Covered</span>
                                    <span className="text-sm font-medium">63.00%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-6">
                                    <div
                                        className="bg-zoryve-teal h-6 rounded-full flex items-center justify-end pr-2"
                                        style={{ width: "63%" }}
                                    >
                                        <span className="text-white text-xs">63.00%</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm">Not Covered</span>
                                    <span className="text-sm font-medium">37.00%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-6">
                                    <div
                                        className="bg-zoryve-orange h-6 rounded-full flex items-center justify-end pr-2"
                                        style={{ width: "37%" }}
                                    >
                                        <span className="text-white text-xs">37.00%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm">
                                    Avg Copay, Benefit, OOP by Month
                                </CardTitle>
                                <div className="flex items-center space-x-4 text-xs mt-2">
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-blue-500 rounded"></div>
                                        <span>Benefit</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-orange-500 rounded"></div>
                                        <span>Copay</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    openFullscreen(
                                        "Avg Copay, Benefit, OOP by Month",
                                        <ResponsiveContainer width="100%" height={600}>
                                            <LineChart data={avgCopayBenefitData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Line
                                                    type="monotone"
                                                    dataKey="benefit"
                                                    stroke="#0891b2"
                                                    strokeWidth={2}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="copay"
                                                    stroke="#f59e0b"
                                                    strokeWidth={2}
                                                />
                                                <Line
                                                    type="monotone"
                                                    dataKey="oop"
                                                    stroke="#8b5cf6"
                                                    strokeWidth={2}
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
                            <LineChart data={avgCopayBenefitData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="benefit"
                                    stroke="#0891b2"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="copay"
                                    stroke="#f59e0b"
                                    strokeWidth={2}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="oop"
                                    stroke="#8b5cf6"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-sm">
                                    Members Covered vs. Not Covered
                                </CardTitle>
                                <div className="text-xs text-gray-500">
                                    Coverage • Covered • Not Covered
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() =>
                                    openFullscreen(
                                        "Members Covered vs. Not Covered",
                                        <div className="flex flex-col items-center">
                                            <ResponsiveContainer width="100%" height={500}>
                                                <PieChart>
                                                    <Pie
                                                        data={coverageDistributionData}
                                                        cx="50%"
                                                        cy="50%"
                                                        innerRadius={60}
                                                        outerRadius={150}
                                                        dataKey="value"
                                                    >
                                                        {coverageDistributionData.map((entry, index) => (
                                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                                        ))}
                                                    </Pie>
                                                    <Tooltip />
                                                </PieChart>
                                            </ResponsiveContainer>
                                            <div className="text-lg text-center mt-4">
                                                <span>Not Covered 44.08%</span>
                                                <br />
                                                <span>Covered 55.92%</span>
                                            </div>
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
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie
                                    data={coverageDistributionData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={30}
                                    outerRadius={80}
                                    dataKey="value"
                                >
                                    {coverageDistributionData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="text-xs text-center mt-2">
                            <span>Not Covered 44.08%</span>
                            <br />
                            <span>Covered 55.92%</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Dialog open={!!fullscreenChart} onOpenChange={closeFullscreen}>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
                    <DialogHeader>
                        <div className="flex items-center justify-between">
                            <DialogTitle>{fullscreenChart?.title}</DialogTitle>
                        </div>
                    </DialogHeader>
                    <div className="mt-4">{fullscreenChart?.content}</div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BrandSummeryChart;
