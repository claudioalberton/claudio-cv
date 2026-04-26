import PyPDF2
import sys

try:
    with open('linkedInProfile.pdf', 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open('pdf_text.txt', 'w', encoding='utf-8') as out:
            out.write(text)
        print("Successfully extracted PDF to pdf_text.txt")
except Exception as e:
    print(f"Error: {e}")
