from pymongo import MongoClient
import pandas as pd
import numpy as np

# Connect to MongoDB
uri = "mongodb+srv://vijay:asdf123@cluster0.3wchd.mongodb.net/financial_risk_db"
client = MongoClient(uri)
db = client["financial_risk_db"]

# Collections
transactions = db["transactions"]
fraud_reports = db["fraud_reports"]
credit_risk = db["credit_risk"]
investment_insights = db["investment_insights"]

# Function to clean transactions
def clean_transactions():
    df = pd.DataFrame(list(transactions.find()))

    # Drop records with missing user_id or amount
    df.dropna(subset=['user_id', 'amount'], inplace=True)

    # Ensure amount is positive
    df = df[df['amount'] > 0]

    # Convert transaction_date to datetime format
    df['transaction_date'] = pd.to_datetime(df['transaction_date'], errors='coerce')

    # Drop duplicate transaction IDs
    df.drop_duplicates(subset=['transaction_id'], inplace=True)

    # Update cleaned data back to MongoDB
    transactions.delete_many({})  # Clear existing data
    transactions.insert_many(df.to_dict(orient="records"))
    print("✅ Transactions cleaned & updated.")

# Function to clean credit risk data
def clean_credit_risk():
    df = pd.DataFrame(list(credit_risk.find()))

    # Remove entries with missing credit scores
    df.dropna(subset=['credit_score'], inplace=True)

    # Ensure credit scores are within a valid range (300-850)
    df = df[(df['credit_score'] >= 300) & (df['credit_score'] <= 850)]

    # Update back to MongoDB
    credit_risk.delete_many({})
    credit_risk.insert_many(df.to_dict(orient="records"))
    print("✅ Credit Risk Data cleaned & updated.")

# Run Cleaning Functions
clean_transactions()
clean_credit_risk()
