from pymongo import MongoClient
import pandas as pd
import numpy as np
import yfinance as yf

# Connect to MongoDB
uri = "mongodb+srv://vijay:asdf123@cluster0.3wchd.mongodb.net/financial_risk_db"
client = MongoClient(uri)
db = client["financial_risk_db"]
investment_insights = db["investment_insights"]

# Load data into DataFrame
df = pd.DataFrame(list(investment_insights.find()))

# Drop MongoDB _id column if it exists
df.drop(columns=['_id'], errors='ignore', inplace=True)

# Fetch real-time stock market data using Yahoo Finance
def fetch_stock_data(symbol):
    stock = yf.Ticker(symbol)
    hist = stock.history(period="1mo")  # Get last month’s stock data
    return hist['Close'].pct_change().std()  # Calculate stock volatility

# Apply function to fetch stock volatility
df["stock_volatility"] = df["stock_symbol"].apply(fetch_stock_data)

# Encode risk level: Low=0, Moderate=1, High=2
df["risk_level"] = df["risk_level"].map({"Low": 0, "Moderate": 1, "High": 2})

# Save processed data
df.to_csv("investment_risk_dataset.csv", index=False)
print("✅ Investment Feature Engineering Completed! Data saved to investment_risk_dataset.csv")
