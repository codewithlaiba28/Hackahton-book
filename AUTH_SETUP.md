# Better-Auth Setup Guide

## 1. Create `.env.local` file

Create a `.env.local` file in the project root with the following variables:

```env
DATABASE_URL=postgresql://postgres.[PROJECT]:[PASSWORD]@[REGION].pooler.supabase.com:6543/postgres
BETTER_AUTH_SECRET=your-random-32-character-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
```

### Get your DATABASE_URL from Supabase:
1. Go to your Supabase project
2. Navigate to Settings → Database
3. Copy the "Connection String" (Session mode)
4. Replace `[PASSWORD]` with your actual database password

### Generate BETTER_AUTH_SECRET:
Run in terminal (or use any random string generator):
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## 2. Initialize Database Tables

Run better-auth CLI to create required tables:

```bash
npx @better-auth/cli generate
```

This creates:
- `user` table
- `session` table  
- `account` table
- `verification` table

## 3. Test Locally

```bash
npm start
```

Visit:
- http://localhost:3000/signup - Create an account
- http://localhost:3000/signin - Sign in

## 4. Deploy to Vercel

### Add Environment Variables to Vercel:
1. Go to Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   - `DATABASE_URL` (same as local)
   - `BETTER_AUTH_SECRET` (same as local)
   - `BETTER_AUTH_URL` (e.g., `https://your-site.vercel.app`)

### Deploy:
```bash
git add .
git commit -m "Add authentication"
git push
```

Vercel will auto-deploy.

## 5. Add Auth Button to Navbar (Optional)

To add the auth button to the navbar, swizzle the Navbar component:

```bash
npm run swizzle @docusaurus/theme-classic Navbar -- --eject
```

Then edit `src/theme/Navbar/index.tsx` and add:

```tsx
import AuthButton from '@site/src/components/Auth/AuthButton';

// Inside the navbar JSX, add:
<AuthButton />
```

## Notes

- The chatbot and authentication are now both globally available
- Sign-up/Sign-in pages are styled to match the book theme
- Session persists across page reloads
- Better-Auth handles password hashing, sessions, and security automatically
