from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

# Uncomment if you want GPT integration
# import openai
# from dotenv import load_dotenv
# load_dotenv()
# openai.api_key = os.getenv("OPENAI_API_KEY")

app = Flask(__name__, static_folder="build")
CORS(app)  # only needed for dev if frontend is separate

# ---- API Route ----
@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.json
    user_message = data.get("message", "")

    # Basic chatbot logic
    if "hello" in user_message.lower():
        reply = "Hi there! How can I help you?"
    elif "how are you" in user_message.lower():
        reply = "I am a bot, so always good! 😄"
    else:
        reply = f"You said: {user_message}"

    # --- GPT Example ---
    # Uncomment below to use OpenAI GPT
    # if user_message:
    #     response = openai.ChatCompletion.create(
    #         model="gpt-3.5-turbo",
    #         messages=[{"role": "user", "content": user_message}]
    #     )
    #     reply = response.choices[0].message.content

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
    app.run(host="0.0.0.0", port=port)
