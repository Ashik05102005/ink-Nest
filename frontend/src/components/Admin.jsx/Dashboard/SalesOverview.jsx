import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SalesOverview({ data }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Sales Overview
        </h2>

      </div>

      {/* Chart */}
      <div className="w-full h-[300px]">

        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 10,
              bottom: 10,
            }}
          >

            <defs>
              <linearGradient
                id="salesGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#22A06B"
                  stopOpacity={0.25}
                />

                <stop
                  offset="100%"
                  stopColor="#22A06B"
                  stopOpacity={0.02}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#F1F3F4"
              vertical={false}
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 12,
              }}
              tickFormatter={(value) => `₹${value}`}
            />

            <Tooltip
              formatter={(value) => [
                `₹${Number(value).toLocaleString("en-IN")}`,
                "Sales",
              ]}
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="sales"
              stroke="#0F6B4F"
              strokeWidth={2}
              fill="url(#salesGradient)"
              dot={false}
              activeDot={{
                r: 4,
                fill: "#0F6B4F",
              }}
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default SalesOverview;