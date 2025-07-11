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
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

// Sample data for NRX, TRX, and Refill metrics
const barChartData = {
    nrxTrxRefill: {
        nrx: 45,
        trx: 35,
        refill: 20,
    },
    totalMembers: {
        nrx: 50,
        trx: 30,
        refill: 20,
    },
    totalBenefit: {
        nrx: 40,
        trx: 40,
        refill: 20,
    },
};

// Sample line chart data
const lineChartData = [
    { month: "Jan 2023", nrx: 100, trx: 120, refill: 80 },
    { month: "Feb 2023", nrx: 110, trx: 125, refill: 85 },
    { month: "Mar 2023", nrx: 120, trx: 130, refill: 90 },
    { month: "Apr 2023", nrx: 115, trx: 135, refill: 88 },
    { month: "May 2023", nrx: 125, trx: 140, refill: 92 },
    { month: "Jun 2023", nrx: 130, trx: 145, refill: 95 },
    { month: "Jul 2023", nrx: 135, trx: 150, refill: 98 },
    { month: "Aug 2023", nrx: 140, trx: 155, refill: 100 },
    { month: "Sep 2023", nrx: 145, trx: 160, refill: 105 },
    { month: "Oct 2023", nrx: 150, trx: 165, refill: 110 },
    { month: "Nov 2023", nrx: 155, trx: 170, refill: 115 },
    { month: "Dec 2023", nrx: 160, trx: 175, refill: 120 },
    { month: "Jan 2024", nrx: 165, trx: 180, refill: 125 },
];

// Sample table data
const tableData = [
    {
        brand: "ZORYVE",
        claims: 48141,
        members: 33476,
        pharmacies: 1748,
        prescribers: 11171,
        avgCopay: 1088.77,
        avgBenefit: 1074.74,
        avgOOP: 14.03,
        avgDaysSupply: 33.81,
        totalBenefit: "11,347,806.89",
    },
    {
        brand: "Covered",
        claims: 0,
        members: 0,
        pharmacies: 0,
        prescribers: 0,
        avgCopay: 554.14,
        avgBenefit: 554.14,
        avgOOP: 50.0,
        avgDaysSupply: 30.0,
        totalBenefit: "1,503.44",
    },
    {
        brand: "Other",
        claims: 36414,
        members: 26242,
        pharmacies: 134,
        prescribers: 8621,
        avgCopay: 1279.13,
        avgBenefit: 1049.77,
        avgOOP: 11.36,
        avgDaysSupply: 34.67,
        totalBenefit: "891,794.00",
    },
    {
        brand: "Custom Network",
        claims: 18454,
        members: 9584,
        pharmacies: 1613,
        prescribers: 4711,
        avgCopay: 1316.93,
        avgBenefit: 1201.18,
        avgOOP: 115.74,
        avgDaysSupply: 31.13,
        totalBenefit: "141,700,397.90",
    },
    {
        brand: "Open Web",
        claims: 71318,
        members: 43177,
        pharmacies: 961,
        prescribers: 19334,
        avgCopay: 1759.2,
        avgBenefit: 1707.2,
        avgOOP: 519.0,
        avgDaysSupply: 30.0,
        totalBenefit: "64,499,094.84",
    },
    {
        brand: "Not Covered",
        claims: 37,
        members: 6,
        pharmacies: 5,
        prescribers: 6,
        avgCopay: 1833.31,
        avgBenefit: 1833.31,
        avgOOP: 50.0,
        avgDaysSupply: 30.0,
        totalBenefit: "130,462.52",
    },
    {
        brand: "100036 - Employee Offer",
        claims: 0,
        members: 0,
        pharmacies: 0,
        prescribers: 0,
        avgCopay: 0,
        avgBenefit: 0,
        avgOOP: 0,
        avgDaysSupply: 0,
        totalBenefit: "---",
    },
    {
        brand: "Total",
        claims: 119536,
        members: 64247,
        pharmacies: 2254,
        prescribers: 15274,
        avgCopay: 1570.14,
        avgBenefit: 1533.48,
        avgOOP: 116.65,
        avgDaysSupply: 31.54,
        totalBenefit: "16,377,967,590.12",
    },
];

const PortfolioChart = () => {
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

    // Horizontal bar chart component
    const HorizontalBarChart = ({
                                    data,
                                    title,
                                }: {
        data: any;
        title: string;
    }) => (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-sm font-medium">{title}</CardTitle>
                        <div className="flex items-center space-x-4 text-xs mt-2">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span>NRX</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span>TRX</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                <span>Refill</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                            openFullscreen(
                                title,
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-lg">
                                            <span>NRX</span>
                                            <span>{data.nrx}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-8">
                                            <div
                                                className="bg-blue-500 h-8 rounded-full flex items-center justify-center"
                                                style={{ width: `${data.nrx}%` }}
                                            >
                        <span className="text-white text-sm font-medium">
                          {data.nrx}%
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-lg">
                                            <span>TRX</span>
                                            <span>{data.trx}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-8">
                                            <div
                                                className="bg-orange-500 h-8 rounded-full flex items-center justify-center"
                                                style={{ width: `${data.trx}%` }}
                                            >
                        <span className="text-white text-sm font-medium">
                          {data.trx}%
                        </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between text-lg">
                                            <span>Refill</span>
                                            <span>{data.refill}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-8">
                                            <div
                                                className="bg-gray-600 h-8 rounded-full flex items-center justify-center"
                                                style={{ width: `${data.refill}%` }}
                                            >
                        <span className="text-white text-sm font-medium">
                          {data.refill}%
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
                <div className="space-y-3">
                    {/* NRX Bar */}
                    <div className="space-y-1">
                        <div className="w-full bg-gray-200 rounded h-6">
                            <div
                                className="bg-blue-500 h-6 rounded flex items-center justify-end pr-2"
                                style={{ width: `${data.nrx}%` }}
                            >
                <span className="text-white text-xs font-medium">
                  {data.nrx}%
                </span>
                            </div>
                        </div>
                    </div>

                    {/* TRX Bar */}
                    <div className="space-y-1">
                        <div className="w-full bg-gray-200 rounded h-6">
                            <div
                                className="bg-orange-500 h-6 rounded flex items-center justify-end pr-2"
                                style={{ width: `${data.trx}%` }}
                            >
                <span className="text-white text-xs font-medium">
                  {data.trx}%
                </span>
                            </div>
                        </div>
                    </div>

                    {/* Refill Bar */}
                    <div className="space-y-1">
                        <div className="w-full bg-gray-200 rounded h-6">
                            <div
                                className="bg-gray-600 h-6 rounded flex items-center justify-end pr-2"
                                style={{ width: `${data.refill}%` }}
                            >
                <span className="text-white text-xs font-medium">
                  {data.refill}%
                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scale */}
                <div className="flex justify-between text-xs text-gray-500 mt-4">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                </div>
            </CardContent>
        </Card>
    );

    // Line chart component
    const LineChartComponent = ({ title }: { title: string }) => (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-sm font-medium">{title}</CardTitle>
                        <div className="flex items-center space-x-4 text-xs mt-2">
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span>NRX</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                <span>TRX</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                <span>Refill</span>
                            </div>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                            openFullscreen(
                                title,
                                <ResponsiveContainer width="100%" height={500}>
                                    <LineChart data={lineChartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Line
                                            type="monotone"
                                            dataKey="nrx"
                                            stroke="#3b82f6"
                                            strokeWidth={2}
                                            name="NRX"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="trx"
                                            stroke="#f59e0b"
                                            strokeWidth={2}
                                            name="TRX"
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="refill"
                                            stroke="#4b5563"
                                            strokeWidth={2}
                                            name="Refill"
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
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={lineChartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="nrx"
                            stroke="#3b82f6"
                            strokeWidth={2}
                            name="NRX"
                        />
                        <Line
                            type="monotone"
                            dataKey="trx"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            name="TRX"
                        />
                        <Line
                            type="monotone"
                            dataKey="refill"
                            stroke="#4b5563"
                            strokeWidth={2}
                            name="Refill"
                        />
                    </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Jan 2023</span>
                    <span>Jul 2023</span>
                    <span>Jan 2024</span>
                </div>
            </CardContent>
        </Card>
    );

    return (
        <div className="space-y-6">
            {/* Top row - Horizontal Bar Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <HorizontalBarChart
                    data={barChartData.nrxTrxRefill}
                    title="NRX, TRX and Refill"
                />
                <HorizontalBarChart
                    data={barChartData.totalMembers}
                    title="Total Members"
                />
                <HorizontalBarChart
                    data={barChartData.totalBenefit}
                    title="Total Benefit"
                />
            </div>

            {/* Middle row - Line Charts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <LineChartComponent title="Total Claims" />
                <LineChartComponent title="Total Members" />
                <LineChartComponent title="Total Benefit" />
            </div>

            {/* Bottom row - Data Table */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">
                            Detailed Breakdown
                        </CardTitle>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                openFullscreen(
                                    "Detailed Breakdown",
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm">
                                            <thead>
                                            <tr className="border-b">
                                                <th className="text-left p-3 font-medium">Brands</th>
                                                <th className="text-right p-3 font-medium">Claims</th>
                                                <th className="text-right p-3 font-medium">
                                                    Members
                                                </th>
                                                <th className="text-right p-3 font-medium">
                                                    Pharmacies
                                                </th>
                                                <th className="text-right p-3 font-medium">
                                                    Prescribers
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
                                                    Avg Days of Supply
                                                </th>
                                                <th className="text-right p-3 font-medium">
                                                    Total Benefit
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {tableData.map((row, index) => (
                                                <tr
                                                    key={index}
                                                    className={`border-b hover:bg-gray-50 ${row.brand === "Total" ? "font-semibold bg-gray-100" : ""}`}
                                                >
                                                    <td className="p-3 font-medium">{row.brand}</td>
                                                    <td className="p-3 text-right">
                                                        {row.claims.toLocaleString()}
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        {row.members.toLocaleString()}
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        {row.pharmacies.toLocaleString()}
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        {row.prescribers.toLocaleString()}
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
                                                        {row.avgDaysSupply.toFixed(2)}
                                                    </td>
                                                    <td className="p-3 text-right">
                                                        {row.totalBenefit}
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
                    <div className="overflow-x-auto">
                        <table className="w-full text-xs">
                            <thead>
                            <tr className="border-b">
                                <th className="text-left p-2 font-medium">Brands</th>
                                <th className="text-right p-2 font-medium">Claims</th>
                                <th className="text-right p-2 font-medium">Members</th>
                                <th className="text-right p-2 font-medium">Pharmacies</th>
                                <th className="text-right p-2 font-medium">Prescribers</th>
                                <th className="text-right p-2 font-medium">Avg Copay</th>
                                <th className="text-right p-2 font-medium">Avg Benefit</th>
                                <th className="text-right p-2 font-medium">Avg OOP</th>
                                <th className="text-right p-2 font-medium">
                                    Avg Days of Supply
                                </th>
                                <th className="text-right p-2 font-medium">Total Benefit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {tableData.map((row, index) => (
                                <tr
                                    key={index}
                                    className={`border-b hover:bg-gray-50 ${row.brand === "Total" ? "font-semibold bg-gray-100" : ""}`}
                                >
                                    <td className="p-2 font-medium">{row.brand}</td>
                                    <td className="p-2 text-right">
                                        {row.claims.toLocaleString()}
                                    </td>
                                    <td className="p-2 text-right">
                                        {row.members.toLocaleString()}
                                    </td>
                                    <td className="p-2 text-right">
                                        {row.pharmacies.toLocaleString()}
                                    </td>
                                    <td className="p-2 text-right">
                                        {row.prescribers.toLocaleString()}
                                    </td>
                                    <td className="p-2 text-right">
                                        ${row.avgCopay.toFixed(2)}
                                    </td>
                                    <td className="p-2 text-right">
                                        ${row.avgBenefit.toFixed(2)}
                                    </td>
                                    <td className="p-2 text-right">${row.avgOOP.toFixed(2)}</td>
                                    <td className="p-2 text-right">
                                        {row.avgDaysSupply.toFixed(2)}
                                    </td>
                                    <td className="p-2 text-right">{row.totalBenefit}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Fullscreen Modal */}
            <Dialog open={!!fullscreenChart} onOpenChange={closeFullscreen}>
                <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
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

export default PortfolioChart;