from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder="client/build", static_url_path="")
CORS(app)

# Configure Phi (OpenAI-compatible)
client = OpenAI(api_key=os.getenv("PHI_API_KEY"))

# ---- API Route ----
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")

    if not user_message:
        return jsonify({"error": "Message is required"}), 400

    try:
        response = client.chat.completions.create(
            model="phi-3-mini-128k",   # pick model (phi-3-mini, phi-3-small, phi-3-medium)
            messages=[{"role": "user", "content": user_message}],
            temperature=0.7
        )
        reply = response.choices[0].message.content
    except Exception as e:
        reply = f"Error: {str(e)}"

    return jsonify({"reply": reply})


# ---- Serve React Frontend ----
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


# ---- Main ----
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)
