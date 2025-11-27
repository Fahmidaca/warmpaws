# 🚀 Netlify Environment Variables Setup

## The Issue
Your Firebase API key error occurs because Netlify needs environment variables set in its dashboard, not just in your local .env file.

## ✅ Solution: Set Netlify Environment Variables

### Step 1: Go to Netlify Dashboard
1. Visit [app.netlify.com](https://app.netlify.com)
2. Select your WarmPaws site
3. Click **"Site settings"**

### Step 2: Add Environment Variables
1. Click **"Environment variables"** in the left menu
2. Click **"Add a variable"** for each one:

| Key | Value |
|-----|-------|
| `VITE_FIREBASE_API_KEY` | `AIzaSyD8KLW2lzK7CRiLchsDyUt3oxoeqrDFIvs` |
| `VITE_FIREBASE_AUTH_DOMAIN` | `warmpaws-app-fa44d.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | `warmpaws-app-fa44d` |
| `VITE_FIREBASE_STORAGE_BUCKET` | `warmpaws-app-fa44d.firebasestorage.app` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | `658484214322` |
| `VITE_FIREBASE_APP_ID` | `1:658484214322:web:df5e311b9f57d840f29a2b` |

### Step 3: Redeploy
1. After adding all variables, go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**

## 🎯 Alternative: Build with Environment Variables
If the above doesn't work, create a production .env file:

```bash
# Copy and rename this to .env.production
VITE_FIREBASE_API_KEY=AIzaSyD8KLW2lzK7CRiLchsDyUt3oxoeqrDFIvs
VITE_FIREBASE_AUTH_DOMAIN=warmpaws-app-fa44d.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=warmpaws-app-fa44d
VITE_FIREBASE_STORAGE_BUCKET=warmpaws-app-fa44d.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=658484214322
VITE_FIREBASE_APP_ID=1:658484214322:web:df5e311b9f57d840f29a2b
```

## ⚡ Quick Test
Once deployed, check your site. The Firebase error should be gone and you can:
- Sign up with real emails
- Login/logout works
- User data saves to your Firebase project
- Check users in Firebase Console → Authentication → Users

**Your Firebase project is ready - Netlify just needs the environment variables!** 🔥