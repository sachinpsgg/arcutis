import React, { useState } from "react";
import BottomNavigation from "./BottomNavigation";
import Header from "./Header";
import FilterPanel from "./FilterPanel";
import ChartSection from "./ChartSection";

const DashboardLayout = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Brand Summary");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <Header isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />

      <main className="flex-1 relative">
        <ChartSection activeTab={activeTab} />
        <FilterPanel
          isFilterOpen={isFilterOpen}
          setIsFilterOpen={setIsFilterOpen}
        />
      </main>

      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default DashboardLayout;
