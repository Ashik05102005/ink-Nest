import React from "react";
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Cell,
} from "recharts";

const COLORS = [
    "#1D7A46", // Green
    "#2563EB", // Blue
    "#F59E0B", // Amber
    "#8B5CF6", // Purple
    "#EF4444", // Red
    "#06B6D4", // Cyan
    "#EC4899", // Pink
    "#64748B", // Slate
];


function CategoryPieChart({ data }) {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Books by Category
            </h2>

            <div className="h-75">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="count"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            innerRadius={50}
                            paddingAngle={2}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            formatter={(value, name) => [
                                `${value} books`,
                                name,
                            ]}
                        />

                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default CategoryPieChart