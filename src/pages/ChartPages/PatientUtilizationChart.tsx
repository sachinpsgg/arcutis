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
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PatientUtilizationChart = () => {
  const [brand, setBrand] = useState("ZORYVE");

  // Mock data for the bar chart - "Percent of Members who have atleast 'n' claims per year"
  const utilizationData = [
    { claimsCount: ">=1", percent: 100, members: 2500 },
    { claimsCount: ">=2", percent: 24.37, members: 609 },
    { claimsCount: ">=3", percent: 9.89, members: 247 },
    { claimsCount: ">=4", percent: 3.94, members: 98 },
    { claimsCount: ">=5", percent: 1.67, members: 42 },
    { claimsCount: ">=6", percent: 1.08, members: 27 },
    { claimsCount: ">=7", percent: 0.83, members: 21 },
    { claimsCount: ">=8", percent: 0.32, members: 8 },
    { claimsCount: ">=9", percent: 0.12, members: 3 },
    { claimsCount: ">=10", percent: 0.04, members: 1 },
    { claimsCount: ">=11", percent: 0.04, members: 1 },
    { claimsCount: ">=12", percent: 0.04, members: 1 },
    { claimsCount: ">=13", percent: 0.0, members: 0 },
    { claimsCount: ">=14", percent: 0.0, members: 0 },
    { claimsCount: ">=15", percent: 0.0, members: 0 },
  ];

  // Mock data for utilization by brand and year table
  const utilizationTableData = [
    {
      year: 2022,
      brand: "ZORYVE",
      group: "10005b - Employee Offer",
      atleast1: { claims: 13, members: 5 },
      atleast2: { claims: 13, members: 6 },
      atleast3: { claims: 4, members: 1 },
      atleast4: { claims: 0, members: 0 },
    },
    {
      year: "",
      brand: "",
      group: "Open Web",
      atleast1: { claims: 2974, members: 2658 },
      atleast2: { claims: 2974, members: 317 },
      atleast3: { claims: 58, members: 8 },
      atleast4: { claims: 1, members: 0 },
    },
    {
      year: "",
      brand: "",
      group: "Custom Network",
      atleast1: { claims: 6644, members: 5677 },
      atleast2: { claims: 6644, members: 871 },
      atleast3: { claims: 245, members: 28 },
      atleast4: { claims: 3, members: 0 },
    },
    {
      year: 2023,
      brand: "ZORYVE",
      group: "10005b - Employee Offer",
      atleast1: { claims: 37, members: 9 },
      atleast2: { claims: 37, members: 32 },
      atleast3: { claims: 27, members: 23 },
      atleast4: { claims: 15, members: 0 },
    },
    {
      year: "",
      brand: "",
      group: "Open Web",
      atleast1: { claims: 14307, members: 13777 },
      atleast2: { claims: 6718, members: 6118 },
      atleast3: { claims: 3564, members: 1031 },
      atleast4: { claims: 509, members: 24 },
    },
    {
      year: "",
      brand: "",
      group: "Custom Network",
      atleast1: { claims: 65503, members: 46633 },
      atleast2: { claims: 65503, members: 16914 },
      atleast3: { claims: 7003, members: 2749 },
      atleast4: { claims: 1381, members: 7 },
    },
  ];

  const noteText = `
Please Note:
Some fields may not work on this page.

By Count
The By Count feature allows you to follow
up with a specific member. One group you
may want to track are the patients with
more than one claim on their last date. So change
the "count" start date and the chart below will
filter.

A member's subsequent visit are directly
related to the first day they came regardless of
group associated with the member such as the
program and values are the earliest possible
by brand and year.

The YTD features allow you to compare the
chart to another group (which is particular use if
you're comparing claim frequency levels). A member
will show as having 1 claim in each group. This
only tells the you values are on a yearly scale than
daily. The by brand for this feature would be
claim-per-user groups.
`;

  return (
    <div className="p-6 space-y-6">
      {/* Brand Filter */}
      <div className="w-48">
        <label className="block text-sm font-medium mb-2">Brand</label>
        <Select value={brand} onValueChange={setBrand}>
          <SelectTrigger>
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ZORYVE">ZORYVE</SelectItem>
            <SelectItem value="OTHER">OTHER</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Side - Note */}
        <div className="col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Please Note:</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-600 space-y-3">
                <div>
                  <strong>Some fields may not work on this page.</strong>
                </div>

                <div>
                  <strong>By Count</strong>
                  <br />
                  The By Count feature allows you to follow up with a specific
                  member. One group you may want to track are the patients with
                  more than one claim on their last date. So change the "count"
                  start date and the chart below will filter.
                </div>

                <div>
                  A member's subsequent visit are directly related to the first
                  day they came regardless of group associated with the member
                  such as the program and values are the earliest possible by
                  brand and year.
                </div>

                <div>
                  The YTD features allow you to compare the chart to another
                  group (which is particular use if you're comparing claim
                  frequency levels). A member will show as having 1 claim in
                  each group. This only tells the you values are on a yearly
                  scale than daily. The by brand for this feature would be
                  claim-per-user groups.
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side - Chart */}
        <div className="col-span-9">
          <Card>
            <CardHeader>
              <CardTitle>
                Percent of Members who have atleast 'n' claims per year
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={utilizationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="claimsCount" />
                    <YAxis
                      label={{
                        value: "Percent %",
                        angle: -90,
                        position: "insideLeft",
                      }}
                      domain={[0, 100]}
                    />
                    <Tooltip
                      formatter={(value, name) => [
                        name === "percent" ? `${value}%` : value,
                        name === "percent" ? "Percentage" : "Members",
                      ]}
                    />
                    <Bar dataKey="percent" fill="#4A90E2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Utilization Table */}
      <Card>
        <CardHeader>
          <CardTitle>Utilization by Brand and Year</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Year</TableHead>
                  <TableHead>Brand</TableHead>
                  <TableHead>Group</TableHead>
                  <TableHead>Atleast 1 claim Claims</TableHead>
                  <TableHead>Atleast 1 claim Members</TableHead>
                  <TableHead>Atleast 2 claims Claims</TableHead>
                  <TableHead>Atleast 2 claims Members</TableHead>
                  <TableHead>Atleast 3 claims Claims</TableHead>
                  <TableHead>Atleast 3 claims Members</TableHead>
                  <TableHead>Atleast 4 claims Claims</TableHead>
                  <TableHead>Atleast 4 claims Members</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {utilizationTableData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.year}</TableCell>
                    <TableCell>{row.brand}</TableCell>
                    <TableCell>{row.group}</TableCell>
                    <TableCell>{row.atleast1.claims}</TableCell>
                    <TableCell>{row.atleast1.members}</TableCell>
                    <TableCell>{row.atleast2.claims}</TableCell>
                    <TableCell>{row.atleast2.members}</TableCell>
                    <TableCell>{row.atleast3.claims}</TableCell>
                    <TableCell>{row.atleast3.members}</TableCell>
                    <TableCell>{row.atleast4.claims}</TableCell>
                    <TableCell>{row.atleast4.members}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientUtilizationChart;
