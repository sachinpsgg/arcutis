import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const ActivationCountChart = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  // Mock data for monthly chart
  const monthlyData = [
    {
      month: "Jan 2022",
      carepoint: 15,
      mobileEnrollment: 20,
      phil: 10,
      website: 25,
      zoryveGoodRx: 30,
    },
    {
      month: "Feb 2022",
      carepoint: 18,
      mobileEnrollment: 22,
      phil: 12,
      website: 28,
      zoryveGoodRx: 35,
    },
    {
      month: "Mar 2022",
      carepoint: 20,
      mobileEnrollment: 25,
      phil: 15,
      website: 30,
      zoryveGoodRx: 40,
    },
    {
      month: "Apr 2022",
      carepoint: 22,
      mobileEnrollment: 28,
      phil: 18,
      website: 32,
      zoryveGoodRx: 42,
    },
    {
      month: "May 2022",
      carepoint: 25,
      mobileEnrollment: 30,
      phil: 20,
      website: 35,
      zoryveGoodRx: 45,
    },
    {
      month: "Jun 2022",
      carepoint: 28,
      mobileEnrollment: 32,
      phil: 22,
      website: 38,
      zoryveGoodRx: 48,
    },
    {
      month: "Jul 2022",
      carepoint: 30,
      mobileEnrollment: 35,
      phil: 25,
      website: 40,
      zoryveGoodRx: 50,
    },
    {
      month: "Aug 2022",
      carepoint: 32,
      mobileEnrollment: 38,
      phil: 28,
      website: 42,
      zoryveGoodRx: 52,
    },
    {
      month: "Sep 2022",
      carepoint: 35,
      mobileEnrollment: 40,
      phil: 30,
      website: 45,
      zoryveGoodRx: 55,
    },
    {
      month: "Oct 2022",
      carepoint: 38,
      mobileEnrollment: 42,
      phil: 32,
      website: 48,
      zoryveGoodRx: 58,
    },
    {
      month: "Nov 2022",
      carepoint: 40,
      mobileEnrollment: 45,
      phil: 35,
      website: 50,
      zoryveGoodRx: 60,
    },
    {
      month: "Dec 2022",
      carepoint: 42,
      mobileEnrollment: 48,
      phil: 38,
      website: 52,
      zoryveGoodRx: 62,
    },
    {
      month: "Jan 2023",
      carepoint: 45,
      mobileEnrollment: 50,
      phil: 40,
      website: 55,
      zoryveGoodRx: 65,
    },
    {
      month: "Feb 2023",
      carepoint: 48,
      mobileEnrollment: 52,
      phil: 42,
      website: 58,
      zoryveGoodRx: 68,
    },
    {
      month: "Mar 2023",
      carepoint: 50,
      mobileEnrollment: 55,
      phil: 45,
      website: 60,
      zoryveGoodRx: 70,
    },
  ];

  // Mock data for weekly chart
  const weeklyData = [
    {
      week: "Week 1 Jan",
      carepoint: 8,
      mobileEnrollment: 10,
      phil: 5,
      website: 12,
      zoryveGoodRx: 15,
    },
    {
      week: "Week 2 Jan",
      carepoint: 10,
      mobileEnrollment: 12,
      phil: 6,
      website: 14,
      zoryveGoodRx: 18,
    },
    {
      week: "Week 3 Jan",
      carepoint: 12,
      mobileEnrollment: 14,
      phil: 8,
      website: 16,
      zoryveGoodRx: 20,
    },
    {
      week: "Week 4 Jan",
      carepoint: 14,
      mobileEnrollment: 16,
      phil: 10,
      website: 18,
      zoryveGoodRx: 22,
    },
    {
      week: "Week 1 Feb",
      carepoint: 16,
      mobileEnrollment: 18,
      phil: 12,
      website: 20,
      zoryveGoodRx: 25,
    },
    {
      week: "Week 2 Feb",
      carepoint: 18,
      mobileEnrollment: 20,
      phil: 14,
      website: 22,
      zoryveGoodRx: 28,
    },
    {
      week: "Week 3 Feb",
      carepoint: 20,
      mobileEnrollment: 22,
      phil: 16,
      website: 24,
      zoryveGoodRx: 30,
    },
    {
      week: "Week 4 Feb",
      carepoint: 22,
      mobileEnrollment: 24,
      phil: 18,
      website: 26,
      zoryveGoodRx: 32,
    },
    {
      week: "Week 1 Mar",
      carepoint: 24,
      mobileEnrollment: 26,
      phil: 20,
      website: 28,
      zoryveGoodRx: 35,
    },
    {
      week: "Week 2 Mar",
      carepoint: 26,
      mobileEnrollment: 28,
      phil: 22,
      website: 30,
      zoryveGoodRx: 38,
    },
    {
      week: "Week 3 Mar",
      carepoint: 28,
      mobileEnrollment: 30,
      phil: 24,
      website: 32,
      zoryveGoodRx: 40,
    },
    {
      week: "Week 4 Mar",
      carepoint: 30,
      mobileEnrollment: 32,
      phil: 26,
      website: 34,
      zoryveGoodRx: 42,
    },
  ];

  // Mock data for pie chart
  const pieData = [
    { name: "No", value: 38334, percentage: 85.86 },
    {
      name: "Yes but I have not started ZORYVE",
      value: 3686,
      percentage: 11.39,
    },
    {
      name: "Yes but I have not yet started ZORYVE treatment",
      value: 3686,
      percentage: 11.39,
    },
    {
      name: "Yes I have started ZORYVE treatment",
      value: 606,
      percentage: 1.76,
    },
  ];

  // Colors for pie chart
  const pieColors = ["#64748B", "#FCD34D", "#60A5FA", "#34D399"];

  // Mock data for brand table
  const brandData = {
    monthly: [
      {
        brand: "Zoryve Direct",
        patientEmail: 423737,
        activationsLast30Days: 156,
      },
      { brand: "Total", patientEmail: 423737, activationsLast30Days: 156 },
    ],
    weekly: [
      {
        brand: "Zoryve Direct",
        patientEmail: 423737,
        activationsLast7Days: 156,
      },
      { brand: "Total", patientEmail: 423737, activationsLast7Days: 156 },
    ],
  };

  // Mock data for group number table
  const groupData = [
    { groupNumber: "100034", carepoint: "", mobileEnrollment: 1045 },
    { groupNumber: "100035", carepoint: 18902, mobileEnrollment: "" },
    { groupNumber: "99992315", carepoint: 466, mobileEnrollment: 33032 },
    {
      groupNumber: "Total",
      carepoint: 466,
      mobileEnrollment: 51994,
      total: 2758,
    },
  ];

  // Mock data for channel table
  const channelData = [
    { channel: "Zoryve Direct Savings Card", count: "" },
    { channel: "Carepoint", count: 519 },
    { channel: "Mobile Enrollment", count: 57 },
    { channel: "Phil", count: 10 },
    { channel: "Website", count: 3609 },
    { channel: "Zoryve_GoodRx_WEB_Quick", count: "" },
    { channel: "Total", count: 4237 },
  ];

  const TabContent = ({ tabKey }) => (
    <div className="space-y-6">
      {/* Top Section - Brand Table and Bar Chart */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Side - Brand Data Table */}
        <div className="col-span-2">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Brand</TableHead>
                    <TableHead># of Patient_Email</TableHead>
                    <TableHead>
                      Activations Last {tabKey === "monthly" ? "30" : "7"} Days
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {brandData[tabKey].map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        row.brand === "Total" ? "font-bold bg-gray-50" : ""
                      }
                    >
                      <TableCell>{row.brand}</TableCell>
                      <TableCell>{row.patientEmail.toLocaleString()}</TableCell>
                      <TableCell>
                        {tabKey === "monthly"
                          ? row.activationsLast30Days
                          : row.activationsLast7Days}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Bar Chart */}
        <div className="col-span-10">
          <Card>
            <CardHeader>
              <CardTitle>Activations by Channel</CardTitle>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span>Carepoint</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span>Mobile Enrollment</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                  <span>Phil</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span>Website</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded"></div>
                  <span>Zoryve_GoodRx_WEB_Quick</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={tabKey === "monthly" ? monthlyData : weeklyData}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey={tabKey === "monthly" ? "month" : "week"}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                      fontSize={10}
                    />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="carepoint" stackId="a" fill="#4A90E2" />
                    <Bar
                      dataKey="mobileEnrollment"
                      stackId="a"
                      fill="#10B981"
                    />
                    <Bar dataKey="phil" stackId="a" fill="#F59E0B" />
                    <Bar dataKey="website" stackId="a" fill="#8B5CF6" />
                    <Bar dataKey="zoryveGoodRx" stackId="a" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Section - Group Table, Channel Table, and Pie Chart */}
      <div className="grid grid-cols-12 gap-6">
        {/* Group Number Table */}
        <div className="col-span-3">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Group_Number</TableHead>
                    <TableHead>Carepoint</TableHead>
                    <TableHead>Mobile Enrollment</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {groupData.map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        row.groupNumber === "Total"
                          ? "font-bold bg-gray-50"
                          : ""
                      }
                    >
                      <TableCell>{row.groupNumber}</TableCell>
                      <TableCell>{row.carepoint || "-"}</TableCell>
                      <TableCell>{row.mobileEnrollment || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Channel Table */}
        <div className="col-span-3">
          <Card>
            <CardContent className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Channel</TableHead>
                    <TableHead>Count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {channelData.map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        row.channel === "Total" ? "font-bold bg-gray-50" : ""
                      }
                    >
                      <TableCell>{row.channel}</TableCell>
                      <TableCell>{row.count || "-"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Pie Chart */}
        <div className="col-span-6">
          <Card>
            <CardHeader>
              <CardTitle>Do you have a prescription for Zoryve?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ percentage }) => `${percentage}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={pieColors[index % pieColors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [value.toLocaleString(), "Count"]}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      wrapperStyle={{ fontSize: "12px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
        </TabsList>

        <TabsContent value="monthly" className="mt-6">
          <TabContent tabKey="monthly" />
        </TabsContent>

        <TabsContent value="weekly" className="mt-6">
          <TabContent tabKey="weekly" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ActivationCountChart;
