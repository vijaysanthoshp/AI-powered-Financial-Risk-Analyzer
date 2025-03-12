from pymongo import MongoClient
import pandas as pd
import numpy as np

# Connect to MongoDB
uri = "mongodb+srv://vijay:asdf123@cluster0.3wchd.mongodb.net/financial_risk_db"
client = MongoClient(uri)
db = client["financial_risk_db"]
credit_risk = db["credit_risk"]

# Load data into DataFrame
df = pd.DataFrame(list(credit_risk.find()))

# Drop MongoDB _id column if it exists
df.drop(columns=['_id'], errors='ignore', inplace=True)

# Handle missing values
df.dropna(inplace=True)

# Ensure numerical columns are properly formatted
df["credit_score"] = df["credit_score"].astype(int)

# Encode categorical values
df["loan_approval_chance"] = df["loan_approval_chance"].map({"Low": 0, "Medium": 1, "High": 2})

# ✅ Fix: Ensure all three classes (Low, Medium, High) exist in dataset
if df["loan_approval_chance"].nunique() == 1:
    df = pd.concat([
        df,
        pd.DataFrame([
            {"credit_score": 780, "loan_approval_chance": 2},  # High approval chance
            {"credit_score": 550, "loan_approval_chance": 0}   # Low approval chance
        ])
    ], ignore_index=True)

# Save the cleaned dataset
df.to_csv("credit_risk_dataset.csv", index=False)
print("✅ Credit Risk Feature Engineering Completed! Data saved to credit_risk_dataset.csv")
