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

const ClaimDistributionOfFillChart = () => {
  const [quantity, setQuantity] = useState("All");
  const [daySupply, setDaySupply] = useState("All");
  const [payerType, setPayerType] = useState("All");
  const [activeTab, setActiveTab] = useState("oop");
  const [viewMode, setViewMode] = useState("count"); // count or percentage
  const [dateMode, setDateMode] = useState("date-processed"); // date-processed or date-of-fill

  // Mock data for distribution table (different from regular claim distribution)
  const distributionData = [
    {
      range: "0",
      totalClaims: 198250,
      janClaims: 36450,
      janPercent: "61.20%",
      febClaims: 47890,
      febPercent: "34.80%",
      marClaims: 51200,
      marPercent: "63.15%",
      aprClaims: 52850,
      aprPercent: "61.44%",
      mayClaims: 51430,
      mayPercent: "37.19%",
      junClaims: 24170,
      junPercent: "26.14%",
      sepClaims: 2310,
      sepPercent: "27.53%",
    },
    {
      range: "$25.1-$30",
      totalClaims: 39800,
      janClaims: 3250,
      janPercent: "5.45%",
      febClaims: 4480,
      febPercent: "5.75%",
      marClaims: 3890,
      marPercent: "28.20%",
      aprClaims: 4680,
      aprPercent: "25.80%",
      mayClaims: 2180,
      mayPercent: "5.65%",
      junClaims: 2010,
      junPercent: "2.88%",
      sepClaims: 195,
      sepPercent: "4.68%",
    },
    {
      range: "$15.1-$20",
      totalClaims: 32180,
      janClaims: 2780,
      janPercent: "4.68%",
      febClaims: 3350,
      febPercent: "4.35%",
      marClaims: 2680,
      marPercent: "4.25%",
      aprClaims: 2640,
      aprPercent: "3.45%",
      mayClaims: 3350,
      mayPercent: "3.45%",
      junClaims: 2560,
      junPercent: "3.28%",
      sepClaims: 225,
      sepPercent: "5.68%",
    },
    {
      range: "$35.1-$45",
      totalClaims: 31250,
      janClaims: 1850,
      janPercent: "3.12%",
      febClaims: 1020,
      febPercent: "0.78%",
      marClaims: 1450,
      marPercent: "1.45%",
      aprClaims: 1820,
      aprPercent: "1.82%",
      mayClaims: 4120,
      mayPercent: "2.35%",
      junClaims: 3610,
      junPercent: "5.35%",
      sepClaims: 325,
      sepPercent: "8.12%",
    },
    {
      range: "$45.01-$55",
      totalClaims: 315,
      janClaims: 8,
      janPercent: "0.01%",
      febClaims: 0,
      febPercent: "0.00%",
      marClaims: 0,
      marPercent: "0.00%",
      aprClaims: 0,
      aprPercent: "0.00%",
      mayClaims: 1,
      mayPercent: "0.00%",
      junClaims: 4,
      junPercent: "0.01%",
      sepClaims: 1,
      sepPercent: "0.00%",
    },
    {
      range: "$10.01-$15",
      totalClaims: 240,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 5,
      febPercent: "0.01%",
      marClaims: 8,
      marPercent: "0.01%",
      aprClaims: 8,
      aprPercent: "0.01%",
      mayClaims: 12,
      mayPercent: "0.01%",
      junClaims: 22,
      junPercent: "0.02%",
      sepClaims: 1,
      sepPercent: "0.01%",
    },
    {
      range: "$30.01-$35",
      totalClaims: 198,
      janClaims: 0,
      janPercent: "0.00%",
      febClaims: 0,
      febPercent: "0.00%",
      marClaims: 0,
      marPercent: "0.00%",
      aprClaims: 0,
      aprPercent: "0.00%",
      mayClaims: 0,
      mayPercent: "0.00%",
      junClaims: 0,
      junPercent: "0.00%",
      sepClaims: 1,
      sepPercent: "0.00%",
    },
    {
      range: "$75.01-$90",
      totalClaims: 165,
      janClaims: 14,
      janPercent: "0.02%",
      febClaims: 18,
      febPercent: "0.02%",
      marClaims: 18,
      marPercent: "0.02%",
      aprClaims: 19,
      aprPercent: "0.02%",
      mayClaims: 16,
      mayPercent: "0.01%",
      junClaims: 28,
      junPercent: "0.04%",
      sepClaims: 1,
      sepPercent: "0.04%",
    },
    {
      range: "$8.1-$10",
      totalClaims: 145,
      janClaims: 16,
      janPercent: "0.03%",
      febClaims: 6,
      febPercent: "0.01%",
      marClaims: 6,
      marPercent: "0.01%",
      aprClaims: 9,
      aprPercent: "0.01%",
      mayClaims: 6,
      mayPercent: "0.01%",
      junClaims: 10,
      junPercent: "0.01%",
      sepClaims: 1,
      sepPercent: "0.01%",
    },
    {
      range: "$4.01-$8",
      totalClaims: 78,
      janClaims: 6,
      janPercent: "0.01%",
      febClaims: 0,
      febPercent: "0.00%",
      marClaims: 1,
      marPercent: "0.00%",
      aprClaims: 4,
      aprPercent: "0.00%",
      mayClaims: 5,
      mayPercent: "0.00%",
      junClaims: 12,
      junPercent: "0.01%",
      sepClaims: 1,
      sepPercent: "0.01%",
    },
  ];

  const totalsData = {
    range: "Total",
    totalClaims: 718250,
    janClaims: 59850,
    janPercent: "100.00%",
    febClaims: 66200,
    febPercent: "100.00%",
    marClaims: 75850,
    marPercent: "100.00%",
    aprClaims: 79850,
    aprPercent: "100.00%",
    mayClaims: 80250,
    mayPercent: "100.00%",
    junClaims: 77850,
    junPercent: "100.00%",
    sepClaims: 40450,
    sepPercent: "100.00%",
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

  const TabContent = ({ tabKey }) => (
    <div className="space-y-6">
      {/* Sub-tabs for Count/Percentage and Date options */}
      <div className="flex justify-between items-center">
        {/* Count/Percentage Toggle */}
        <div className="flex gap-4">
          <button
            onClick={() => setViewMode("count")}
            className={`px-4 py-2 text-sm rounded ${
              viewMode === "count"
                ? "bg-gray-200 text-gray-800 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Count
          </button>
          <button
            onClick={() => setViewMode("percentage")}
            className={`px-4 py-2 text-sm rounded ${
              viewMode === "percentage"
                ? "bg-gray-200 text-gray-800 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Percentage
          </button>
        </div>

        {/* Date Processed/Date of Fill Toggle */}
        <div className="flex gap-4">
          <button
            onClick={() => setDateMode("date-processed")}
            className={`px-4 py-2 text-sm rounded ${
              dateMode === "date-processed"
                ? "bg-gray-200 text-gray-800 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Date Processed
          </button>
          <button
            onClick={() => setDateMode("date-of-fill")}
            className={`px-4 py-2 text-sm rounded ${
              dateMode === "date-of-fill"
                ? "bg-gray-200 text-gray-800 font-medium"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Date of Fill
          </button>
        </div>
      </div>

      {/* Main Data Table */}
      <Card>
        <CardHeader>
          <CardTitle>
            {viewMode === "count" ? "Count" : "Percent"} of Claims by Range of{" "}
            {tabKey.toUpperCase()} (Date of Fill)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-32">
                    Range_{tabKey.toUpperCase()}
                  </TableHead>
                  <TableHead>Total Claims in Range</TableHead>
                  <TableHead>
                    Jan Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                  <TableHead>
                    Feb Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                  <TableHead>
                    Mar Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                  <TableHead>
                    Apr Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                  <TableHead>
                    May Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                  <TableHead>
                    Jun Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                  <TableHead>
                    Sep Claims{" "}
                    {dateMode === "date-processed"
                      ? "Date of Fill"
                      : "Date Processed"}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {distributionData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{row.range}</TableCell>
                    <TableCell>{row.totalClaims.toLocaleString()}</TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.janClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.janPercent)}`}
                        >
                          {row.janPercent}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.febClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.febPercent)}`}
                        >
                          {row.febPercent}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.marClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.marPercent)}`}
                        >
                          {row.marPercent}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.aprClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.aprPercent)}`}
                        >
                          {row.aprPercent}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.mayClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.mayPercent)}`}
                        >
                          {row.mayPercent}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.junClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.junPercent)}`}
                        >
                          {row.junPercent}
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      {viewMode === "count" ? (
                        <div>{row.sepClaims.toLocaleString()}</div>
                      ) : (
                        <div
                          className={`px-2 py-1 rounded text-xs ${getPercentageColor(row.sepPercent)}`}
                        >
                          {row.sepPercent}
                        </div>
                      )}
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
                    {viewMode === "count" ? (
                      <div>{totalsData.janClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.janPercent}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewMode === "count" ? (
                      <div>{totalsData.febClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.febPercent}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewMode === "count" ? (
                      <div>{totalsData.marClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.marPercent}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewMode === "count" ? (
                      <div>{totalsData.aprClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.aprPercent}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewMode === "count" ? (
                      <div>{totalsData.mayClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.mayPercent}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewMode === "count" ? (
                      <div>{totalsData.junClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.junPercent}
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {viewMode === "count" ? (
                      <div>{totalsData.sepClaims.toLocaleString()}</div>
                    ) : (
                      <div className="px-2 py-1 rounded text-xs bg-gray-200">
                        {totalsData.sepPercent}
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      <FilterSection />

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger
            value="copay"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Copay
          </TabsTrigger>
          <TabsTrigger
            value="benefit"
            className="data-[state=active]:bg-white data-[state=active]:text-black"
          >
            Benefit
          </TabsTrigger>
          <TabsTrigger
            value="oop"
            className="data-[state=active]:bg-gray-300 data-[state=active]:text-black bg-gray-300"
          >
            OOP
          </TabsTrigger>
        </TabsList>

        <TabsContent value="copay" className="mt-6">
          <TabContent tabKey="copay" />
        </TabsContent>

        <TabsContent value="benefit" className="mt-6">
          <TabContent tabKey="benefit" />
        </TabsContent>

        <TabsContent value="oop" className="mt-6">
          <TabContent tabKey="oop" />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClaimDistributionOfFillChart;
