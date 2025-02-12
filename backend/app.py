from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Placeholder: Replace with actual model server URL on GCP
GCP_MODEL_URL = "http://your-gcp-gpu-ip:5000/predict"

# Define request body model
class QueryRequest(BaseModel):
    input: str

@app.post("/query")
async def query(request: QueryRequest):
    """
    This endpoint handles user queries.
    Future implementation:
    - Send `input` to the AI model running on GCP.
    - Receive the model-generated response.
    - Return it to the frontend.
    """

    user_input = request.input.strip()
    if not user_input:
        raise HTTPException(status_code=400, detail="No input provided")

    # Placeholder: Replace with actual model call in the future
    # try:
    #     response = requests.post(GCP_MODEL_URL, json={"input": user_input})
    #     model_response = response.json().get("response", "Error getting response")
    # except requests.RequestException:
    #     model_response = "Failed to reach model server."

    return {"response": "Not implemented yet"}

@app.get("/health")
async def health_check():
    """
    Health check endpoint for monitoring.
    Future implementation:
    - Check if the API is running.
    - Optionally verify if the model is reachable.
    """
    return {"status": "API is running", "model_status": "Not implemented yet"}

# Run with: uvicorn filename:app --host 0.0.0.0 --port 5001
