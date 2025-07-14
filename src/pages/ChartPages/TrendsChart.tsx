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

  // Mock data for yearly summary
  const yearlyData = [
    { year: 2022, benefit: "$64.33 654.42", claims: "9631", members: "6826" },
    {
      year: 2023,
      benefit: "$103.40 166.73",
      claims: "87539",
      members: "62417",
    },
    {
      year: "Total",
      benefit: "$17.24 10 195.99",
      claims: "707016",
      members: "368121",
    },
  ];

  // Mock data for monthly bar chart
  const monthlyData = [
    { month: "January", year2022: 8, year2023: 12, year2024: 15 },
    { month: "February", year2022: 10, year2023: 14, year2024: 18 },
    { month: "March", year2022: 12, year2023: 16, year2024: 20 },
    { month: "April", year2022: 14, year2023: 18, year2024: 22 },
    { month: "May", year2022: 16, year2023: 20, year2024: 24 },
    { month: "June", year2022: 18, year2023: 22, year2024: 26 },
    { month: "July", year2022: 20, year2023: 24, year2024: 28 },
    { month: "August", year2022: 22, year2023: 26, year2024: 30 },
    { month: "September", year2022: 24, year2023: 28, year2024: 32 },
    { month: "October", year2022: 26, year2023: 30, year2024: 34 },
    { month: "November", year2022: 28, year2023: 32, year2024: 36 },
    { month: "December", year2022: 30, year2023: 34, year2024: 38 },
  ];

  // Mock data for trend lines
  const trendData = [
    { quarter: "Qtr 2 2022", ndc1: 15, ndc2: 12, ndc3: 8 },
    { quarter: "Qtr 3 2022", ndc1: 18, ndc2: 14, ndc3: 10 },
    { quarter: "Qtr 4 2022", ndc1: 22, ndc2: 16, ndc3: 12 },
    { quarter: "Qtr 1 2023", ndc1: 25, ndc2: 18, ndc3: 14 },
    { quarter: "Qtr 2 2023", ndc1: 28, ndc2: 20, ndc3: 16 },
    { quarter: "Qtr 3 2023", ndc1: 30, ndc2: 22, ndc3: 18 },
    { quarter: "Qtr 4 2023", ndc1: 32, ndc2: 24, ndc3: 20 },
    { quarter: "Qtr 1 2024", ndc1: 28, ndc2: 20, ndc3: 16 },
    { quarter: "Qtr 2 2024", ndc1: 25, ndc2: 18, ndc3: 14 },
  ];

  // Mock data for horizontal bar chart (left side)
  const horizontalData = [
    { category: "00610013560", value: 120, color: "#4A90E2" },
    { category: "00610043560", value: 80, color: "#F5A623" },
    { category: "00610011560", value: 40, color: "#5BA7F7" },
  ];

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

  return (
    <div className="p-6 space-y-6">
      <FilterSection />

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
                  {yearlyData.map((row, index) => (
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
              <CardTitle className="text-sm">NDC Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {horizontalData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.category}</span>
                      <span>{item.value}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="h-4 rounded-full"
                        style={{
                          width: `${(item.value / Math.max(...horizontalData.map((d) => d.value))) * 100}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Center - Monthly Bar Chart */}
        <div className="col-span-6">
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
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Categories */}
        <div className="col-span-3 space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong>NDC</strong>
            </div>
            <div>
              <strong>Specialty</strong>
            </div>
            <div>
              <strong>Member Type</strong>
            </div>
            <div>
              <strong>Payer Type</strong>
            </div>
            <div>
              <strong>Day Supply</strong>
            </div>
            <div>
              <strong>Quantity</strong>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>00610013560</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>00610043560</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-500 rounded"></div>
              <span>00610011560</span>
            </div>
          </div>
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
                <Line
                  type="monotone"
                  dataKey="ndc1"
                  stroke="#4A90E2"
                  strokeWidth={2}
                  name="00610013560"
                />
                <Line
                  type="monotone"
                  dataKey="ndc2"
                  stroke="#F5A623"
                  strokeWidth={2}
                  name="00610043560"
                />
                <Line
                  type="monotone"
                  dataKey="ndc3"
                  stroke="#6B7280"
                  strokeWidth={2}
                  name="00610011560"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrendsChart;
