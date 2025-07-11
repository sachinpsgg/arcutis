import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
const lineData = [
    { name: 'Week 1', claims: 2400, patients: 1400 },
    { name: 'Week 2', claims: 1398, patients: 2210 },
    { name: 'Week 3', claims: 9800, patients: 2290 },
    { name: 'Week 4', claims: 3908, patients: 2000 },
];
const WeeklyChart = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Weekly Trends</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="25%" height={200}>
                    <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="claims" stroke="#4A90E2" strokeWidth={2} />
                        <Line type="monotone" dataKey="patients" stroke="#F5A623" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );

};

export default WeeklyChart;