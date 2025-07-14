import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PrescriberChart = () => {
  const [selectedPrescribers, setSelectedPrescribers] = useState(["All"]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mock data for prescriber dropdown
  const prescriberOptions = [
    { value: "All", label: "All" },
    { value: "()", label: "()" },
    { value: "1356732119", label: "(1356732119)" },
    { value: "1518399344", label: "(1518399344)" },
    { value: "1851440127", label: "(1851440127)" },
    { value: "AAKRE_REBEKAH_1134538911", label: "AAKRE; REBEKAH(1134538911)" },
    { value: "AARON_NEIL_1477551083", label: "AARON; NEIL(1477551083)" },
    { value: "AASBY_MOLLY_1538684170", label: "AASBY; MOLLY(1538684170)" },
  ];

  // Mock data for Top 10 Prescribers
  const top10Prescribers = [
    { npi: "1231186", name: "CAMERON; MICHAEL", members: 488, claims: 851 },
    { npi: "1163877", name: "CHAO; TOMAS", members: 502, claims: 632 },
    { npi: "1285692232", name: "COCCA; GIOVANNA", members: 563, claims: 1037 },
    { npi: "1729507617", name: "DILWORTH; DIANA", members: 236, claims: 379 },
    { npi: "1407055960", name: "GOODMAN; MARCUS", members: 1320, claims: 2060 },
    { npi: "1533820164", name: "HOFFMAN; ROBERT", members: 385, claims: 574 },
    { npi: "1144359124", name: "KERZIC; FRANCISCO", members: 357, claims: 516 },
    { npi: "1801869871", name: "MALLAR; PAULA", members: 462, claims: 329 },
    { npi: "1447563752", name: "MASTRO; ANDREW", members: 496, claims: 870 },
    { npi: "1568975120", name: "MOW; PAULINE", members: 382, claims: 498 },
  ];

  // Mock data for monthly prescriber chart
  const monthlyData = [
    { month: "January", prescribers: 8 },
    { month: "February", prescribers: 12 },
    { month: "March", prescribers: 15 },
    { month: "April", prescribers: 18 },
    { month: "May", prescribers: 22 },
    { month: "June", prescribers: 25 },
    { month: "July", prescribers: 28 },
    { month: "August", prescribers: 32 },
    { month: "September", prescribers: 35 },
    { month: "October", prescribers: 38 },
    { month: "November", prescribers: 42 },
    { month: "December", prescribers: 45 },
  ];

  // Mock data for prescriber list
  const prescriberList = [
    {
      name: "",
      state: "GA",
      city: "BUFORD",
      members: 2,
      claims: 3,
      firstCopayDate: "17-02-2015",
      lastCopayDate: "20-06-2023",
      avgCopay: "$10.00",
      avgBenefit: "$53.50",
      avgOOP: "$17.50",
      jan: 0,
      feb: 1,
      mar: 0,
      apr: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "",
      state: "TX",
      city: "HOUSTON",
      members: 4,
      claims: 4,
      firstCopayDate: "11-08-2018",
      lastCopayDate: "03-01-2023",
      avgCopay: "$5.00",
      avgBenefit: "$95.00",
      avgOOP: "$5.00",
      jan: 0,
      feb: 0,
      mar: 1,
      apr: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "",
      state: "TX",
      city: "LAKE JACKSON",
      members: 1,
      claims: 1,
      firstCopayDate: "26-03-2015",
      lastCopayDate: "26-03-2015",
      avgCopay: "$910.00",
      avgBenefit: "$910.00",
      avgOOP: "$0.00",
      jan: 0,
      feb: 0,
      mar: 1,
      apr: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "AAKRE; REBEKAH",
      state: "WI",
      city: "WEST GRAND FORKS",
      members: 17,
      claims: 17,
      firstCopayDate: "16-05-2004",
      lastCopayDate: "09-01-2023",
      avgCopay: "$640.85",
      avgBenefit: "$640.85",
      avgOOP: "$0.00",
      jan: 1,
      feb: 1,
      mar: 1,
      apr: 1,
      sep: 2,
      oct: 1,
      nov: 1,
      dec: 1,
    },
    {
      name: "AARON; NEIL",
      state: "AZ",
      city: "TEMPE",
      members: 3,
      claims: 4,
      firstCopayDate: "24-02-2015",
      lastCopayDate: "15-09-2015",
      avgCopay: "$511.17",
      avgBenefit: "$502.42",
      avgOOP: "$8.75",
      jan: 0,
      feb: 1,
      mar: 1,
      apr: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "AASBY; MOLLY",
      state: "AR",
      city: "FAYETTEVILLE",
      members: 3,
      claims: 3,
      firstCopayDate: "08-01-2015",
      lastCopayDate: "11-06-2015",
      avgCopay: "$417.25",
      avgBenefit: "$405.06",
      avgOOP: "$11.67",
      jan: 1,
      feb: 0,
      mar: 0,
      apr: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "ABAD; CHELESA",
      state: "DC",
      city: "WASHINGTON",
      members: 1,
      claims: 4,
      firstCopayDate: "06-05-2014",
      lastCopayDate: "04-10-2024",
      avgCopay: "$416.98",
      avgBenefit: "$416.98",
      avgOOP: "$0.00",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 1,
      sep: 0,
      oct: 1,
      nov: 0,
      dec: 0,
    },
    {
      name: "ABAD; JULES",
      state: "WA",
      city: "GRAND RIDGE",
      members: 1,
      claims: 1,
      firstCopayDate: "09-09-2014",
      lastCopayDate: "09-09-2014",
      avgCopay: "$40.00",
      avgBenefit: "$40.00",
      avgOOP: "$0.00",
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      sep: 1,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    {
      name: "ABAD; JULES SINCLAIR MD",
      state: "NY",
      city: "EAST PATCHOGUE",
      members: 3,
      claims: 3,
      firstCopayDate: "12-10-2022",
      lastCopayDate: "04-02-2023",
      avgCopay: "$114.81",
      avgBenefit: "$273.15",
      avgOOP: "$41.67",
      jan: 0,
      feb: 1,
      mar: 0,
      apr: 0,
      sep: 0,
      oct: 1,
      nov: 1,
      dec: 0,
    },
    {
      name: "ABASCAL; DONNA",
      state: "FL",
      city: "GAINESVILLE",
      members: 8,
      claims: 23,
      firstCopayDate: "21-05-2024",
      lastCopayDate: "21-05-2024",
      avgCopay: "$158.44",
      avgBenefit: "$141.70",
      avgOOP: "$16.74",
      jan: 0,
      feb: 0,
      mar: 3,
      apr: 0,
      sep: 2,
      oct: 3,
      nov: 4,
      dec: 0,
    },
  ];

  const handlePrescriberChange = (value, checked) => {
    if (value === "All") {
      if (checked) {
        setSelectedPrescribers(["All"]);
      } else {
        setSelectedPrescribers([]);
      }
    } else {
      if (checked) {
        const newSelected = selectedPrescribers.filter(
          (item) => item !== "All",
        );
        setSelectedPrescribers([...newSelected, value]);
      } else {
        setSelectedPrescribers(
          selectedPrescribers.filter((item) => item !== value),
        );
      }
    }
  };

  const isAllSelected = selectedPrescribers.includes("All");
  const displayText = isAllSelected
    ? "All"
    : selectedPrescribers.length > 0
      ? `${selectedPrescribers.length} selected`
      : "Select prescribers";

  return (
    <div className="p-6 space-y-6">
      {/* Prescriber Dropdown Filter */}
      <div className="w-64">
        <label className="block text-sm font-medium mb-2">
          Prescriber (NPI)
        </label>
        <Popover open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
          <PopoverTrigger asChild>
            <button className="flex w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
              <span>{displayText}</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-4" align="start">
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {prescriberOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={option.value}
                    checked={
                      isAllSelected
                        ? option.value === "All"
                        : selectedPrescribers.includes(option.value)
                    }
                    onCheckedChange={(checked) =>
                      handlePrescriberChange(option.value, checked)
                    }
                  />
                  <Label
                    htmlFor={option.value}
                    className="text-sm font-normal cursor-pointer flex-1"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Top Section - 3 column layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Top 10 Prescribers */}
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Top 10 Prescribers</CardTitle>
              <div className="grid grid-cols-3 gap-4 text-sm font-medium">
                <div>Prescriber (NPI)</div>
                <div>Members</div>
                <div>Claims</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {top10Prescribers.map((prescriber, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 text-sm py-1"
                  >
                    <div className="truncate">
                      <div className="font-medium">{prescriber.name}</div>
                      <div className="text-gray-500">({prescriber.npi})</div>
                    </div>
                    <div>{prescriber.members}</div>
                    <div>{prescriber.claims}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* US Map Placeholder */}
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Members by Prescriber State</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-blue-50 rounded-lg flex items-center justify-center border-2 border-dashed border-blue-200">
                <div className="text-center">
                  <div className="text-blue-600 font-medium">
                    US Map Visualization
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Members distribution by state
                  </div>
                  <div className="mt-4 text-xs text-gray-400">
                    Interactive map showing prescriber locations
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Prescribers by Month Chart */}
        <div className="col-span-4">
          <Card>
            <CardHeader>
              <CardTitle>Prescribers by month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="prescribers" fill="#4A90E2" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Prescriber List Table */}
      <Card>
        <CardHeader>
          <CardTitle>Prescriber List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Prescriber Name</TableHead>
                  <TableHead>Prescriber State</TableHead>
                  <TableHead>Prescriber City</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Claims</TableHead>
                  <TableHead>First Copay Date</TableHead>
                  <TableHead>Last Copay Date</TableHead>
                  <TableHead>Avg Copay</TableHead>
                  <TableHead>Avg Benefit</TableHead>
                  <TableHead>Avg OOP</TableHead>
                  <TableHead>Jan</TableHead>
                  <TableHead>Feb</TableHead>
                  <TableHead>Mar</TableHead>
                  <TableHead>Apr</TableHead>
                  <TableHead>Sep</TableHead>
                  <TableHead>Oct</TableHead>
                  <TableHead>Nov</TableHead>
                  <TableHead>Dec</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {prescriberList.map((prescriber, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {prescriber.name || "-"}
                    </TableCell>
                    <TableCell>{prescriber.state}</TableCell>
                    <TableCell>{prescriber.city}</TableCell>
                    <TableCell>{prescriber.members}</TableCell>
                    <TableCell>{prescriber.claims}</TableCell>
                    <TableCell>{prescriber.firstCopayDate}</TableCell>
                    <TableCell>{prescriber.lastCopayDate}</TableCell>
                    <TableCell>{prescriber.avgCopay}</TableCell>
                    <TableCell>{prescriber.avgBenefit}</TableCell>
                    <TableCell>{prescriber.avgOOP}</TableCell>
                    <TableCell>{prescriber.jan}</TableCell>
                    <TableCell>{prescriber.feb}</TableCell>
                    <TableCell>{prescriber.mar}</TableCell>
                    <TableCell>{prescriber.apr}</TableCell>
                    <TableCell>{prescriber.sep}</TableCell>
                    <TableCell>{prescriber.oct}</TableCell>
                    <TableCell>{prescriber.nov}</TableCell>
                    <TableCell>{prescriber.dec}</TableCell>
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

export default PrescriberChart;
