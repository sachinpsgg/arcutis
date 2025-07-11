import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             isSidebarOpen,
                                             setIsSidebarOpen,
                                             activeTab,
                                             setActiveTab
                                         }) => {
    const navigationItems = [
        "Brand Summary",
        "Portfolio",
        "Channel Group Type",
        "Daily",
        "Weekly",
        "Trends",
        "Claim Distribution",
        "Claim Distribution of Fill",
        "Prescriber",
        "Triple A",
        "Patient Demographics",
        "Patient Utilization",
        "Activation Count",
    ];

    return (
        <div
            className={`${
                isSidebarOpen ? "w-64 min-w-64" : "w-16 min-w-16"
            } bg-white border-r border-gray-200 h-screen sticky top-0 transition-all duration-300 shadow-sm`}
        >
            <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                    {isSidebarOpen && (
                        <h3 className="text-sm font-semibold text-gray-900">
                            Navigation
                        </h3>
                    )}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                        {isSidebarOpen ? (
                            <ChevronLeft className="w-4 h-4 text-gray-500" />
                        ) : (
                            <ChevronRight className="w-4 h-4 text-gray-500" />
                        )}
                    </button>
                </div>

                <nav className="space-y-1">
                    {navigationItems.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-all duration-200 ${
                                activeTab === tab
                                    ? "bg-zoryve-primary/10 text-zoryve-primary font-medium border-l-4 border-zoryve-primary"
                                    : "text-gray-600 hover:text-zoryve-primary hover:bg-gray-50"
                            } ${!isSidebarOpen ? "text-xs px-2" : ""}`}
                            title={!isSidebarOpen ? tab : undefined}
                        >
                            {isSidebarOpen ? tab : tab.slice(0, 2).toUpperCase()}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;