document.addEventListener("DOMContentLoaded", function () {
    let summarizeButton = document.getElementById("summarize");

    summarizeButton.addEventListener("click", function () {
        console.log("Summarize button clicked!");

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (!tabs.length) return;
            let activeTab = tabs[0];

            chrome.scripting.executeScript(
                {
                    target: { tabId: activeTab.id },
                    files: ["content.js"]
                },
                () => {
                    if (chrome.runtime.lastError) {
                        console.error("Script injection error:", chrome.runtime.lastError.message);
                    } else {
                        chrome.tabs.sendMessage(activeTab.id, { action: "summarize_page" }, function (response) {
                            if (chrome.runtime.lastError) {
                                console.error("Message failed:", chrome.runtime.lastError.message);
                            } else if (!response) {
                                console.error("No response received from content script.");
                            } else {
                                // Display the summary, handling newlines properly
                                let summaryElement = document.getElementById("output");
                                summaryElement.textContent = response.summary || "No summary found.";
                                
                                // Ensure that newlines are rendered correctly in the popup
                                summaryElement.innerHTML = response.summary.replace(/\n/g, '<br>');
                            }
                        });
                    }
                }
            );
        });
    });
});


