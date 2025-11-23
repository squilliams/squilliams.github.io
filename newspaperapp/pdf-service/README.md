# Magazine PDF Generator Service

Backend service for generating PDFs from magazine pages. Deployed on Render.com free tier.

## Features

- Server-side PDF generation (works on all devices including iOS)
- No CORS issues
- Handles memory-intensive operations
- Free hosting on Render.com

## Deployment to Render.com

### Option 1: Deploy with Blueprint (Easiest)

1. Push this code to a GitHub repository
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New" → "Blueprint"
4. Connect your GitHub repository
5. Select the repository containing this `pdf-service` folder
6. Render will automatically detect `render.yaml` and deploy
7. Copy the service URL (e.g., `https://magazine-pdf-generator.onrender.com`)

### Option 2: Manual Deploy

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `magazine-pdf-generator`
   - **Environment**: `Python 3`
   - **Region**: `Oregon (US West)`
   - **Branch**: `master` (or your branch name)
   - **Root Directory**: `newspaperapp/pdf-service`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Plan**: `Free`
5. Click "Create Web Service"
6. Wait for deployment (5-10 minutes)
7. Copy the service URL

## API Endpoint

### POST /generate-pdf

Generate a PDF from magazine pages.

**Request:**
```json
{
  "magazineId": "4037",
  "date": "2024-01-15",
  "magazineName": "The Economist"
}
```

**Response:**
- Returns PDF file as download
- Filename: `{magazineName}-{date}.pdf`

**Example:**
```bash
curl -X POST https://your-service-url.onrender.com/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{
    "magazineId": "4037",
    "date": "2024-01-15",
    "magazineName": "The Economist"
  }' \
  --output magazine.pdf
```

## Update Frontend

After deploying, update the frontend `index.html` to use this service URL:

```javascript
const API_URL = 'https://your-service-url.onrender.com';
```

## Free Tier Limits

Render.com free tier:
- 750 hours/month (enough for 24/7 operation)
- Service spins down after 15 minutes of inactivity
- First request after spin-down may take 30-60 seconds
- No credit card required

## Testing Locally

```bash
# Install dependencies
pip install -r requirements.txt

# Run server
python app.py

# Test endpoint
curl -X POST http://localhost:5000/generate-pdf \
  -H "Content-Type: application/json" \
  -d '{
    "magazineId": "4037",
    "date": "2024-01-15",
    "magazineName": "The Economist"
  }' \
  --output test.pdf
```

## Troubleshooting

### Service is slow on first request
- Free tier services sleep after 15 minutes of inactivity
- First request wakes up the service (30-60 seconds)
- Subsequent requests are fast

### Build fails
- Check that `requirements.txt` is in the root directory
- Verify Python version is 3.11 or compatible

### PDF generation fails
- Check magazine ID and date are correct
- Verify pages exist at the epaper.dotsolution.net URL
- Check Render logs for detailed error messages

## Environment Variables

None required for basic operation. All configuration is done through the API request.
