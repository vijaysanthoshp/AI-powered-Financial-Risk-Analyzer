import requests

url = "http://127.0.0.1:5000/predict_credit_risk"
data = {"credit_score": 700}

response = requests.post(url, json=data)
print(response.json())  # Expected: {"Loan Approval Prediction": "High"}
