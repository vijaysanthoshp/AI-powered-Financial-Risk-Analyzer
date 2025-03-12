import joblib
import pandas as pd

# Load the trained model
model = joblib.load("fraud_detection_model.pkl")

# Example transaction for testing (Amount, Day of Week, Hour, Weekend)
test_transaction = pd.DataFrame([[5000, 2, 14, 0]], columns=['amount', 'day_of_week', 'hour_of_day', 'is_weekend'])

# Predict fraud probability
prediction = model.predict(test_transaction)
print("Fraud Prediction:", "Fraudulent" if prediction[0] == 1 else "Legitimate")
