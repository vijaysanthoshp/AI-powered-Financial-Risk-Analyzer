import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Load processed dataset
df = pd.read_csv("fraud_dataset.csv")

# Select features and target variable
X = df[['amount', 'day_of_week', 'hour_of_day', 'is_weekend']]
y = df['is_fraud']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")
print(classification_report(y_test, y_pred))

# Save the model
import joblib
joblib.dump(model, "fraud_detection_model.pkl")
print("✅ Fraud Detection Model Saved!")
