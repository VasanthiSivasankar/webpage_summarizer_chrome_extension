# Chrome Webpage Summarizer

Chrome Webpage Summarizer is a Chrome Extension that uses the Hugging Face Inference API to generate concise, context-aware summaries of webpages. The extension extracts the main textual content from a webpage, preprocesses it by removing irrelevant sections, and generates a readable summary to help users quickly understand lengthy content.

---

## Overview

Long-form articles, blogs, and documentation often require significant time to read. This extension simplifies information consumption by extracting meaningful webpage content and generating AI-powered summaries directly within the browser.

The project demonstrates browser extension development, DOM manipulation, asynchronous API integration, and client-side text processing.

---

## Features

* Generate AI-powered summaries of webpages
* Extract relevant webpage content automatically
* Filter unnecessary webpage elements before summarization
* Real-time summarization using the Hugging Face Inference API
* Simple and lightweight Chrome Extension interface

---

## Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript

**AI**

* Hugging Face Inference API

**Browser APIs**

* Chrome Extension API
* DOM API
* Fetch API

---

## Project Structure

```text
Chrome-Webpage-Summarizer/
│
├── .gitignore
├── axios.min.js
├── background.js
├── content.js
├── icon.png
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
└── README.md
```

---

## How It Works

1. The user opens any webpage in Google Chrome.
2. The extension extracts the visible textual content from the webpage.
3. Unnecessary sections such as navigation bars, advertisements, and footers are removed.
4. The cleaned content is sent to the Hugging Face Inference API.
5. The AI model generates a concise summary.
6. The generated summary is displayed inside the extension popup.

---

## Architecture

```text
User Opens Webpage
        │
        ▼
Chrome Extension
        │
        ▼
Extract Webpage Content
        │
        ▼
Preprocess and Clean Text
        │
        ▼
Hugging Face Inference API
        │
        ▼
Generate Summary
        │
        ▼
Display Summary
```

---

## Installation

### Clone the Repository

```bash
git clone https://github.com/VasanthiSivasankar/Chrome-Webpage-Summarizer.git
```

### Load the Extension

1. Open Google Chrome.
2. Navigate to `chrome://extensions/`.
3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the project folder.

The extension is now ready to use.

---

## Screenshots

Add screenshots of:

* Extension popup
* Generated summary
* Extension running on a webpage

---

## Challenges

* Extracting only meaningful content from webpages with different HTML structures.
* Filtering unnecessary elements while preserving important information.
* Handling asynchronous API requests efficiently.
* Working within Chrome Extension security and permission constraints.

---

## Future Enhancements

* Support multiple summarization models.
* Adjustable summary length.
* Multi-language summarization.
* Export summaries as PDF or Markdown.
* Save summary history.
* Offline summarization using local language models.

---

## Skills Demonstrated

* Chrome Extension Development
* JavaScript
* DOM Manipulation
* REST API Integration
* Asynchronous Programming
* API Integration
* Client-side Text Processing

---

## Author

**Vasanthi Sivasankar**

GitHub: https://github.com/VasanthiSivasankar

LinkedIn: https://linkedin.com/in/vasanthi-sivasankar-98b3b4290

---

## License

This project is intended for educational and portfolio purposes.
