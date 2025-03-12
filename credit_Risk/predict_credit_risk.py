import joblib
import pandas as pd

# Load trained model
model = joblib.load("credit_risk_model.pkl")

# Test new credit scores (Example: 720)
test_credit_score = pd.DataFrame([[720]], columns=["credit_score"])

# Predict loan approval chance
prediction = model.predict(test_credit_score)

# Convert prediction to readable output
approval_mapping = {0: "Low", 1: "Medium", 2: "High"}
print(f"\n💡 Loan Approval Prediction: {approval_mapping[prediction[0]]}")
