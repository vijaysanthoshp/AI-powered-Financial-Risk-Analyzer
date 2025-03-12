from pymongo import MongoClient
import pandas as pd
import numpy as np

# Connect to MongoDB
uri = "mongodb+srv://vijay:asdf123@cluster0.3wchd.mongodb.net/financial_risk_db"
client = MongoClient(uri)
db = client["financial_risk_db"]
transactions = db["transactions"]

# Load transactions into a DataFrame
df = pd.DataFrame(list(transactions.find()))

# Drop MongoDB ObjectId (if exists)
df.drop(columns=['_id'], errors='ignore', inplace=True)

# Convert date fields to datetime
df['transaction_date'] = pd.to_datetime(df['transaction_date'])

# Extract new features
df['day_of_week'] = df['transaction_date'].dt.dayofweek
df['hour_of_day'] = df['transaction_date'].dt.hour
df['is_weekend'] = df['day_of_week'].apply(lambda x: 1 if x >= 5 else 0)

# Create a new column for high-risk transactions (risk_score > 0.7)
df['is_fraud'] = df['risk_score'].apply(lambda x: 1 if x > 0.7 else 0)

# Save cleaned dataset for training
df.to_csv("fraud_dataset.csv", index=False)
print("✅ Feature Engineering Completed! Data saved to fraud_dataset.csv")
