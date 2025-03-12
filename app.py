from flask import Flask, request, jsonify
import joblib
import pandas as pd
import os

app = Flask(__name__)

# Load models from respective folders
CREDIT_RISK_MODEL = joblib.load("credit_Risk/credit_risk_model.pkl")
FRAUD_MODEL = joblib.load("fraud_Detection/fraud_detection_model.pkl")
INVESTMENT_MODEL = joblib.load("Investment/investment_risk_model.pkl")

# 1️⃣ Fraud Detection Endpoint
@app.route("/predict_fraud", methods=["POST"])
def predict_fraud():
    data = request.get_json()
    transaction_data = pd.DataFrame([data])  # Convert input to DataFrame
    
    prediction = FRAUD_MODEL.predict(transaction_data)
    result = "Fraudulent" if prediction[0] == 1 else "Legitimate"

    return jsonify({"Fraud Prediction": result})

# 2️⃣ Credit Risk Prediction Endpoint
@app.route("/predict_credit_risk", methods=["POST"])
def predict_credit_risk():
    data = request.get_json()
    credit_data = pd.DataFrame([data], columns=["credit_score"])
    
    prediction = CREDIT_RISK_MODEL.predict(credit_data)
    approval_mapping = {0: "Low", 1: "Medium", 2: "High"}

    return jsonify({"Loan Approval Chance": approval_mapping[prediction[0]]})

# 3️⃣ Investment Risk Prediction Endpoint
@app.route("/predict_investment_risk", methods=["POST"])
def predict_investment_risk():
    data = request.get_json()
    risk_data = pd.DataFrame([data])  # Convert input to DataFrame
    
    prediction = INVESTMENT_MODEL.predict(risk_data)
    risk_mapping = {0: "Low", 1: "Moderate", 2: "High"}

    return jsonify({"Investment Risk": risk_mapping[prediction[0]]})

if __name__ == "__main__":
    app.run(debug=True)
