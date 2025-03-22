 🌿 DataLeaf

DataLeaf is a multi-functional, NLP-powered web application that enhances the way users interact with documents and text. From summarizing PDFs to analyzing sentiment and correcting grammar, DataLeaf brings intelligent language capabilities into a simple, browser-based interface.

---

🔍 Features

- 📄 PDF Summarizer
  Upload a PDF and receive a concise, LLM-based summary powered by OpenAI APIs. Supports multi-page and complex documents. User can also ask follow-up questions based on the PDF uploaded.

- ✍️ Grammar Auto Corrector  
  Paste any text and get real-time grammar corrections using transformer-based NLP models. Ideal for students, bloggers, and professionals.

- 😊 Sentiment Analyzer
  Analyze the emotional tone of a paragraph or CSV-based reviews (like Amazon data). Results are categorized into **positive**, **negative**, or **neutral** sentiments using traditional ML-based techniques for efficiency.

- ❓ Dynamic FAQ Generator  
  Ask any question related to your uploaded document. Uses vector similarity and LLM inference to return the most relevant answers.

---

 📁 Project Structure

DataLeaf/
├── DOCUMENTS/                # User-uploaded PDFs
├── OUTPUT/                   # Generated summaries and results
├── PDF Sumaarizer/           # Notebook for LLM-based summarization
├── Webpage/                  # Frontend (HTML, CSS, JS)
│   ├── index.html            # Home page
│   ├── grammar.html          # Grammar correction UI
│   ├── sentiment.html        # Sentiment analysis UI
│   └── faq.html              # FAQ interaction page
├── static/                   # Assets (CSS/JS)
├── app.py                    # Flask backend (planned)
├── .gitignore
└── README.md


 🚀 How to Use

 📄 PDF Summarizer

1. Run the notebook:  
   
   jupyter notebook "PDF Sumaarizer/DataLeaf Summarizer.ipynb"

2. Upload your PDF into the `DOCUMENTS` folder.
   
4. The summary will be generated in the `OUTPUT` folder.

 ✍️ Grammar Auto Corrector

> Under development using NLP correction models like `transformers` or `language_tool`.

Expected flow:
- Paste text into `grammar.html`.
- Get corrected grammar using backend logic.

 😊 Sentiment Analysis

- Accepts paragraph text or a `.csv` file with reviews.
- Uses traditional NLP pipelines (e.g., `TextBlob`, `sklearn`, `nltk`) for local and fast inference.
- Results shown on the webpage or console.

❓ Dynamic FAQ System

- Users can input questions based on uploaded documents.
- Uses vector-based similarity + LLMs (via LangChain or GROQ) to find accurate answers.

---

 🌐 Web Interface

Open `Webpage/LandingPage/index.html` in your browser to explore the UI.  
Each feature has its own page (`grammar.html`, `sentiment.html`, `faq.html`) designed for modular integration.

---

## 🧠 Tech Stack

| Layer         | Technology                             |
|---------------|----------------------------------------|
| Frontend      | HTML, CSS, JavaScript                  |
| Backend       | Python, Flask (Planned), Jupyter       |
| NLP Models    | OPEN API, LangChain, Scikit-learn, NLTK|
| PDF Handling  | PyMuPDF (`fitz`), unstructured         |

---

## 📌 To-Do / Enhancements

- [ ] Complete Flask backend integration
- [ ] Real-time grammar correction on frontend
- [ ] File download option for summaries
- [ ] Improve FAQ performance using FAISS or Chroma DB

---

## 🧑‍💻 Author

Ritvik Gupta
📬 [GitHub](https://github.com/Ritvik172Gupta)  
📌 Passionate about Data-Analysis, Web, and Clean UX

Miliind Vishwakarma
📬 [GitHub](https://github.com/milind-vi)  
📌 Passionate about AI-ML, and MERN

Debanjana Pal
📬 [GitHub](https://github.com/milind-vi)  
📌 Passionate about AI, and Backend


