import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import FilterPanel from './FilterPanel';
import ChartSection from './ChartSection';
import BottomNavigation from "@/components/BottomNavigation.tsx";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Brand Summary');

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/*<Sidebar*/}
            {/*    isSidebarOpen={isSidebarOpen}*/}
            {/*    setIsSidebarOpen={setIsSidebarOpen}*/}
            {/*    activeTab={activeTab}*/}
            {/*    setActiveTab={setActiveTab}*/}
            {/*/>*/}

            <div className="flex-1 flex flex-col">
                <Header
                    isFilterOpen={isFilterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                />

                <main className="flex-1 relative">
                    <ChartSection activeTab={activeTab} />
                    <FilterPanel
                        isFilterOpen={isFilterOpen}
                        setIsFilterOpen={setIsFilterOpen}
                    />
                </main>
                <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </div>
    );
};

export default DashboardLayout;