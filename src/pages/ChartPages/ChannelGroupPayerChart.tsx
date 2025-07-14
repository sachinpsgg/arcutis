import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    LineChart,
    Line,
    AreaChart,
    Area,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from "recharts";
import DateRangeFilter from "@/components/DateRangeFilter.tsx";

const ChannelGroupPayerChart = () => {
    const [selectedCoverage, setSelectedCoverage] = useState(["covered"]);
    const [selectedRejectCodes, setSelectedRejectCodes] = useState([]);
    const [selectedPayers, setSelectedPayers] = useState([]);

    // Mock data for Payer Type tab
    const payerTypeData = [
        { month: "Jan", benefit: 15, newMembers: 5, avgBenefit: 450 },
        { month: "Feb", benefit: 25, newMembers: 8, avgBenefit: 420 },
        { month: "Mar", benefit: 35, newMembers: 12, avgBenefit: 480 },
        { month: "Apr", benefit: 30, newMembers: 10, avgBenefit: 500 },
        { month: "May", benefit: 40, newMembers: 15, avgBenefit: 520 },
        { month: "Jun", benefit: 45, newMembers: 18, avgBenefit: 510 },
        { month: "Jul", benefit: 38, newMembers: 14, avgBenefit: 490 },
        { month: "Aug", benefit: 42, newMembers: 16, avgBenefit: 470 },
        { month: "Sep", benefit: 48, newMembers: 20, avgBenefit: 460 },
        { month: "Oct", benefit: 50, newMembers: 22, avgBenefit: 440 },
        { month: "Nov", benefit: 46, newMembers: 19, avgBenefit: 450 },
        { month: "Dec", benefit: 52, newMembers: 24, avgBenefit: 430 },
    ];

    const totalSpendData = [
        { payer: "AETNA", covered: 40, notCovered: 10 },
        { payer: "ANTHEM", covered: 35, notCovered: 8 },
        { payer: "CIGNA", covered: 30, notCovered: 12 },
        { payer: "HUMANA", covered: 25, notCovered: 15 },
        { payer: "UNITEDHEALTH", covered: 45, notCovered: 5 },
        { payer: "BCBS", covered: 38, notCovered: 7 },
        { payer: "KAISER", covered: 28, notCovered: 9 },
        { payer: "MEDICAID", covered: 50, notCovered: 3 },
        { payer: "MEDICARE", covered: 42, notCovered: 6 },
        { payer: "MOLINA", covered: 22, notCovered: 18 },
    ];

    // Mock data for Coverage tab
    const coverageAreaData = [
        { month: "Jan", covered: 15, notCovered: 5 },
        { month: "Feb", covered: 18, notCovered: 7 },
        { month: "Mar", covered: 22, notCovered: 8 },
        { month: "Apr", covered: 25, notCovered: 6 },
        { month: "May", covered: 28, notCovered: 9 },
        { month: "Jun", covered: 32, notCovered: 8 },
        { month: "Jul", covered: 35, notCovered: 7 },
        { month: "Aug", covered: 38, notCovered: 6 },
        { month: "Sep", covered: 40, notCovered: 8 },
        { month: "Oct", covered: 42, notCovered: 5 },
        { month: "Nov", covered: 45, notCovered: 4 },
        { month: "Dec", covered: 48, notCovered: 3 },
    ];

    // Mock data for Group tab
    const groupAreaData = [
        { month: "Jan", employeeOffer: 12, customNetwork: 8, openWeb: 5 },
        { month: "Feb", employeeOffer: 15, customNetwork: 10, openWeb: 6 },
        { month: "Mar", employeeOffer: 18, customNetwork: 12, openWeb: 8 },
        { month: "Apr", employeeOffer: 20, customNetwork: 14, openWeb: 9 },
        { month: "May", employeeOffer: 22, customNetwork: 16, openWeb: 10 },
        { month: "Jun", employeeOffer: 25, customNetwork: 18, openWeb: 12 },
        { month: "Jul", employeeOffer: 28, customNetwork: 20, openWeb: 14 },
        { month: "Aug", employeeOffer: 30, customNetwork: 22, openWeb: 15 },
        { month: "Sep", employeeOffer: 32, customNetwork: 24, openWeb: 16 },
        { month: "Oct", employeeOffer: 35, customNetwork: 26, openWeb: 18 },
        { month: "Nov", employeeOffer: 38, customNetwork: 28, openWeb: 20 },
        { month: "Dec", employeeOffer: 40, customNetwork: 30, openWeb: 22 },
    ];

    const groupLineData = [
        { month: "Jan", employeeOffer: 200, customNetwork: 180, openWeb: 150 },
        { month: "Feb", employeeOffer: 210, customNetwork: 190, openWeb: 160 },
        { month: "Mar", employeeOffer: 220, customNetwork: 200, openWeb: 170 },
        { month: "Apr", employeeOffer: 230, customNetwork: 210, openWeb: 180 },
        { month: "May", employeeOffer: 240, customNetwork: 220, openWeb: 190 },
        { month: "Jun", employeeOffer: 250, customNetwork: 230, openWeb: 200 },
        { month: "Jul", employeeOffer: 260, customNetwork: 240, openWeb: 210 },
        { month: "Aug", employeeOffer: 240, customNetwork: 220, openWeb: 190 },
        { month: "Sep", employeeOffer: 230, customNetwork: 210, openWeb: 180 },
        { month: "Oct", employeeOffer: 220, customNetwork: 200, openWeb: 170 },
        { month: "Nov", employeeOffer: 210, customNetwork: 190, openWeb: 160 },
        { month: "Dec", employeeOffer: 200, customNetwork: 180, openWeb: 150 },
    ];

    const FilterSection = ({
                               title,
                               options,
                               selected,
                               onChange,
                               type = "coverage",
                           }) => (
        <div className="space-y-3">

            <h3 className="font-medium text-sm">{title}</h3>

            <div className="space-y-2">
                {options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                        <Checkbox
                            id={option.value}
                            checked={selected.includes(option.value)}
                            onCheckedChange={(checked) => {
                                if (checked) {
                                    onChange([...selected, option.value]);
                                } else {
                                    onChange(selected.filter((item) => item !== option.value));
                                }
                            }}
                        />
                        <Label
                            htmlFor={option.value}
                            className="text-sm font-normal cursor-pointer"
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );

    const coverageOptions = [
        { value: "covered", label: "Covered" },
        { value: "notCovered", label: "Not Covered" },
    ];

    const rejectCodeOptions = [
        { value: "70", label: "70 - Product Exclusion" },
        { value: "75", label: "75 - Prior Auth Required" },
        { value: "78", label: "78 - Cost Exceeds Maximum" },
        { value: "MR", label: "MR - Product not on Formulary" },
    ];

    const payerOptions = [
        { value: "anthem", label: "ANTHEM" },
        { value: "careemark", label: "CAREMARK" },
        { value: "express", label: "EXPRESS SCRIPTS" },
        { value: "federal", label: "FEDERAL EMPLOYEE PROGRAM" },
        { value: "florida", label: "FLORIDA BLUE" },
        { value: "medimpact", label: "MEDIMPACT" },
        { value: "navitus", label: "NAVITUS" },
        { value: "optum", label: "OPTUMRX" },
        { value: "prime", label: "PRIME THERAPEUTICS" },
    ];

    return (
        <div className="w-full p-6">
            <DateRangeFilter/>
            <Tabs defaultValue="payer-type" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="payer-type">Payer Type</TabsTrigger>
                    <TabsTrigger value="coverage">Coverage</TabsTrigger>
                    <TabsTrigger value="group">Group</TabsTrigger>
                </TabsList>

                <TabsContent value="payer-type" className="mt-6">
                    <div className="flex gap-6">
                        {/* Sidebar */}
                        <div className="w-64 space-y-6">
                            <FilterSection
                                title="Coverage"
                                options={coverageOptions}
                                selected={selectedCoverage}
                                onChange={setSelectedCoverage}
                            />
                            <FilterSection
                                title="NewRejectCode"
                                options={rejectCodeOptions}
                                selected={selectedRejectCodes}
                                onChange={setSelectedRejectCodes}
                            />
                            <FilterSection
                                title="Payer Name"
                                options={payerOptions}
                                selected={selectedPayers}
                                onChange={setSelectedPayers}
                            />
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 space-y-6">
                            {/* Total Spend Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Total Spend by Payer Name</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <BarChart data={totalSpendData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis
                                                    dataKey="payer"
                                                    angle={-45}
                                                    textAnchor="end"
                                                    height={100}
                                                    fontSize={12}
                                                />
                                                <YAxis />
                                                <Tooltip />
                                                <Bar dataKey="covered" stackId="a" fill="#4A90E2" />
                                                <Bar dataKey="notCovered" stackId="a" fill="#F5A623" />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Bottom Charts Row */}
                            <div className="grid grid-cols-3 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Benefit by Payer Type
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="benefit" fill="#4A90E2" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            New Members by Payer Type
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="newMembers" fill="#5BA7F7" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Avg. Benefit by Payer Type
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="avgBenefit"
                                                        stroke="#F5A623"
                                                        strokeWidth={2}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="coverage" className="mt-6">
                    <div className="flex gap-6">
                        {/* Sidebar */}
                        <div className="w-64 space-y-6">
                            <FilterSection
                                title="Coverage"
                                options={coverageOptions}
                                selected={selectedCoverage}
                                onChange={setSelectedCoverage}
                            />
                            <FilterSection
                                title="NewRejectCode"
                                options={rejectCodeOptions}
                                selected={selectedRejectCodes}
                                onChange={setSelectedRejectCodes}
                            />
                            <FilterSection
                                title="Payer Name"
                                options={payerOptions}
                                selected={selectedPayers}
                                onChange={setSelectedPayers}
                            />
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 space-y-6">
                            {/* Claims by Coverage Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Claims by Coverage</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={coverageAreaData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Area
                                                    type="monotone"
                                                    dataKey="covered"
                                                    stackId="1"
                                                    stroke="#4A90E2"
                                                    fill="#4A90E2"
                                                    fillOpacity={0.6}
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="notCovered"
                                                    stackId="1"
                                                    stroke="#F5A623"
                                                    fill="#F5A623"
                                                    fillOpacity={0.6}
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Bottom Charts Row */}
                            <div className="grid grid-cols-3 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Benefit by Coverage
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="benefit" fill="#4A90E2" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            New Members by Coverage
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="newMembers" fill="#F5A623" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Avg. Benefit by Coverage
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="avgBenefit"
                                                        stroke="#4A90E2"
                                                        strokeWidth={2}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="group" className="mt-6">
                    <div className="flex gap-6">
                        {/* Sidebar */}
                        <div className="w-64 space-y-6">
                            <FilterSection
                                title="Coverage"
                                options={coverageOptions}
                                selected={selectedCoverage}
                                onChange={setSelectedCoverage}
                            />
                            <FilterSection
                                title="NewRejectCode"
                                options={rejectCodeOptions}
                                selected={selectedRejectCodes}
                                onChange={setSelectedRejectCodes}
                            />
                            <FilterSection
                                title="Payer Name"
                                options={payerOptions}
                                selected={selectedPayers}
                                onChange={setSelectedPayers}
                            />
                        </div>

                        {/* Main Content */}
                        <div className="flex-1 space-y-6">
                            {/* Claims by Group Chart */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Claims by Group</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <AreaChart data={groupAreaData}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="month" />
                                                <YAxis />
                                                <Tooltip />
                                                <Legend />
                                                <Area
                                                    type="monotone"
                                                    dataKey="employeeOffer"
                                                    stackId="1"
                                                    stroke="#4A90E2"
                                                    fill="#4A90E2"
                                                    fillOpacity={0.6}
                                                    name="10005 - Employee Offer"
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="customNetwork"
                                                    stackId="1"
                                                    stroke="#F5A623"
                                                    fill="#F5A623"
                                                    fillOpacity={0.6}
                                                    name="Custom Network"
                                                />
                                                <Area
                                                    type="monotone"
                                                    dataKey="openWeb"
                                                    stackId="1"
                                                    stroke="#5BA7F7"
                                                    fill="#5BA7F7"
                                                    fillOpacity={0.6}
                                                    name="Open Web"
                                                />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Bottom Charts Row */}
                            <div className="grid grid-cols-3 gap-6">
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">Benefit by Group</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="benefit" fill="#4A90E2" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            New Members by Group
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <BarChart data={payerTypeData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Bar dataKey="newMembers" fill="#F5A623" />
                                                </BarChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-lg">
                                            Avg. Benefit by Group
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-64">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={groupLineData}>
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="month" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="employeeOffer"
                                                        stroke="#4A90E2"
                                                        strokeWidth={2}
                                                        name="10005 - Employee Offer"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="customNetwork"
                                                        stroke="#F5A623"
                                                        strokeWidth={2}
                                                        name="Custom Network"
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="openWeb"
                                                        stroke="#5BA7F7"
                                                        strokeWidth={2}
                                                        name="Open Web"
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default ChannelGroupPayerChart;
