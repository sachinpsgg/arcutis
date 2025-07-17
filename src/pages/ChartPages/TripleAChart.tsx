import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TripleAChart = () => {
    const [selectedPharmacyChain, setSelectedPharmacyChain] = useState("");
    const [selectedPreferredPharmacy, setSelectedPreferredPharmacy] =
        useState("");
    const [activeTab, setActiveTab] = useState("pharmacy-chain");

    // Top 10 Pharmacies Data
    const top10PharmaciesData = [
        {
            chain: "CAREPOINT PHARMACY",
            npi: "1598013964",
            totalSpend: "$2,67,31,082.4",
        },
        {
            chain: "APOTHECO PHARMACY",
            npi: "1083117286",
            totalSpend: "$32,33,055.73",
        },
        { chain: "CHOICE BAY AREA", npi: "", totalSpend: "" },
        {
            chain: "APOTHECO PHARMACY",
            npi: "1386078830",
            totalSpend: "$27,80,649.34",
        },
        { chain: "LINCOLN PARK", npi: "", totalSpend: "" },
        { chain: "COLONIAL DRUGS", npi: "1538145222", totalSpend: "$27,34,785.06" },
        {
            chain: "PRESTIGE PHARMACY",
            npi: "1908342580",
            totalSpend: "$25,59,375.35",
        },
    ];

    // Pharmacy Chain Data
    const pharmacyChainData = [
        {
            name: "ACCELERATE SPECIALTY NETWORK",
            covered: "100.00%",
            notCovered: "0.00%",
            benefit: "$183.47",
        },
        {
            name: "ACCREDO HEALTH",
            covered: "62.99%",
            notCovered: "37.01%",
            benefit: "$195.06",
        },
        {
            name: "ACCESSHEALTH PLUS",
            covered: "64.52%",
            notCovered: "35.48%",
            benefit: "$173.76",
        },
        {
            name: "ALBERTSONS INC.",
            covered: "58.90%",
            notCovered: "41.10%",
            benefit: "$373.76",
        },
        {
            name: "ALBERTSONS LLC",
            covered: "100.00%",
            notCovered: "0.00%",
            benefit: "$552.41",
        },
        {
            name: "ALBERTSONS LLC (CERBERUS)",
            covered: "100.00%",
            notCovered: "0.00%",
            benefit: "$443.54",
        },
        {
            name: "ALIONIX LLC",
            covered: "40.95%",
            notCovered: "59.05%",
            benefit: "$556.32",
        },
        {
            name: "ALIONIX LLC (426)",
            covered: "100.00%",
            notCovered: "0.00%",
            benefit: "$9.50",
        },
        {
            name: "Total",
            covered: "63.18%",
            notCovered: "36.82%",
            benefit: "$243.84",
        },
    ];

    // Pharmacy Activity Data for Chain Tab
    const pharmacyActivityData = [
        {
            name: "CAREPOINT PHARMACY",
            members: 42104,
            claims: 87786,
            firstCopayDate: "09-08-2022",
            lastCopayDate: "12-07-2025",
            avgCopay: "$259.67",
            avgBenefit: "$320.59",
            avgOOP: "$18.07",
            covered: 44537,
            notCovered: 43249,
            coveredPercent: "50.73%",
            notCoveredPercent: "49.27%",
            totalBenefit: "$2,81,43,653.67",
            percentage: "8",
        },
        {
            name: "APOTHECO PHARMACY CHOICE BAY AREA",
            members: 8474,
            claims: 18669,
            firstCopayDate: "09-01-2023",
            lastCopayDate: "11-07-2025",
            avgCopay: "$171.18",
            avgBenefit: "$161.30",
            avgOOP: "$11.88",
            covered: 12894,
            notCovered: 5775,
            coveredPercent: "69.07%",
            notCoveredPercent: "30.93%",
            totalBenefit: "$30,11,255.96",
            percentage: "4",
        },
        {
            name: "COLONIAL DRUGS",
            members: 7572,
            claims: 13713,
            firstCopayDate: "03-10-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$199.43",
            avgBenefit: "$182.34",
            avgOOP: "$17.09",
            covered: 7393,
            notCovered: 6320,
            coveredPercent: "53.91%",
            notCoveredPercent: "46.09%",
            totalBenefit: "$25,00,415.07",
            percentage: "3",
        },
        {
            name: "APOTHECO PHARMACY LINCOLN PARK",
            members: 1209,
            claims: 12761,
            firstCopayDate: "01-08-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$317.89",
            avgBenefit: "$198.63",
            avgOOP: "$19.26",
            covered: 6256,
            notCovered: 6133,
            coveredPercent: "51.54%",
            notCoveredPercent: "48.06%",
            totalBenefit: "$25,34,697.33",
            percentage: "3",
        },
        {
            name: "PRESTIGE PHARMACY",
            members: 6579,
            claims: 10973,
            firstCopayDate: "25-08-2022",
            lastCopayDate: "12-07-2025",
            avgCopay: "$242.35",
            avgBenefit: "$228.05",
            avgOOP: "$14.31",
            covered: 7162,
            notCovered: 3811,
            coveredPercent: "65.27%",
            notCoveredPercent: "34.73%",
            totalBenefit: "$25,02,387.39",
            percentage: "3",
        },
        {
            name: "ALBERTSONS PHARMACY",
            members: 4793,
            claims: 8007,
            firstCopayDate: "19-10-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$329.71",
            avgBenefit: "$203.31",
            avgOOP: "$23.50",
            covered: 3369,
            notCovered: 5238,
            coveredPercent: "39.14%",
            notCoveredPercent: "60.86%",
            totalBenefit: "$17,40,203.92",
            percentage: "3",
        },
        {
            name: "SYMPHONY PHARMACY",
            members: 4721,
            claims: 8414,
            firstCopayDate: "17-08-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$251.81",
            avgBenefit: "$236.42",
            avgOOP: "$15.39",
            covered: 5319,
            notCovered: 3095,
            coveredPercent: "63.23%",
            notCoveredPercent: "36.78%",
            totalBenefit: "$19,89,557.64",
            percentage: "2",
        },
        {
            name: "APOTHECO PHARMACY DELRAY BEACH",
            members: 4816,
            claims: 8361,
            firstCopayDate: "01-09-2023",
            lastCopayDate: "11-07-2025",
            avgCopay: "$155.71",
            avgBenefit: "$138.47",
            avgOOP: "$17.24",
            covered: 4355,
            notCovered: 4006,
            coveredPercent: "52.09%",
            notCoveredPercent: "47.91%",
            totalBenefit: "$11,57,785.58",
            percentage: "2",
        },
    ];

    // Pharmacy Store Activity Data for Location Tab
    const pharmacyStoreActivityData = [
        {
            name: "CAREPOINT PHARMACY",
            city: "SCHAUMBURG",
            state: "IL",
            zipCode: "60173",
            members: 38592,
            claims: 80385,
            firstCopayDate: "05-08-2022",
            lastCopayDate: "12-07-2025",
            avgCopay: "$332.54",
            avgBenefit: "$315.55",
            avgOOP: "$18.99",
            covered: 41114,
            notCovered: 39271,
            coveredPercent: "51.2%",
        },
        {
            name: "APOTHECO PHARMACY CHOICE BAY AREA",
            city: "PLEASANTON",
            state: "CA",
            zipCode: "94588",
            members: 8474,
            claims: 18669,
            firstCopayDate: "21-09-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$171.18",
            avgBenefit: "$161.30",
            avgOOP: "$11.88",
            covered: 12894,
            notCovered: 5775,
            coveredPercent: "69.1%",
        },
        {
            name: "COLONIAL DRUGS",
            city: "WINTER PARK",
            state: "FL",
            zipCode: "32792",
            members: 7572,
            claims: 13713,
            firstCopayDate: "22-09-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$199.43",
            avgBenefit: "$182.34",
            avgOOP: "$17.09",
            covered: 7393,
            notCovered: 6320,
            coveredPercent: "53.9%",
        },
        {
            name: "APOTHECO PHARMACY LINCOLN PARK",
            city: "CHICAGO",
            state: "IL",
            zipCode: "60614",
            members: 6630,
            claims: 12761,
            firstCopayDate: "01-08-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$317.89",
            avgBenefit: "$198.63",
            avgOOP: "$19.26",
            covered: 6256,
            notCovered: 6133,
            coveredPercent: "51.5%",
        },
        {
            name: "PRESTIGE PHARMACY",
            city: "ALPHARETTA",
            state: "GA",
            zipCode: "30005",
            members: 6579,
            claims: 10973,
            firstCopayDate: "24-08-2022",
            lastCopayDate: "12-07-2025",
            avgCopay: "$242.35",
            avgBenefit: "$228.05",
            avgOOP: "$14.31",
            covered: 7162,
            notCovered: 3811,
            coveredPercent: "65.3%",
        },
        {
            name: "ALBERTSONS PHARMACY",
            city: "BIRMINGHAM",
            state: "AL",
            zipCode: "35242",
            members: 4793,
            claims: 8007,
            firstCopayDate: "19-10-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$329.71",
            avgBenefit: "$203.31",
            avgOOP: "$23.50",
            covered: 3369,
            notCovered: 5238,
            coveredPercent: "39.1%",
        },
        {
            name: "SYMPHONY PHARMACY",
            city: "AUSTIN",
            state: "TX",
            zipCode: "78746",
            members: 4721,
            claims: 8414,
            firstCopayDate: "17-08-2022",
            lastCopayDate: "11-07-2025",
            avgCopay: "$251.81",
            avgBenefit: "$236.42",
            avgOOP: "$15.39",
            covered: 5319,
            notCovered: 3095,
            coveredPercent: "63.2%",
        },
        {
            name: "APOTHECO PHARMACY DELRAY BEACH",
            city: "DELRAY BEACH",
            state: "FL",
            zipCode: "33484",
            members: 4816,
            claims: 8361,
            firstCopayDate: "01-09-2023",
            lastCopayDate: "11-07-2025",
            avgCopay: "$155.71",
            avgBenefit: "$138.47",
            avgOOP: "$17.24",
            covered: 4355,
            notCovered: 4006,
            coveredPercent: "52.1%",
        },
    ];

    return (
        <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
            {/* Header with Dropdowns */}
            <div className="flex gap-4 mb-6">
                <div className="w-64">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pharmacy Chain
                    </label>
                    <Select
                        value={selectedPharmacyChain}
                        onValueChange={setSelectedPharmacyChain}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select pharmacy chain" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cvs">CVS Pharmacy</SelectItem>
                            <SelectItem value="apotheco">Apotheco Pharmacy</SelectItem>
                            <SelectItem value="safeway">Safeway Pharmacy</SelectItem>
                            <SelectItem value="colonial">Colonial Drugs</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-64">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Pharmacy
                    </label>
                    <Select
                        value={selectedPreferredPharmacy}
                        onValueChange={setSelectedPreferredPharmacy}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select preferred pharmacy" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="preferred">Preferred Network</SelectItem>
                            <SelectItem value="specialty">Specialty Network</SelectItem>
                            <SelectItem value="retail">Retail Network</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-fit grid-cols-2">
                    <TabsTrigger value="pharmacy-chain">Pharmacy Chain</TabsTrigger>
                    <TabsTrigger value="pharmacy-location">Pharmacy Location</TabsTrigger>
                </TabsList>

                <TabsContent value="pharmacy-chain" className="space-y-6">
                    {/* Top Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Top 10 Pharmacies */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Top 10 Pharmacies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-600 border-b pb-2">
                                        <span>Pharmacy Chain</span>
                                        <span>Pharmacy NPI</span>
                                        <span>Total Spend</span>
                                    </div>
                                    {top10PharmaciesData.map((pharmacy, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-3 gap-2 text-sm py-2 border-b border-gray-100"
                                        >
                      <span className="font-medium text-blue-600">
                        {pharmacy.chain}
                      </span>
                                            <span className="text-gray-600">{pharmacy.npi}</span>
                                            <span className="font-medium">{pharmacy.totalSpend}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Members by Pharmacy State */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Members by Pharmacy State
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <svg
                                        viewBox="0 0 400 250"
                                        className="w-full h-64 bg-gray-100 rounded-lg"
                                    >
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

                                        {/* Other states */}
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
                            </CardContent>
                        </Card>

                        {/* Pharmacy Chain Coverage */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Pharmacy Chain</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 gap-2 text-xs font-medium text-gray-600 border-b pb-2">
                                        <span>Name</span>
                                        <span>% Covered</span>
                                        <span>% Not Covered</span>
                                        <span>Avg. Paid Benefit</span>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto space-y-1">
                                        {pharmacyChainData.map((chain, index) => (
                                            <div
                                                key={index}
                                                className="grid grid-cols-4 gap-2 text-xs py-2 border-b border-gray-50"
                                            >
                        <span className="font-medium text-blue-600 truncate">
                          {chain.name}
                        </span>
                                                <span>{chain.covered}</span>
                                                <span>{chain.notCovered}</span>
                                                <span className="font-medium">{chain.benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Pharmacy Activity Table - Only in Chain Tab */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Pharmacy Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                    <tr className="border-b bg-gray-50">
                                        <th className="text-left p-3 font-medium">
                                            Pharmacy Name
                                        </th>
                                        <th className="text-left p-3 font-medium">Members</th>
                                        <th className="text-left p-3 font-medium">Claims</th>
                                        <th className="text-left p-3 font-medium">
                                            First Copay Date
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Last Copay Date
                                        </th>
                                        <th className="text-left p-3 font-medium">Avg. Copay</th>
                                        <th className="text-left p-3 font-medium">
                                            Avg. Benefit
                                        </th>
                                        <th className="text-left p-3 font-medium">Avg. OOP</th>
                                        <th className="text-left p-3 font-medium">
                                            Covered Claims
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Not Covered Claims
                                        </th>
                                        <th className="text-left p-3 font-medium">% Covered</th>
                                        <th className="text-left p-3 font-medium">
                                            % Not Covered
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Total Benefit
                                        </th>
                                        <th className="text-left p-3 font-medium">%</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {pharmacyActivityData.map((pharmacy, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="p-3 font-medium text-blue-600">
                                                {pharmacy.name}
                                            </td>
                                            <td className="p-3">
                                                {pharmacy.members.toLocaleString()}
                                            </td>
                                            <td className="p-3">
                                                {pharmacy.claims.toLocaleString()}
                                            </td>
                                            <td className="p-3">{pharmacy.firstCopayDate}</td>
                                            <td className="p-3">{pharmacy.lastCopayDate}</td>
                                            <td className="p-3">{pharmacy.avgCopay}</td>
                                            <td className="p-3">{pharmacy.avgBenefit}</td>
                                            <td className="p-3">{pharmacy.avgOOP}</td>
                                            <td className="p-3">
                                                {pharmacy.covered.toLocaleString()}
                                            </td>
                                            <td className="p-3">
                                                {pharmacy.notCovered.toLocaleString()}
                                            </td>
                                            <td className="p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-green-100 text-green-800"
                                                >
                                                    {pharmacy.coveredPercent}
                                                </Badge>
                                            </td>
                                            <td className="p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-red-100 text-red-800"
                                                >
                                                    {pharmacy.notCoveredPercent}
                                                </Badge>
                                            </td>
                                            <td className="p-3 font-medium">
                                                {pharmacy.totalBenefit}
                                            </td>
                                            <td className="p-3">{pharmacy.percentage}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                    <tfoot>
                                    <tr className="border-t-2 bg-gray-100 font-semibold">
                                        <td className="p-3">Total</td>
                                        <td className="p-3">368584</td>
                                        <td className="p-3">703824</td>
                                        <td className="p-3">09-08-2022</td>
                                        <td className="p-3">13-07-2025</td>
                                        <td className="p-3">$259.88</td>
                                        <td className="p-3">$243.84</td>
                                        <td className="p-3">$16.04</td>
                                        <td className="p-3">444665</td>
                                        <td className="p-3">259159</td>
                                        <td className="p-3">63.18%</td>
                                        <td className="p-3">36.82%</td>
                                        <td className="p-3">$17,16,19,790.66</td>
                                        <td className="p-3">$6</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="pharmacy-location" className="space-y-6">
                    {/* Top Row - Same as Pharmacy Chain Tab */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Top 10 Pharmacies */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Top 10 Pharmacies</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-2 text-sm font-medium text-gray-600 border-b pb-2">
                                        <span>Pharmacy Chain</span>
                                        <span>Pharmacy NPI</span>
                                        <span>Total Spend</span>
                                    </div>
                                    {top10PharmaciesData.map((pharmacy, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-3 gap-2 text-sm py-2 border-b border-gray-100"
                                        >
                      <span className="font-medium text-blue-600">
                        {pharmacy.chain}
                      </span>
                                            <span className="text-gray-600">{pharmacy.npi}</span>
                                            <span className="font-medium">{pharmacy.totalSpend}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Members by Pharmacy State */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    Members by Pharmacy State
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="relative">
                                    <svg
                                        viewBox="0 0 400 250"
                                        className="w-full h-64 bg-gray-100 rounded-lg"
                                    >
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

                                        {/* Other states */}
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
                            </CardContent>
                        </Card>

                        {/* Pharmacy Chain Coverage */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Pharmacy Chain</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <div className="grid grid-cols-4 gap-2 text-xs font-medium text-gray-600 border-b pb-2">
                                        <span>Name</span>
                                        <span>% Covered</span>
                                        <span>% Not Covered</span>
                                        <span>Avg. Paid Benefit</span>
                                    </div>
                                    <div className="max-h-96 overflow-y-auto space-y-1">
                                        {pharmacyChainData.map((chain, index) => (
                                            <div
                                                key={index}
                                                className="grid grid-cols-4 gap-2 text-xs py-2 border-b border-gray-50"
                                            >
                        <span className="font-medium text-blue-600 truncate">
                          {chain.name}
                        </span>
                                                <span>{chain.covered}</span>
                                                <span>{chain.notCovered}</span>
                                                <span className="font-medium">{chain.benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Pharmacy Store Activity Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Pharmacy Store Activity</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead>
                                    <tr className="border-b bg-gray-50">
                                        <th className="text-left p-3 font-medium">
                                            Pharmacy Name
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Pharmacy City
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Pharmacy State
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Pharmacy Zip Code
                                        </th>
                                        <th className="text-left p-3 font-medium">Members</th>
                                        <th className="text-left p-3 font-medium">Claims</th>
                                        <th className="text-left p-3 font-medium">
                                            First Copay Date
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Last Copay Date
                                        </th>
                                        <th className="text-left p-3 font-medium">Avg. Copay</th>
                                        <th className="text-left p-3 font-medium">
                                            Avg. Benefit
                                        </th>
                                        <th className="text-left p-3 font-medium">Avg. OOP</th>
                                        <th className="text-left p-3 font-medium">
                                            Covered Claims
                                        </th>
                                        <th className="text-left p-3 font-medium">
                                            Not Covered Claims
                                        </th>
                                        <th className="text-left p-3 font-medium">% Co</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {pharmacyStoreActivityData.map((pharmacy, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50">
                                            <td className="p-3 font-medium text-blue-600">
                                                {pharmacy.name}
                                            </td>
                                            <td className="p-3">{pharmacy.city}</td>
                                            <td className="p-3">{pharmacy.state}</td>
                                            <td className="p-3">{pharmacy.zipCode}</td>
                                            <td className="p-3">
                                                {pharmacy.members.toLocaleString()}
                                            </td>
                                            <td className="p-3">
                                                {pharmacy.claims.toLocaleString()}
                                            </td>
                                            <td className="p-3">{pharmacy.firstCopayDate}</td>
                                            <td className="p-3">{pharmacy.lastCopayDate}</td>
                                            <td className="p-3">{pharmacy.avgCopay}</td>
                                            <td className="p-3">{pharmacy.avgBenefit}</td>
                                            <td className="p-3">{pharmacy.avgOOP}</td>
                                            <td className="p-3">
                                                {pharmacy.covered.toLocaleString()}
                                            </td>
                                            <td className="p-3">
                                                {pharmacy.notCovered.toLocaleString()}
                                            </td>
                                            <td className="p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-green-100 text-green-800"
                                                >
                                                    {pharmacy.coveredPercent}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                    <tfoot>
                                    <tr className="border-t-2 bg-gray-100 font-semibold">
                                        <td className="p-3">Total</td>
                                        <td className="p-3">-</td>
                                        <td className="p-3">-</td>
                                        <td className="p-3">-</td>
                                        <td className="p-3">368584</td>
                                        <td className="p-3">703824</td>
                                        <td className="p-3">05-08-2022</td>
                                        <td className="p-3">13-07-2025</td>
                                        <td className="p-3">$259.88</td>
                                        <td className="p-3">$243.84</td>
                                        <td className="p-3">$16.04</td>
                                        <td className="p-3">444665</td>
                                        <td className="p-3">259159</td>
                                        <td className="p-3">63</td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default TripleAChart;
