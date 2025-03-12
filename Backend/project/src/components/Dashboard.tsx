import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Bell, Shield, TrendingUp, AlertTriangle, CreditCard, PieChart } from 'lucide-react';
import { Transaction, Alert } from '../types';

const mockTransactions: Transaction[] = [
  { id: '1', amount: 1200, date: '2024-03-10', type: 'transfer', riskScore: 0.2, status: 'normal' },
  { id: '2', amount: 5000, date: '2024-03-11', type: 'withdrawal', riskScore: 0.8, status: 'suspicious' },
  { id: '3', amount: 300, date: '2024-03-12', type: 'payment', riskScore: 0.1, status: 'normal' },
];

const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'fraud',
    priority: 'high',
    message: 'Unusual transaction pattern detected',
    timestamp: '2024-03-12T10:30:00Z'
  },
  {
    id: '2',
    type: 'credit',
    priority: 'medium',
    message: 'Credit score update available',
    timestamp: '2024-03-12T09:15:00Z'
  }
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">FinanceGuard AI</span>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Fraud Detection</h2>
              <AlertTriangle className="h-6 w-6 text-red-500" />
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockTransactions}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="riskScore" stroke="#4F46E5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Credit Risk</h2>
              <CreditCard className="h-6 w-6 text-indigo-500" />
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Credit Score</span>
                  <span className="text-lg font-semibold text-indigo-600">750</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Investment Analysis</h2>
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Portfolio Risk</p>
                  <p className="text-lg font-semibold text-gray-900">Medium</p>
                </div>
                <PieChart className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Alerts</h2>
          <div className="bg-white shadow rounded-lg">
            <ul className="divide-y divide-gray-200">
              {mockAlerts.map((alert) => (
                <li key={alert.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${
                      alert.priority === 'high' ? 'bg-red-100' :
                      alert.priority === 'medium' ? 'bg-yellow-100' : 'bg-green-100'
                    }`}>
                      <AlertTriangle className={`h-5 w-5 ${
                        alert.priority === 'high' ? 'text-red-500' :
                        alert.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                      <p className="text-sm text-gray-500">{new Date(alert.timestamp).toLocaleString()}</p>
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                      View
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;