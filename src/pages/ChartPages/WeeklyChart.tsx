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
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const WeeklyChart = () => {
  const [channel, setChannel] = useState("All");
  const [ndc, setNdc] = useState("All");
  const [specialty, setSpecialty] = useState("All");
  const [payerType, setPayerType] = useState("All");
  const [daySupply, setDaySupply] = useState("All");
  const [quantity, setQuantity] = useState("All");

  // Mock data for the combined chart
  const weeklyData = [
    { week: "Nov 2022", claims: 12, avgBenefit: 150 },
    { week: "Dec 2022", claims: 15, avgBenefit: 160 },
    { week: "Jan 2023", claims: 18, avgBenefit: 155 },
    { week: "Feb 2023", claims: 22, avgBenefit: 165 },
    { week: "Mar 2023", claims: 25, avgBenefit: 170 },
    { week: "Apr 2023", claims: 28, avgBenefit: 175 },
    { week: "May 2023", claims: 32, avgBenefit: 168 },
    { week: "Jun 2023", claims: 35, avgBenefit: 172 },
    { week: "Jul 2023", claims: 38, avgBenefit: 165 },
    { week: "Aug 2023", claims: 42, avgBenefit: 160 },
    { week: "Sep 2023", claims: 45, avgBenefit: 158 },
    { week: "Oct 2023", claims: 48, avgBenefit: 155 },
  ];

  // Mock data for the table
  const tableData = [
    {
      brand: "Zoryve",
      date: "25-09-2022",
      claims: 299,
      members: 299,
      paidBenefit: "$1.89 838.57",
    },
    {
      brand: "Zoryve",
      date: "02-10-2022",
      claims: 399,
      members: 399,
      paidBenefit: "$2.61 624.75",
    },
    {
      brand: "Zoryve",
      date: "09-10-2022",
      claims: 412,
      members: 412,
      paidBenefit: "$2.75 314.09",
    },
    {
      brand: "Zoryve",
      date: "16-10-2022",
      claims: 501,
      members: 501,
      paidBenefit: "$3.24 291.16",
    },
    {
      brand: "Zoryve",
      date: "23-10-2022",
      claims: 560,
      members: 560,
      paidBenefit: "$3.76 386.95",
    },
    {
      brand: "Zoryve",
      date: "30-10-2022",
      claims: 591,
      members: 591,
      paidBenefit: "$4.09 596.11",
    },
    {
      brand: "Zoryve",
      date: "06-11-2022",
      claims: 617,
      members: 617,
      paidBenefit: "$4.25 906.81",
    },
    {
      brand: "Zoryve",
      date: "13-11-2022",
      claims: 691,
      members: 691,
      paidBenefit: "$4.71 754.14",
    },
    {
      brand: "Zoryve",
      date: "20-11-2022",
      claims: 488,
      members: 488,
      paidBenefit: "$3.37 558.01",
    },
    {
      brand: "Zoryve",
      date: "27-11-2022",
      claims: 754,
      members: 754,
      paidBenefit: "$5.42 105.59",
    },
    {
      brand: "Zoryve",
      date: "04-12-2022",
      claims: 991,
      members: 991,
      paidBenefit: "$5.96 953.96",
    },
    {
      brand: "Zoryve",
      date: "11-12-2022",
      claims: 927,
      members: 927,
      paidBenefit: "$6.10 507.04",
    },
    {
      brand: "Zoryve",
      date: "18-12-2022",
      claims: 899,
      members: 899,
      paidBenefit: "$6.07 482.14",
    },
    {
      brand: "Zoryve",
      date: "25-12-2022",
      claims: 0,
      members: 0,
      paidBenefit: "$4.51",
    },
  ];

  const FilterSection = () => (
    <div className="grid grid-cols-6 gap-4 mb-6">
      <div>
        <label className="block text-sm font-medium mb-2">Channel</label>
        <Select value={channel} onValueChange={setChannel}>
          <SelectTrigger>
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Retail">Retail</SelectItem>
            <SelectItem value="Specialty">Specialty</SelectItem>
          </SelectContent>
        </Select>
      </div>

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

  return (
    <div className="p-6 space-y-6">
      <FilterSection />

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>
            Weekly Trend Claims and Average Benefit Limited to 52 Weeks
          </CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Claims</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Avg. Benefit</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-96">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="claims" fill="#4A90E2" />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="avgBenefit"
                  stroke="#F5A623"
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Data Table Section */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Brand</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Claims</TableHead>
                <TableHead>Members</TableHead>
                <TableHead>Paid Benefit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.claims}</TableCell>
                  <TableCell>{row.members}</TableCell>
                  <TableCell>{row.paidBenefit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeeklyChart;
