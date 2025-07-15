import React from "react";
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PatientDemographicsChart = () => {
    // Sample data for the charts
    const genderData = [
        { name: "Male", value: 46.6, color: "#4A90E2" },
        { name: "Female", value: 53.4, color: "#F5A623" },
    ];

    const coverageData = [
        { name: "Covered", value: 74.2, color: "#4A90E2" },
        { name: "Not Covered", value: 25.8, color: "#F5A623" },
    ];

    const specialtyData = [
        { name: "Dermatology", value: 55.2, color: "#4A90E2" },
        { name: "Physicia Assist", value: 25.1, color: "#F5A623" },
        { name: "Nurse Practitioner", value: 19.7, color: "#5BA7F7" },
    ];

    const ageDistributionData = [
        { age: "15-19", male: 400, female: 350 },
        { age: "19-24", male: 450, female: 400 },
        { age: "25-29", male: 500, female: 450 },
        { age: "30-34", male: 480, female: 420 },
        { age: "35-39", male: 520, female: 500 },
        { age: "40-44", male: 600, female: 580 },
        { age: "45-55", male: 1650, female: 1450 },
        { age: "56-65", male: 1750, female: 1500 },
        { age: "65+", male: 800, female: 750 },
    ];

    const trendData = [
        { month: "Sep 2022", members: 0.5 },
        { month: "Nov 2022", members: 2.0 },
        { month: "Jan 2023", members: 2.7 },
        { month: "Mar 2023", members: 4.3 },
        { month: "May 2023", members: 3.7 },
        { month: "Jul 2023", members: 1.5 },
    ];

    const summaryStats = [
        { label: "Members", value: "13170" },
        { label: "New Members", value: "13316" },
        { label: "Claims", value: "3442" },
        { label: "Prescribers", value: "525" },
        { label: "Pharmacies", value: "17737" },
        { label: "Avg. Copay", value: "$67.03" },
        { label: "Avg. Benefit", value: "$47.77" },
        { label: "Avg. OOP", value: "1.18" },
        { label: "Avg. Claims Per Member", value: "1.18" },
    ];

    const stateColors = {
        CA: "#1e40af",
        TX: "#1e40af",
        FL: "#3b82f6",
        NY: "#60a5fa",
        PA: "#93c5fd",
        IL: "#bfdbfe",
        OH: "#dbeafe",
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-3 border rounded shadow-lg">
                    <p className="font-medium">{`Age: ${label}`}</p>
                    {payload.map((entry: any, index: number) => (
                        <p key={index} style={{ color: entry.color }}>
                            {`${entry.dataKey}: ${entry.value}`}
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
            {/* Header with Summary Stats */}
            <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 border-b">
                    <h2 className="text-xl font-semibold">Member by Gender</h2>
                </div>
                <div className="p-4">
                    <div className="grid grid-cols-9 gap-4 text-sm">
                        {summaryStats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-gray-600 mb-1">{stat.label}</div>
                                <div className="font-semibold text-gray-900">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Member by Gender */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Member by Gender</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={genderData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={450}
                                            >
                                                {genderData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold">F 53.4%</div>
                                            <div className="text-lg text-gray-600">M 46.6%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Members Covered v/s Not Covered */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">
                                Members Covered v/s Not Covered
                            </CardTitle>
                            <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                                    <span>Not Covered</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                                    <span>Covered</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={coverageData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={450}
                                            >
                                                {coverageData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-lg font-bold">Covered 74.2%</div>
                                            <div className="text-sm text-gray-600">
                                                Not Covered 25.8%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Members by Specialty */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Members by Specialty</CardTitle>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-600 rounded"></div>
                                    <span>Dermatology</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-400 rounded"></div>
                                    <span>Physicia</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-gray-600 rounded"></div>
                                    <span>Nurse Pr...</span>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie
                                                data={specialtyData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={60}
                                                outerRadius={90}
                                                dataKey="value"
                                                startAngle={90}
                                                endAngle={450}
                                            >
                                                {specialtyData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-lg font-bold">Dermatology 55.2%</div>
                                            <div className="text-sm text-gray-600">
                                                Physicia Asst 25.1%
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                Nurse Practitioner 19.7%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Middle Column */}
                <div className="space-y-6">
                    {/* Members by State */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Members by State</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative">
                                {/* Simplified US Map representation */}
                                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                    {/* Simulated US Map with colored states */}
                                    <svg viewBox="0 0 400 250" className="w-full h-full">
                                        {/* California */}
                                        <rect
                                            x="20"
                                            y="120"
                                            width="40"
                                            height="60"
                                            fill="#1e40af"
                                        />
                                        <text
                                            x="35"
                                            y="155"
                                            className="text-xs fill-white font-medium"
                                        >
                                            CA
                                        </text>

                                        {/* Texas */}
                                        <rect
                                            x="120"
                                            y="140"
                                            width="50"
                                            height="40"
                                            fill="#1e40af"
                                        />
                                        <text
                                            x="140"
                                            y="165"
                                            className="text-xs fill-white font-medium"
                                        >
                                            TX
                                        </text>

                                        {/* Florida */}
                                        <rect
                                            x="240"
                                            y="180"
                                            width="40"
                                            height="30"
                                            fill="#3b82f6"
                                        />
                                        <text
                                            x="255"
                                            y="200"
                                            className="text-xs fill-white font-medium"
                                        >
                                            FL
                                        </text>

                                        {/* New York */}
                                        <rect
                                            x="280"
                                            y="80"
                                            width="30"
                                            height="25"
                                            fill="#60a5fa"
                                        />
                                        <text
                                            x="290"
                                            y="98"
                                            className="text-xs fill-white font-medium"
                                        >
                                            NY
                                        </text>

                                        {/* Other states in lighter shades */}
                                        <rect
                                            x="200"
                                            y="100"
                                            width="35"
                                            height="30"
                                            fill="#93c5fd"
                                        />
                                        <rect
                                            x="160"
                                            y="90"
                                            width="30"
                                            height="35"
                                            fill="#bfdbfe"
                                        />
                                        <rect
                                            x="100"
                                            y="80"
                                            width="40"
                                            height="40"
                                            fill="#dbeafe"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                    {/* Trend of Members */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Trend of Members</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="h-64">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={trendData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="month"
                                            tick={{ fontSize: 12 }}
                                            angle={-45}
                                            textAnchor="end"
                                            height={60}
                                        />
                                        <YAxis tick={{ fontSize: 12 }} />
                                        <Tooltip />
                                        <Line
                                            type="monotone"
                                            dataKey="members"
                                            stroke="#4A90E2"
                                            strokeWidth={2}
                                            dot={{ fill: "#4A90E2", strokeWidth: 2, r: 4 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Members by Age Distribution - Full Width */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Members by Age Distribution</CardTitle>
                    <div className="flex items-center gap-4 text-sm">
                        <span className="text-gray-600">Patient Gender:</span>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded"></div>
                            <span>M</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                            <span>F</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={ageDistributionData}
                                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="age" />
                                <YAxis />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar dataKey="male" fill="#4A90E2" name="Male" />
                                <Bar dataKey="female" fill="#F5A623" name="Female" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PatientDemographicsChart;
