# Deploying Your Game Developer Portfolio to GitHub Pages

Your portfolio is now configured for GitHub Pages deployment! Follow these steps:

## Configuration Done ✅

- ✅ `gh-pages` package installed
- ✅ Deployment scripts added to `package.json`
- ✅ Vite base path configured

## Deployment Steps

### 1. Update Configuration

Before deploying, update these two files with your actual GitHub username and repository name:

**In `/package.json`:**
```json
"homepage": "https://YOURUSERNAME.github.io/REPOSITORY-NAME"
```

**In `/vite.config.ts`:**
```typescript
base: '/REPOSITORY-NAME/'
```

**Special Case:** If your repository is named `yourusername.github.io`, use:
- `homepage: "https://YOURUSERNAME.github.io"`
- `base: '/'`

### 2. Initialize Git Repository

```bash
git init
git add .
git commit -m "Initial commit: Game developer portfolio"
```

### 3. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `game-portfolio`)
3. **Do NOT** initialize with README, .gitignore, or license

### 4. Connect to GitHub

```bash
git remote add origin https://github.com/YOURUSERNAME/REPOSITORY-NAME.git
git branch -M main
git push -u origin main
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your portfolio (`npm run build`)
- Create/update the `gh-pages` branch
- Push the built files to GitHub Pages

### 6. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **gh-pages** branch
4. Click **Save**

Your site will be live at: `https://YOURUSERNAME.github.io/REPOSITORY-NAME/`

## Updating Your Portfolio

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push origin main
npm run deploy
```

## Troubleshooting

### Blank Page After Deployment

If you see a blank page:
1. Check that `base` in `vite.config.ts` matches your repository name
2. Verify `homepage` in `package.json` is correct
3. Clear your browser cache and hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Errors

- Ensure the repository name matches exactly in both config files
- Repository names are case-sensitive

### Changes Not Appearing

- Run `npm run deploy` after every change
- Wait 2-3 minutes for GitHub Pages to update
- Clear browser cache

## Alternative: Manual Deployment

If automatic deployment doesn't work:

```bash
npm run build
cd dist
git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:YOURUSERNAME/REPOSITORY-NAME.git main:gh-pages
cd ..
```

## Notes

- GitHub Pages is free for public repositories
- Custom domains are supported (configure in repository settings)
- HTTPS is automatically enabled
- Site updates may take 2-3 minutes to appear

---

Need help? Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
