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

const ClaimDistributionChart = () => {
    const [quantity, setQuantity] = useState("All");
    const [daySupply, setDaySupply] = useState("All");
    const [payerType, setPayerType] = useState("All");
    const [activeTab, setActiveTab] = useState("oop");
    const [viewMode, setViewMode] = useState("count"); // count or percentage
    const [dateMode, setDateMode] = useState("date-processed"); // date-processed or date-of-fill

    // Mock data for OOP distribution table
    const oopData = [
        {
            range: "0",
            totalClaims: 187142,
            janClaims: 34443,
            janPercent: "58.55%",
            febClaims: 45873,
            febPercent: "32.41%",
            marClaims: 49702,
            marPercent: "61.89%",
            aprClaims: 50846,
            aprPercent: "59.44%",
            mayClaims: 49430,
            mayPercent: "35.19%",
            junClaims: 23169,
            junPercent: "24.14%",
            sepClaims: 2222,
            sepPercent: "25.53%",
        },
        {
            range: "$30.1-$35",
            totalClaims: 38516,
            janClaims: 3128,
            janPercent: "5.32%",
            febClaims: 4279,
            febPercent: "5.59%",
            marClaims: 3758,
            marPercent: "27.13%",
            aprClaims: 4485,
            aprPercent: "24.61%",
            mayClaims: 2075,
            mayPercent: "5.50%",
            junClaims: 1929,
            junPercent: "2.72%",
            sepClaims: 183,
            sepPercent: "4.45%",
        },
        {
            range: "$20.1-$25",
            totalClaims: 30572,
            janClaims: 2657,
            janPercent: "4.52%",
            febClaims: 3204,
            febPercent: "4.18%",
            marClaims: 2542,
            marPercent: "4.09%",
            aprClaims: 2514,
            aprPercent: "3.32%",
            mayClaims: 3203,
            mayPercent: "3.30%",
            junClaims: 2435,
            junPercent: "3.14%",
            sepClaims: 215,
            sepPercent: "5.46%",
        },
        {
            range: "$40.1-$50",
            totalClaims: 29758,
            janClaims: 1762,
            janPercent: "3.00%",
            febClaims: 980,
            febPercent: "0.74%",
            marClaims: 1333,
            marPercent: "1.31%",
            aprClaims: 1733,
            aprPercent: "1.70%",
            mayClaims: 3946,
            mayPercent: "2.19%",
            junClaims: 3444,
            junPercent: "5.14%",
            sepClaims: 308,
            sepPercent: "7.80%",
        },
        {
            range: "$50.01-$60",
            totalClaims: 299,
            janClaims: 6,
            janPercent: "0.01%",
            febClaims: 0,
            febPercent: "0.00%",
            marClaims: 0,
            marPercent: "0.00%",
            aprClaims: 0,
            aprPercent: "0.00%",
            mayClaims: 1,
            mayPercent: "0.00%",
            junClaims: 3,
            junPercent: "0.01%",
            sepClaims: 1,
            sepPercent: "0.00%",
        },
        {
            range: "$15.01-$20",
            totalClaims: 228,
            janClaims: 0,
            janPercent: "0.00%",
            febClaims: 4,
            febPercent: "0.01%",
            marClaims: 6,
            marPercent: "0.01%",
            aprClaims: 6,
            aprPercent: "0.01%",
            mayClaims: 9,
            mayPercent: "0.01%",
            junClaims: 19,
            junPercent: "0.02%",
            sepClaims: 1,
            sepPercent: "0.01%",
        },
        {
            range: "$35.01-$40",
            totalClaims: 188,
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
            range: "$80.01-$100",
            totalClaims: 154,
            janClaims: 11,
            janPercent: "0.02%",
            febClaims: 16,
            febPercent: "0.02%",
            marClaims: 16,
            marPercent: "0.02%",
            aprClaims: 17,
            aprPercent: "0.02%",
            mayClaims: 14,
            mayPercent: "0.01%",
            junClaims: 25,
            junPercent: "0.04%",
            sepClaims: 1,
            sepPercent: "0.04%",
        },
        {
            range: "$10.1-$15",
            totalClaims: 136,
            janClaims: 13,
            janPercent: "0.02%",
            febClaims: 5,
            febPercent: "0.01%",
            marClaims: 5,
            marPercent: "0.01%",
            aprClaims: 7,
            aprPercent: "0.01%",
            mayClaims: 5,
            mayPercent: "0.01%",
            junClaims: 8,
            junPercent: "0.01%",
            sepClaims: 1,
            sepPercent: "0.01%",
        },
        {
            range: "$5.01-$10",
            totalClaims: 72,
            janClaims: 5,
            janPercent: "0.01%",
            febClaims: 0,
            febPercent: "0.00%",
            marClaims: 1,
            marPercent: "0.00%",
            aprClaims: 3,
            aprPercent: "0.00%",
            mayClaims: 4,
            mayPercent: "0.00%",
            junClaims: 10,
            junPercent: "0.01%",
            sepClaims: 1,
            sepPercent: "0.01%",
        },
        {
            range: "$100.01-$150",
            totalClaims: 34,
            janClaims: 0,
            janPercent: "0.00%",
            febClaims: 1,
            febPercent: "0.00%",
            marClaims: 3,
            marPercent: "0.00%",
            aprClaims: 2,
            aprPercent: "0.00%",
            mayClaims: 2,
            mayPercent: "0.00%",
            junClaims: 5,
            junPercent: "0.01%",
            sepClaims: 1,
            sepPercent: "0.00%",
        },
        {
            range: "$0.01-$5",
            totalClaims: 33,
            janClaims: 3,
            janPercent: "0.01%",
            febClaims: 0,
            febPercent: "0.00%",
            marClaims: 0,
            marPercent: "0.00%",
            aprClaims: 2,
            aprPercent: "0.00%",
            mayClaims: 1,
            mayPercent: "0.00%",
            junClaims: 4,
            junPercent: "0.01%",
            sepClaims: 1,
            sepPercent: "0.00%",
        },
    ];

    const totalsData = {
        range: "Total",
        totalClaims: 708507,
        janClaims: 58853,
        janPercent: "100.00%",
        febClaims: 64896,
        febPercent: "100.00%",
        marClaims: 74346,
        marPercent: "100.00%",
        aprClaims: 78353,
        aprPercent: "100.00%",
        mayClaims: 78768,
        mayPercent: "100.00%",
        junClaims: 76324,
        junPercent: "100.00%",
        sepClaims: 39623,
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
                        {tabKey.toUpperCase()}
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
                                {oopData.map((row, index) => (
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

export default ClaimDistributionChart;
