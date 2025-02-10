from flask import Flask, request, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allows frontend (Next.js) to communicate with Flask API

# Placeholder: Replace this with the actual model server URL on GCP when ready
GCP_MODEL_URL = "http://your-gcp-gpu-ip:5000/predict"

@app.route('/query', methods=['POST'])
def query():
    """
    This endpoint will handle user queries. 
    Future implementation:
    - Send `input` to the AI model running on GCP.
    - Receive the model-generated response.
    - Return it to the frontend.
    """

    data = request.json
    user_input = data.get("input", "").strip()

    if not user_input:
        return jsonify({"response": "No input provided"}), 400

    # Placeholder: Replace with actual model call in the future
    # try:
    #     response = requests.post(GCP_MODEL_URL, json={"input": user_input})
    #     model_response = response.json().get("response", "Error getting response")
    # except requests.RequestException:
    #     model_response = "Failed to reach model server."

    return jsonify({"response": "Not implemented yet"})

@app.route('/health', methods=['GET'])
def health_check():
    """
    Health check endpoint for monitoring.
    Future implementation:
    - Check if the API is running.
    - Optionally verify if the model is reachable.
    """
    return jsonify({"status": "API is running", "model_status": "Not implemented yet"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
