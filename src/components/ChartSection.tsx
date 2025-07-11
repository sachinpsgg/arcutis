import React from 'react';
import BrandSummeryChart from "@/pages/ChartPages/BrandSummeryChart.tsx";
import WeeklyChart from "@/pages/ChartPages/WeeklyChart.tsx";
import PortfolioChart from "@/pages/ChartPages/PortfolioChart.tsx";
import ChannelGroupTypeChart from "@/pages/ChartPages/ChannelGroupTypeChart.tsx";
import DailyChart from "@/pages/ChartPages/DailyChart.tsx";
import TrendsChart from "@/pages/ChartPages/TrendsChart.tsx";
import ClaimDistributionChart from "@/pages/ChartPages/ClaimDistributionChart.tsx";
import ClaimDistributionOfFillChart from "@/pages/ChartPages/ClaimDistributionOfFillChart.tsx";
import PrescriberChart from "@/pages/ChartPages/PrescriberChart.tsx";
import TripleAChart from "@/pages/ChartPages/TripleAChart.tsx";
import PatientDemographicsChart from "@/pages/ChartPages/PatientDemographicsChart.tsx";
import PatientUtilizationChart from "@/pages/ChartPages/PatientUtilizationChart.tsx";
import ActivationCountChart from "@/pages/ChartPages/ActivationCountChart.tsx";

interface ChartSectionProps {
    activeTab: string;
}

const ChartSection: React.FC<ChartSectionProps> = ({ activeTab }) => {
    const renderChart = () => {
        switch (activeTab) {
            case 'Brand Summary':
                return (
                    <BrandSummeryChart/>
                );
            case 'Weekly':
                return (
                   <WeeklyChart/>
                );
            case 'Portfolio':
                return (
                    <PortfolioChart/>
                );
            case 'Channel Group Type':
                return (
                    <ChannelGroupTypeChart/>
                );
            case 'Daily':
                return (
                    <DailyChart/>
                );
            case 'Trends':
                return (
                    <TrendsChart/>
                );
            case 'Claim Distribution':
                return (
                    <ClaimDistributionChart/>
                );
            case 'Claim Distribution of Fill':
                return (
                    <ClaimDistributionOfFillChart/>
                );
            case 'Prescriber':
                return (
                   <PrescriberChart/>
                );
            case 'Triple A':
                return (
                   <TripleAChart/>
                );
            case 'Patient Demographics':
                return (
                    <PatientDemographicsChart/>
                );
            case 'Patient Utilization':
                return (
                    <PatientUtilizationChart/>
                );
            case 'Activation Count':
                return (
                   <ActivationCountChart/>
                );


        }
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">{activeTab}</h1>
                <p className="text-gray-600">Analytics and insights for {activeTab.toLowerCase()}</p>
            </div>

            {renderChart()}
        </div>
    );
};

export default ChartSection;