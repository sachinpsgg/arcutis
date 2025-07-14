import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const TrendsChart = () => {
    const [ndc, setNdc] = useState("All");
    const [specialty, setSpecialty] = useState("All");
    const [memberType, setMemberType] = useState("All");
    const [payerType, setPayerType] = useState("All");
    const [daySupply, setDaySupply] = useState("All");
    const [quantity, setQuantity] = useState("All");
    const [activeTab, setActiveTab] = useState("total-benefits");
    const [activeFilterTab, setActiveFilterTab] = useState("ndc");

    // Mock data for yearly summary
    const yearlyData = {
        "total-benefits": [
            { year: 2022, benefit: "$64.33 654.42", claims: "9631", members: "6526" },
            {
                year: 2023,
                benefit: "$103.40 166.73",
                claims: "87539",
                members: "62417",
            },
            {
                year: "Total",
                benefit: "$17.26 76 016.99",
                claims: "708509",
                members: "368572",
            },
        ],
        claims: [
            { year: 2022, benefit: "$64.33 654.42", claims: "9631", members: "6526" },
            {
                year: 2023,
                benefit: "$103.40 166.73",
                claims: "87539",
                members: "62417",
            },
            {
                year: "Total",
                benefit: "$17.26 76 016.99",
                claims: "708509",
                members: "368572",
            },
        ],
        members: [
            { year: 2022, benefit: "$64.33 654.42", claims: "9631", members: "6526" },
            {
                year: 2023,
                benefit: "$103.40 166.73",
                claims: "87539",
                members: "62417",
            },
            {
                year: "Total",
                benefit: "$17.26 76 016.99",
                claims: "708509",
                members: "368572",
            },
        ],
    };

    // Mock data for monthly bar chart
    const monthlyData = [
        { month: "January", year2022: 8, year2023: 12, year2024: 15, year2025: 10 },
        {
            month: "February",
            year2022: 10,
            year2023: 14,
            year2024: 18,
            year2025: 12,
        },
        { month: "March", year2022: 12, year2023: 16, year2024: 20, year2025: 14 },
        { month: "April", year2022: 14, year2023: 18, year2024: 22, year2025: 16 },
        { month: "May", year2022: 16, year2023: 20, year2024: 24, year2025: 18 },
        { month: "June", year2022: 18, year2023: 22, year2024: 26, year2025: 20 },
        { month: "July", year2022: 20, year2023: 24, year2024: 28, year2025: 22 },
        { month: "August", year2022: 22, year2023: 26, year2024: 30, year2025: 24 },
        {
            month: "September",
            year2022: 24,
            year2023: 28,
            year2024: 32,
            year2025: 26,
        },
        {
            month: "October",
            year2022: 26,
            year2023: 30,
            year2024: 34,
            year2025: 28,
        },
        {
            month: "November",
            year2022: 28,
            year2023: 32,
            year2024: 36,
            year2025: 30,
        },
        {
            month: "December",
            year2022: 30,
            year2023: 34,
            year2024: 38,
            year2025: 32,
        },
    ];

    // Mock data for trend lines
    const trendData = [
        { quarter: "Qtr 2 2022", line1: 15, line2: 12, line3: 8 },
        { quarter: "Qtr 3 2022", line1: 18, line2: 14, line3: 10 },
        { quarter: "Qtr 4 2022", line1: 22, line2: 16, line3: 12 },
        { quarter: "Qtr 1 2023", line1: 25, line2: 18, line3: 14 },
        { quarter: "Qtr 2 2023", line1: 28, line2: 20, line3: 16 },
        { quarter: "Qtr 3 2023", line1: 30, line2: 22, line3: 18 },
        { quarter: "Qtr 4 2023", line1: 32, line2: 24, line3: 20 },
        { quarter: "Qtr 1 2024", line1: 28, line2: 20, line3: 16 },
        { quarter: "Qtr 2 2024", line1: 25, line2: 18, line3: 14 },
        { quarter: "Qtr 3 2024", line1: 22, line2: 16, line3: 12 },
        { quarter: "Qtr 4 2024", line1: 20, line2: 14, line3: 10 },
        { quarter: "Qtr 1 2025", line1: 18, line2: 12, line3: 8 },
    ];

    // Mock data for horizontal bar chart (left side) - changes based on active filter
    const horizontalData = {
        ndc: [
            {
                category: "00610013560",
                value: 120,
                color: "#4A90E2",
                percentage: "60.0%",
            },
            {
                category: "00610043560",
                value: 80,
                color: "#F5A623",
                percentage: "35.1%",
            },
            {
                category: "00610011560",
                value: 40,
                color: "#6B7280",
                percentage: "4.9%",
            },
        ],
        specialty: [
            {
                category: "Physician",
                value: 150,
                color: "#4A90E2",
                percentage: "45.0%",
            },
            {
                category: "Physician Assistant",
                value: 120,
                color: "#F5A623",
                percentage: "35.0%",
            },
            {
                category: "Dermatology",
                value: 60,
                color: "#5BA7F7",
                percentage: "15.0%",
            },
            {
                category: "Advanced Practice",
                value: 30,
                color: "#10B981",
                percentage: "3.0%",
            },
            {
                category: "Nurse Practitioner",
                value: 20,
                color: "#8B5CF6",
                percentage: "2.0%",
            },
        ],
        "member-type": [
            {
                category: "Existing Member",
                value: 180,
                color: "#4A90E2",
                percentage: "100%",
            },
        ],
        "payer-type": [
            {
                category: "Commercial",
                value: 100,
                color: "#4A90E2",
                percentage: "62.5%",
            },
            {
                category: "Government",
                value: 60,
                color: "#F5A623",
                percentage: "37.5%",
            },
        ],
        "day-supply": [
            {
                category: "30 Days",
                value: 140,
                color: "#4A90E2",
                percentage: "53.8%",
            },
            { category: "60 Days", value: 80, color: "#F5A623", percentage: "30.8%" },
            { category: "90 Days", value: 40, color: "#5BA7F7", percentage: "15.4%" },
        ],
        quantity: [
            { category: "1-30", value: 120, color: "#4A90E2", percentage: "54.5%" },
            { category: "31-60", value: 70, color: "#F5A623", percentage: "31.8%" },
            { category: "61+", value: 30, color: "#5BA7F7", percentage: "13.7%" },
        ],
    };

    const FilterSection = () => (
        <div className="grid grid-cols-6 gap-4 mb-6">
            <div>
                <label className="block text-sm font-medium mb-2">NDC</label>
                <Select value={ndc} onValueChange={setNdc}>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="NDC1">NDC1</SelectItem>
                        <SelectItem value="NDC2">NDC2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Specialty</label>
                <Select value={specialty} onValueChange={setSpecialty}>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Dermatology">Dermatology</SelectItem>
                        <SelectItem value="Cardiology">Cardiology</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Member Type</label>
                <Select value={memberType} onValueChange={setMemberType}>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Existing">Existing</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Payer Type</label>
                <Select value={payerType} onValueChange={setPayerType}>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="Commercial">Commercial</SelectItem>
                        <SelectItem value="Government">Government</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Day Supply</label>
                <Select value={daySupply} onValueChange={setDaySupply}>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                        <SelectItem value="60">60 Days</SelectItem>
                        <SelectItem value="90">90 Days</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <Select value={quantity} onValueChange={setQuantity}>
                    <SelectTrigger>
                        <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All</SelectItem>
                        <SelectItem value="1-30">1-30</SelectItem>
                        <SelectItem value="31-60">31-60</SelectItem>
                        <SelectItem value="61+">61+</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );

    const TabContent = ({ tabKey }) => (
        <div className="space-y-6">
            {/* Secondary Filter Tabs - Horizontal Layout */}
            <div className="grid grid-cols-6 gap-2 text-sm font-medium">
                <button
                    onClick={() => setActiveFilterTab("ndc")}
                    className={`p-2 text-center border rounded ${
                        activeFilterTab === "ndc"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-50 border-gray-300"
                    }`}
                >
                    NDC
                </button>
                <button
                    onClick={() => setActiveFilterTab("specialty")}
                    className={`p-2 text-center border rounded ${
                        activeFilterTab === "specialty"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-50 border-gray-300"
                    }`}
                >
                    Specialty
                </button>
                <button
                    onClick={() => setActiveFilterTab("member-type")}
                    className={`p-2 text-center border rounded ${
                        activeFilterTab === "member-type"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-50 border-gray-300"
                    }`}
                >
                    Member Type
                </button>
                <button
                    onClick={() => setActiveFilterTab("payer-type")}
                    className={`p-2 text-center border rounded ${
                        activeFilterTab === "payer-type"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-50 border-gray-300"
                    }`}
                >
                    Payer Type
                </button>
                <button
                    onClick={() => setActiveFilterTab("day-supply")}
                    className={`p-2 text-center border rounded ${
                        activeFilterTab === "day-supply"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-50 border-gray-300"
                    }`}
                >
                    Day Supply
                </button>
                <button
                    onClick={() => setActiveFilterTab("quantity")}
                    className={`p-2 text-center border rounded ${
                        activeFilterTab === "quantity"
                            ? "bg-blue-100 border-blue-500"
                            : "bg-gray-50 border-gray-300"
                    }`}
                >
                    Quantity
                </button>
            </div>

            {/* Legend Display */}
            <div className="flex items-center gap-6 text-sm">
                {horizontalData[activeFilterTab]?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-3 h-3 rounded"
                            style={{ backgroundColor: item.color }}
                        />
                        <span>{item.category}</span>
                    </div>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6">
                {/* Left Side - Summary Table and Horizontal Chart */}
                <div className="col-span-3 space-y-6">
                    {/* Yearly Summary Table */}
                    <Card>
                        <CardContent className="p-4">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Year</TableHead>
                                        <TableHead>Benefit</TableHead>
                                        <TableHead>Claims</TableHead>
                                        <TableHead>Members</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {yearlyData[tabKey].map((row, index) => (
                                        <TableRow
                                            key={index}
                                            className={
                                                row.year === "Total" ? "font-bold bg-gray-50" : ""
                                            }
                                        >
                                            <TableCell>{row.year}</TableCell>
                                            <TableCell>{row.benefit}</TableCell>
                                            <TableCell>{row.claims}</TableCell>
                                            <TableCell>{row.members}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Horizontal Bar Chart */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-sm">
                                {activeFilterTab.replace("-", " ").toUpperCase()}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-3">
                                {horizontalData[activeFilterTab]?.map((item, index) => (
                                    <div key={index} className="space-y-1">
                                        <div className="flex justify-between text-sm">
                                            <span>{item.category}</span>
                                            <span>${item.value}M</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-6">
                                            <div
                                                className="h-6 rounded-full flex items-center justify-end pr-2 text-white text-xs"
                                                style={{
                                                    width: `${(item.value / Math.max(...horizontalData[activeFilterTab].map((d) => d.value))) * 100}%`,
                                                    backgroundColor: item.color,
                                                }}
                                            >
                                                {item.percentage}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-between text-sm mt-4 pt-2 border-t">
                                    <span>$0.0m</span>
                                    <span>$0.1m</span>
                                    <span>$0.2m</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Center - Monthly Bar Chart */}
                <div className="col-span-9">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Click on column of chart to filter time period
                            </CardTitle>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                    <span>2022</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                                    <span>2023</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                                    <span>2024</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded"></div>
                                    <span>2025</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="h-80">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={monthlyData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="year2022" fill="#4A90E2" />
                                        <Bar dataKey="year2023" fill="#F5A623" />
                                        <Bar dataKey="year2024" fill="#10B981" />
                                        <Bar dataKey="year2025" fill="#8B5CF6" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Bottom - Trend Lines */}
            <Card>
                <CardContent>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={trendData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="quarter" />
                                <YAxis />
                                <Tooltip />
                                {horizontalData[activeFilterTab]?.map((item, index) => (
                                    <Line
                                        key={index}
                                        type="monotone"
                                        dataKey={`line${index + 1}`}
                                        stroke={item.color}
                                        strokeWidth={2}
                                        name={item.category}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    return (
        <div className="p-6 space-y-6">
            <FilterSection />

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="total-benefits">Total Benefits</TabsTrigger>
                    <TabsTrigger value="claims">Claims</TabsTrigger>
                    <TabsTrigger value="members">Members</TabsTrigger>
                </TabsList>

                <TabsContent value="total-benefits" className="mt-6">
                    <TabContent tabKey="total-benefits" />
                </TabsContent>

                <TabsContent value="claims" className="mt-6">
                    <TabContent tabKey="claims" />
                </TabsContent>

                <TabsContent value="members" className="mt-6">
                    <TabContent tabKey="members" />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default TrendsChart;
