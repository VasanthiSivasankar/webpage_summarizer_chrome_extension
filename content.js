function extractPageContent() {
    let pageContent = '';

    // Extract content from all headings (h1, h2, h3, h4, h5, h6) tags
    let headings = document.querySelectorAll('h3');

    // Loop through all headings and add them to the pageContent
    headings.forEach(heading => {
        let headingText = heading.innerText.trim();

        // Exclude FAQ sections by checking heading content
        if (!headingText.toLowerCase().includes("faq")) {
            pageContent += headingText + '\n';  // Add heading to content with a newline
        }
    });

    // Remove any FAQ sections using common classes or IDs
    let faqSections = document.querySelectorAll('.faq, .faq-section, .faqs, .faq-container, #faq');
    faqSections.forEach(faq => faq.remove()); // Remove FAQ sections from the DOM

    // Trim the content and ensure no extra spaces
    let cleanedContent = pageContent.trim();
    
    console.log("Extracted content (headings only, FAQ removed):", cleanedContent); // For debugging
    return cleanedContent;  // Return the cleaned content
}

// Listen for message from popup.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "summarize_page") {
        console.log("Received summarize request!");

        // Extract the page content (headings only)
        let pageText = extractPageContent();

        // Send the headings back as the summary
        sendResponse({ summary: pageText });

        // Ensure the port stays open for async responses
        return true;
    }
});










