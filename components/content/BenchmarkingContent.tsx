import React from 'react';
import { BarChart3 } from 'lucide-react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

const data = [
  { metric: 'Accuracy', value: 92, fullMark: 100 },
  { metric: 'Latency', value: 78, fullMark: 100 },
  { metric: 'Cost Efficiency', value: 85, fullMark: 100 },
  { metric: 'CSAT', value: 96, fullMark: 100 },
  { metric: 'Throughput', value: 88, fullMark: 100 },
  { metric: 'Uptime', value: 99, fullMark: 100 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-lg shadow-lg px-3 py-2">
        <p className="text-xs font-semibold text-slate-500">{payload[0].payload.metric}</p>
        <p className="text-base font-bold text-violet-600">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const BenchmarkingContent = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-200 h-full flex flex-col lg:min-h-[600px]">
        <div className="h-10 border-b border-slate-200 bg-slate-50 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
        </div>
        <div className="p-6 md:p-8 bg-slate-50/50 flex-grow relative">
          <div className="absolute top-10 right-10 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex justify-between items-center mb-4 relative z-10">
            <div>
              <h3 className="text-lg font-semibold text-slate-800 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-violet-500" />
                Performance Benchmarking
              </h3>
              <p className="text-xs text-slate-500 font-mono mt-1">ID: benchmark-analysis-v2</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800 border border-violet-200">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mr-1.5 animate-pulse"></span>
              Analyzing
            </span>
          </div>

          <div className="relative z-10 mb-3">
            <h4 className="text-xl font-semibold text-slate-800 mb-1">Model Performance Analysis</h4>
            <p className="text-sm text-slate-600">Comprehensive evaluation of model performance across key business metrics and technical benchmarks.</p>
          </div>

          <div className="relative w-full h-64 md:h-80 rounded-xl bg-white border border-slate-200 overflow-hidden shadow-inner">
            <div className="absolute inset-0 flex flex-col p-4">
              <div className="flex items-center justify-between mb-1">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Radar Overview — Model V3</p>
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span
                    className="inline-block w-3 h-2 rounded-sm"
                    style={{ background: 'rgba(139,92,246,0.3)', border: '1.5px solid #7c3aed' }}
                  ></span>
                  Model V3
                </span>
              </div>

              <div className="flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="72%" data={data}>
                    <defs>
                      <radialGradient id="radarFill" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#a78bfa" stopOpacity={0.05} />
                      </radialGradient>
                    </defs>
                    <PolarGrid
                      stroke="#e2e8f0"
                      strokeDasharray="4 2"
                      gridType="polygon"
                    />
                    <PolarAngleAxis
                      dataKey="metric"
                      tick={{ fontSize: 11, fill: '#475569', fontWeight: 500 }}
                      tickLine={false}
                    />
                    <PolarRadiusAxis
                      angle={90}
                      domain={[0, 100]}
                      tick={{ fontSize: 9, fill: '#94a3b8' }}
                      axisLine={false}
                      tickCount={4}
                      tickFormatter={(v) => `${v}`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Radar
                      name="Model V3"
                      dataKey="value"
                      stroke="#7c3aed"
                      strokeWidth={2}
                      fill="url(#radarFill)"
                      dot={{ r: 3.5, fill: '#7c3aed', strokeWidth: 0 }}
                      activeDot={{ r: 5.5, fill: '#5b21b6', strokeWidth: 0 }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenchmarkingContent;