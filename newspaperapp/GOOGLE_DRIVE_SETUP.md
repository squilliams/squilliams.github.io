# Google Drive Integration Setup

To enable the "Save to Google Drive" feature for magazine PDFs, you need to set up a Google Cloud Project and obtain a Client ID.

## Steps to Set Up Google Drive API

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on "Select a project" → "New Project"
3. Enter a project name (e.g., "Magazine Downloader")
4. Click "Create"

### 2. Enable Google Drive API

1. In your project dashboard, go to "APIs & Services" → "Library"
2. Search for "Google Drive API"
3. Click on it and press "Enable"

### 3. Configure OAuth Consent Screen

1. Go to "APIs & Services" → "OAuth consent screen"
2. Select "External" user type
3. Click "Create"
4. Fill in the required fields:
   - App name: "Magazine Downloader"
   - User support email: Your email
   - Developer contact information: Your email
5. Click "Save and Continue"
6. On the Scopes page, click "Add or Remove Scopes"
7. Add the scope: `https://www.googleapis.com/auth/drive.file`
8. Click "Save and Continue"
9. Add test users (your email) if needed
10. Click "Save and Continue"

### 4. Create OAuth Client ID

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth client ID"
3. Select "Web application"
4. Enter a name: "Magazine Downloader Web Client"
5. Under "Authorized JavaScript origins", add:
   - `http://localhost` (for local testing)
   - Your production domain (e.g., `https://yourusername.github.io`)
6. Under "Authorized redirect URIs", add:
   - `http://localhost` (for local testing)
   - Your production domain (e.g., `https://yourusername.github.io`)
7. Click "Create"
8. **Copy the Client ID** (it will look like: `123456789-abc123.apps.googleusercontent.com`)

### 5. Update the Application

1. Open `newspaperapp/index.html`
2. Find the line (around line 1242):
   ```javascript
   client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com', // User needs to replace this
   ```
3. Replace `'YOUR_CLIENT_ID.apps.googleusercontent.com'` with your actual Client ID
4. Save the file

### 6. Test the Integration

1. Open the application in your browser
2. Select a magazine and date
3. Click "Download" to view the magazine pages
4. Click "Save to Google Drive"
5. You'll be prompted to sign in with Google
6. Grant the necessary permissions
7. The PDF will be uploaded to your Google Drive

## How It Works

When you click "Save to Google Drive":

1. The app generates a PDF from all available magazine pages
2. You're prompted to sign in to your Google account
3. The app uploads the PDF to your Google Drive
4. You'll receive a success message once complete

## Troubleshooting

### "Failed to initialize Google Drive API"
- Make sure your Client ID is correctly configured
- Verify that the Google Drive API is enabled in your Google Cloud Project
- Check that your domain is listed in the authorized origins

### "Google sign-in cancelled or failed"
- Make sure you're using a browser that allows pop-ups
- Try signing in to Google in a separate tab first
- Check that you've added your email as a test user in the OAuth consent screen

### "Upload failed"
- Check your internet connection
- Verify that the scope `https://www.googleapis.com/auth/drive.file` is enabled
- Make sure you granted the necessary permissions

## Privacy & Security

- The app only requests permission to create new files in your Drive
- It cannot access or modify existing files
- Your credentials are never stored by the application
- Authentication is handled directly by Google

## Alternative: Download PDF Locally

If you don't want to set up Google Drive integration, you can always use the "Download as PDF" button to save the magazine PDF to your local device.
