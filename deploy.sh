#!/usr/bin/env bash
# Deploy the Next.js portfolio to Vercel (requires `vercel` CLI installed)

set -e
# Ensure we are on the latest code
# git push origin main

# Deploy – the `--prod` flag creates a production deployment
echo "Deploying to Vercel..."
npx vercel --prod
