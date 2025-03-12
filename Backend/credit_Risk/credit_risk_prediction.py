import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report
import joblib

# Load the dataset
df = pd.read_csv("credit_risk_dataset.csv")

# ✅ Fix: Check if dataset has all 3 classes
print("Class distribution:\n", df["loan_approval_chance"].value_counts())

# Select features and target variable
X = df[["credit_score"]]  # More features can be added later
y = df["loan_approval_chance"]

# Split dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Evaluate the model
print(f"\n✅ Model Accuracy: {accuracy_score(y_test, y_pred):.2f}")
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Save the trained model
joblib.dump(model, "credit_risk_model.pkl")
print("✅ Credit Risk Model Saved!")
