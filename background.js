import { API_KEY } from "./config.js";

const API_URL = "https://api-inference.huggingface.co/models/facebook/bart-large-cnn";


chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.action === "summarize_text") {
        try {
            let response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ inputs: request.text })
            });

            let data = await response.json();
            console.log("API Response:", data); // Debugging

            if (data && data[0] && data[0].summary_text) {
                sendResponse({ summary: data[0].summary_text });
            } else {
                sendResponse({ error: "No summary received." });
            }
        } catch (error) {
            console.error("Error fetching summary:", error);
            sendResponse({ error: "Failed to summarize." });
        }
    }
    return true; // Ensures response is sent asynchronously
});
