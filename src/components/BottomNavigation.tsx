import React from "react";

interface BottomNavigationProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
                                                               activeTab,
                                                               setActiveTab,
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
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
            <div className="overflow-x-auto">
                <div className="flex min-w-max px-4 py-2">
                    {navigationItems.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`flex-shrink-0 px-4 py-2 mx-1 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                                activeTab === tab
                                    ? "bg-zoryve-primary text-white"
                                    : "text-gray-600 hover:text-zoryve-primary hover:bg-gray-100"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
