import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const salesData = [
  { date: "1 May", sales: 5000 },
  { date: "2 May", sales: 8000 },
  { date: "3 May", sales: 7000 },
  { date: "4 May", sales: 12000 },
  { date: "5 May", sales: 14000 },
  { date: "6 May", sales: 12000 },
  { date: "7 May", sales: 16000 },
  { date: "8 May", sales: 20000 },
  { date: "9 May", sales: 18000 },
  { date: "10 May", sales: 15000 },
  { date: "11 May", sales: 11000 },
  { date: "12 May", sales: 8500 },
  { date: "13 May", sales: 10000 },
  { date: "14 May", sales: 14000 },
  { date: "15 May", sales: 17000 },
  { date: "16 May", sales: 15500 },
  { date: "17 May", sales: 18000 },
  { date: "18 May", sales: 16000 },
  { date: "19 May", sales: 20000 },
  { date: "20 May", sales: 20000 },
  { date: "21 May", sales: 24000 },
  { date: "22 May", sales: 25000 },
  { date: "23 May", sales: 18000 },
  { date: "24 May", sales: 19000 },
  { date: "25 May", sales: 20000 },
  { date: "26 May", sales: 22000 },
  { date: "27 May", sales: 30000 },
  { date: "28 May", sales: 28000 },
  { date: "29 May", sales: 30000 },
  { date: "30 May", sales: 33000 },
  { date: "31 May", sales: 35000 },
];

function SalesOverview() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm max-w-full">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Sales Overview
        </h2>

        <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none">
          <option>This Month</option>
          <option>Last Month</option>
          <option>This Year</option>
        </select>
      </div>

      {/* Chart */}
      <div className="max-w-full overflow-hidden">

        <AreaChart
          width={600}
          height={300}
          data={salesData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >

          {/* Gradient */}
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

          {/* Grid */}
          <CartesianGrid
            stroke="#F1F3F4"
            vertical={false}
          />

          {/* X Axis */}
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            interval={4}
          />

          {/* Y Axis */}
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            tickFormatter={(value) => `₹${value / 1000}k`}
            domain={[0, 40000]}
          />

          {/* Tooltip */}
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

          {/* Graph */}
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

      </div>
    </div>
  );
}

export default SalesOverview;