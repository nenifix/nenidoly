# nenido

A greyscale todo app with Supabase auth + PostgreSQL.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- A [Supabase](https://supabase.com) project

## Setup

1. Clone the repo:

   ```bash
   git clone https://github.com/nenifix/nenidoly.git
   cd nenidoly
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Copy `.env` to the project root (or create it from `.env.example`) and fill in your Supabase credentials:

   ```bash
   cp .env.example .env
   ```

4. Apply the database schema in your Supabase dashboard:

   - Go to **SQL Editor** in your Supabase project
   - Paste and run the contents of `schema.sql`

5. Start the server:

   ```bash
   npm start
   ```

   The app runs at `http://localhost:3000`.

## Deploy on Hostinger

1. Push your code to GitHub (or upload via FTP, excluding `node_modules`).
2. In Hostinger hPanel, go to **Hosting → Manage → Advanced → Node.js**.
3. Set **Entry point** to `server.js` and **Application mode** to `Production`.
4. Add environment variables:

   | Variable | Value |
   |---|---|
   | `SUPABASE_URL` | `https://<your-project>.supabase.co` |
   | `SUPABASE_ANON_KEY` | Your Supabase anon key |
   | `PORT` | `3000` |

5. The app will auto-install and start.

## Tech Stack

- **Frontend:** Vanilla JS, CSS custom properties (dark/light mode)
- **Backend:** Express.js
- **Auth & Database:** Supabase (PostgreSQL + Row Level Security)