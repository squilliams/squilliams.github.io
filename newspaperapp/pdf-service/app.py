from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import requests
from PIL import Image
from io import BytesIO
import img2pdf
import os
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

@app.route('/')
def index():
    return jsonify({
        'status': 'ok',
        'message': 'Magazine PDF Generator API',
        'endpoints': {
            '/generate-pdf': 'POST - Generate PDF from magazine pages'
        }
    })

@app.route('/generate-pdf', methods=['POST'])
def generate_pdf():
    try:
        data = request.json
        magazine_id = data.get('magazineId')
        date_str = data.get('date')  # Format: YYYY-MM-DD
        magazine_name = data.get('magazineName', 'Magazine')

        if not magazine_id or not date_str:
            return jsonify({'error': 'magazineId and date are required'}), 400

        # Convert date format from YYYY-MM-DD to YYYY/MM/DD for API
        date_obj = datetime.strptime(date_str, '%Y-%m-%d')
        formatted_date = date_obj.strftime('%Y/%m/%d')

        # Base URL for images
        base_url = f"https://epaper.dotsolution.net/assets/file_media/{magazine_id}/{formatted_date}/large"

        # Find available pages
        print(f"Checking for available pages...")
        available_pages = []
        max_pages = 150  # Maximum pages to check

        for page_num in range(1, max_pages + 1):
            img_url = f"{base_url}/{page_num}.jpg"
            try:
                response = requests.head(img_url, timeout=5)
                if response.status_code == 200:
                    available_pages.append(page_num)
                else:
                    # Stop checking once we hit a missing page
                    break
            except Exception as e:
                print(f"Error checking page {page_num}: {e}")
                break

        if not available_pages:
            return jsonify({'error': 'No pages found for this edition'}), 404

        print(f"Found {len(available_pages)} pages")

        # Download and process images
        images = []
        for page_num in available_pages:
            img_url = f"{base_url}/{page_num}.jpg"
            print(f"Downloading page {page_num}...")

            try:
                response = requests.get(img_url, timeout=10)
                if response.status_code == 200:
                    # Load image
                    img = Image.open(BytesIO(response.content))

                    # Convert to RGB if needed (for JPEG compatibility)
                    if img.mode != 'RGB':
                        img = img.convert('RGB')

                    # Save to bytes
                    img_bytes = BytesIO()
                    img.save(img_bytes, format='JPEG', quality=85)
                    img_bytes.seek(0)
                    images.append(img_bytes.getvalue())
            except Exception as e:
                print(f"Error processing page {page_num}: {e}")
                continue

        if not images:
            return jsonify({'error': 'Failed to process any images'}), 500

        # Generate PDF
        print("Generating PDF...")
        pdf_bytes = img2pdf.convert(images)

        # Save to temporary file
        pdf_filename = f"{magazine_name.replace(' ', '_')}-{date_str}.pdf"
        pdf_path = f"/tmp/{pdf_filename}"

        with open(pdf_path, 'wb') as f:
            f.write(pdf_bytes)

        print(f"PDF generated successfully with {len(images)} pages")

        # Send file
        return send_file(
            pdf_path,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=pdf_filename
        )

    except Exception as e:
        print(f"Error generating PDF: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
