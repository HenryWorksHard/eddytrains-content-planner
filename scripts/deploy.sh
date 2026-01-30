#!/bin/bash
# Quick content planner deploy helper
# Usage: ./deploy.sh "commit message"

PLANNER_DIR="/Users/cmpdbot/clawd/eddytrains/content-planner"

cd "$PLANNER_DIR"

# Build and deploy to GitHub Pages
echo "Building and deploying..."
npm run deploy

# Commit source changes
echo "Committing source..."
git add -A
git commit -m "${1:-Content planner update}"
git push

echo "✓ Deployed and pushed!"
