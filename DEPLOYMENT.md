# Deployment Guide

Your React + Supabase application is ready for production deployment. The built files are in the `dist/` folder.

## Quick Deploy Options

### Option 1: Netlify (Recommended)

1. Push your code to GitHub (or connect your repo)
2. Go to [netlify.com](https://netlify.com) and sign up
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click Deploy

Your site will be live in seconds with automatic deployments on every push.

### Option 2: Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project"
4. Import your Git repository
5. Vercel auto-detects Vite settings
6. Click Deploy

Your app is now live with automatic deployments.

### Option 3: Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Select your Firebase project
5. Public directory: `dist`
6. Configure as single-page app: Yes
7. Deploy: `firebase deploy`

### Option 4: Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to any static hosting service
3. Set up redirect rules to point to `index.html` for client-side routing

## Environment Variables

Your Supabase credentials are already configured in the `.env` file and will be included in the build. Ensure your deployment platform doesn't expose these in the browser console (they're already anon keys, which is safe).

## Post-Deployment

1. Test the application at your deployed URL
2. Verify authentication works
3. Test creating/deleting notes
4. Check browser console for any errors

## Performance

Your app is optimized for production:
- Code splitting enabled
- CSS minified
- JavaScript bundled and minified
- Gzip compression ready

Build size: ~320KB (JavaScript) + ~8KB (CSS) uncompressed
