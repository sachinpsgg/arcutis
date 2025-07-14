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

const ClaimDistributionChart = () => {
  const [quantity, setQuantity] = useState("All");
  const [daySupply, setDaySupply] = useState("All");
  const [payerType, setPayerType] = useState("All");

  // Mock data for OOP distribution table
  const oopData = [
    {
      range: "$301-$35",
      totalClaims: 196750,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 32.41,
      febPercent: "32.41%",
      marClaims: 61.89,
      marPercent: "61.89%",
      aprClaims: 59.44,
      aprPercent: "59.44%",
      mayClaims: 35.19,
      mayPercent: "35.19%",
      junClaims: 24.14,
      junPercent: "24.14%",
      augClaims: 24.16,
      augPercent: "24.16%",
      sepClaims: 25.53,
      sepPercent: "25.53%",
      octClaims: 271,
      octPercent: "25.53%",
    },
    {
      range: "$20.1-$25",
      totalClaims: 32875,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 5.59,
      febPercent: "5.59%",
      marClaims: 27.13,
      marPercent: "27.13%",
      aprClaims: 24.61,
      aprPercent: "24.61%",
      mayClaims: 5.5,
      mayPercent: "5.50%",
      junClaims: 2.72,
      junPercent: "2.72%",
      augClaims: 4.73,
      augPercent: "4.73%",
      sepClaims: 4.45,
      sepPercent: "4.45%",
      octClaims: 6.5,
      octPercent: "4.45%",
    },
    {
      range: "$60.1-$80",
      totalClaims: 30573,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 4.38,
      febPercent: "4.38%",
      marClaims: 4.09,
      marPercent: "4.09%",
      aprClaims: 3.32,
      aprPercent: "3.32%",
      mayClaims: 3.3,
      mayPercent: "3.30%",
      junClaims: 3.14,
      junPercent: "3.14%",
      augClaims: 6.13,
      augPercent: "6.13%",
      sepClaims: 5.46,
      sepPercent: "5.46%",
      octClaims: 5.4,
      octPercent: "5.46%",
    },
    {
      range: "$40.1-$50",
      totalClaims: 29735,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 0.74,
      febPercent: "0.74%",
      marClaims: 1.31,
      marPercent: "1.31%",
      aprClaims: 1.7,
      aprPercent: "1.70%",
      mayClaims: 2.19,
      mayPercent: "2.19%",
      junClaims: 5.14,
      junPercent: "5.14%",
      augClaims: 8.69,
      augPercent: "8.69%",
      sepClaims: 7.8,
      sepPercent: "7.80%",
      octClaims: 6.8,
      octPercent: "7.80%",
    },
    {
      range: "$50.01-$60",
      totalClaims: 299,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 0.0,
      febPercent: "0.00%",
      marClaims: 0.0,
      marPercent: "0.00%",
      aprClaims: 0.0,
      aprPercent: "0.00%",
      mayClaims: 0.0,
      mayPercent: "0.00%",
      junClaims: 0.0,
      junPercent: "0.00%",
      augClaims: 0.01,
      augPercent: "0.01%",
      sepClaims: 0.0,
      sepPercent: "0.00%",
      octClaims: 0.0,
      octPercent: "0.00%",
    },
    {
      range: "$15.01-$20",
      totalClaims: 238,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 0.0,
      febPercent: "0.00%",
      marClaims: 0.01,
      marPercent: "0.01%",
      aprClaims: 0.01,
      aprPercent: "0.01%",
      mayClaims: 0.01,
      mayPercent: "0.01%",
      junClaims: 0.01,
      junPercent: "0.01%",
      augClaims: 0.05,
      augPercent: "0.05%",
      sepClaims: 0.03,
      sepPercent: "0.03%",
      octClaims: 0.1,
      octPercent: "0.03%",
    },
    {
      range: "$35.01-$40",
      totalClaims: 168,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 0.0,
      febPercent: "0.00%",
      marClaims: 0.0,
      marPercent: "0.00%",
      aprClaims: 0.0,
      aprPercent: "0.00%",
      mayClaims: 0.0,
      mayPercent: "0.00%",
      junClaims: 0.0,
      junPercent: "0.00%",
      augClaims: 0.0,
      augPercent: "0.00%",
      sepClaims: 0.0,
      sepPercent: "0.00%",
      octClaims: 0.1,
      octPercent: "0.00%",
    },
    {
      range: "$80.01-$100",
      totalClaims: 184,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 0.02,
      febPercent: "0.02%",
      marClaims: 0.02,
      marPercent: "0.02%",
      aprClaims: 0.02,
      aprPercent: "0.02%",
      mayClaims: 0.02,
      mayPercent: "0.02%",
      junClaims: 0.0,
      junPercent: "0.00%",
      augClaims: 0.04,
      augPercent: "0.04%",
      sepClaims: 0.04,
      sepPercent: "0.04%",
      octClaims: 0.0,
      octPercent: "0.04%",
    },
  ];

  const totalsData = {
    range: "Total",
    totalClaims: 707014,
    janPercent: "100.00%",
    febPercent: "100.00%",
    marPercent: "100.00%",
    aprPercent: "100.00%",
    mayPercent: "100.00%",
    junPercent: "100.00%",
    augPercent: "100.00%",
    sepPercent: "100.00%",
    octPercent: "100.0%",
  };

  const FilterSection = () => (
    <div className="space-y-4 mb-6">
      {/* Information Text */}
      <div className="space-y-2 text-sm text-gray-600">
        <div>
          <strong>Copay:</strong> Patient responsibility after primary insurance
          pays and before card program pays. Exclude voucher programs.
        </div>
        <div>
          <strong>Benefit:</strong> Patient Benefit/Redemption Benefit: Amount
          paid by the program.
        </div>
        <div>
          <strong>Out-of-pocket:</strong> Patient responsibility after primary
          insurance pays and after the card offer is applied.
        </div>
      </div>

      {/* Filter Controls */}
      <div className="grid grid-cols-3 gap-4">
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

        <div>
          <label className="block text-sm font-medium mb-2">
            Days of Supply
          </label>
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
      </div>
    </div>
  );

  const getPercentageColor = (percentage) => {
    const num = parseFloat(percentage.replace("%", ""));
    if (num >= 50) return "bg-red-100 text-red-800";
    if (num >= 25) return "bg-yellow-100 text-yellow-800";
    if (num >= 10) return "bg-blue-100 text-blue-800";
    return "bg-gray-50";
  };

  return (
    <div className="p-6 space-y-6">
      <FilterSection />

      {/* Main Data Table */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Percent of Claims by Range of OOP</CardTitle>
            </div>
            <div className="flex gap-4">
              <div>
                <strong>Count</strong>
              </div>
              <div>
                <strong>Percentage</strong>
              </div>
              <div>
                <strong>Date Processed</strong>
              </div>
              <div>
                <strong>Date of Fill</strong>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">Range_OOP</TableHead>
                  <TableHead>Total Claims in Range</TableHead>
                  <TableHead>Jan Claims</TableHead>
                  <TableHead>Feb Claims</TableHead>
                  <TableHead>Mar Claims</TableHead>
                  <TableHead>Apr Claims</TableHead>
                  <TableHead>May Claims</TableHead>
                  <TableHead>Jun Claims</TableHead>
                  <TableHead>Aug Claims</TableHead>
                  <TableHead>Sep Claims</TableHead>
                  <TableHead>Oct Claims</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {oopData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.range}</TableCell>
                    <TableCell>{row.totalClaims.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.janClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.janPercent)}`}
                        >
                          {row.janPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.febClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.febPercent)}`}
                        >
                          {row.febPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.marClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.marPercent)}`}
                        >
                          {row.marPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.aprClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.aprPercent)}`}
                        >
                          {row.aprPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.mayClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.mayPercent)}`}
                        >
                          {row.mayPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.junClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.junPercent)}`}
                        >
                          {row.junPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.augClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.augPercent)}`}
                        >
                          {row.augPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.sepClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.sepPercent)}`}
                        >
                          {row.sepPercent}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div>{row.octClaims}</div>
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.octPercent)}`}
                        >
                          {row.octPercent}
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {/* Totals Row */}
                <TableRow className="bg-gray-50 font-bold">
                  <TableCell>Total</TableCell>
                  <TableCell>
                    {totalsData.totalClaims.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.janPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.febPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.marPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.aprPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.mayPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.junPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.augPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.sepPercent}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="px-2 py-1 rounded text-xs bg-gray-200">
                      {totalsData.octPercent}
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimDistributionChart;
