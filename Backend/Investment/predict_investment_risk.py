import joblib
import pandas as pd
import yfinance as yf

# Load trained model
model = joblib.load("investment_risk_model.pkl")

# Fetch real-time stock volatility
def get_stock_volatility(symbol):
    stock = yf.Ticker(symbol)
    hist = stock.history(period="1mo")  # Get last month's stock data
    return hist['Close'].pct_change().std()  # Calculate volatility

# Test new stock symbol (Example: Tesla "TSLA")
stock_symbol = "TSLA"
stock_volatility = get_stock_volatility(stock_symbol)

# Predict risk level
test_data = pd.DataFrame([[stock_volatility]], columns=["stock_volatility"])
prediction = model.predict(test_data)

# Convert prediction to readable output
risk_mapping = {0: "Low", 1: "Moderate", 2: "High"}
print(f"\n💡 Investment Risk Prediction for {stock_symbol}: {risk_mapping[prediction[0]]}")
