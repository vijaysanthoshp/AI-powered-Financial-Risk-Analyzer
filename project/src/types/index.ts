export interface Transaction {
  id: string;
  amount: number;
  date: string;
  type: string;
  riskScore: number;
  status: 'normal' | 'suspicious' | 'fraudulent';
}

export interface CreditScore {
  score: number;
  factors: {
    label: string;
    impact: 'positive' | 'negative' | 'neutral';
    value: number;
  }[];
  trend: number[];
}

export interface Investment {
  id: string;
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  expectedReturn: number;
  confidence: number;
  recommendation: string;
}

export interface Alert {
  id: string;
  type: 'fraud' | 'credit' | 'investment';
  priority: 'low' | 'medium' | 'high';
  message: string;
  timestamp: string;
}