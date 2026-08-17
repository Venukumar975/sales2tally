# ⚡ SALES2TALLY - Retro Web Landing Page

A retro cyberpunk terminal landing page (Black + Neon Green) built for **SALES2TALLY**, configured for zero-configuration hosting on **Vercel** with dynamic **GitHub Releases** download routing via Environment Variables.

---

## 📁 Project Structure

```text
sales2tally-web/
├── index.html          # Semantic retro terminal landing page
├── style.css           # CRT scanline overlay, neon glow, and responsive layouts
├── script.js          # Interactive FAQ toggles and dynamic release link resolver
├── api/
│   └── download.js     # Vercel serverless redirect reading process.env.DOWNLOAD_URL
├── assets/
│   └── app_icon.png    # High-resolution neon app branding icon
├── vercel.json         # Vercel clean URL routing and security headers
├── package.json        # Project metadata
└── .env.example        # Environment variable reference
```

---

## 🚀 How to Connect to GitHub & Deploy on Vercel

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new) and create a new repository named `sales2tally-web` (or any name you prefer).
2. Push this folder to GitHub:
   ```bash
   cd "C:\Users\pichi\Desktop\sales2tally-web"
   git init
   git add .
   git commit -m "Initial commit of SALES2TALLY retro landing page"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

---

### Step 2: Upload Your Installer as a GitHub Release
1. In your GitHub repository, click on **Releases > Create a new release**.
2. Set Tag version to `v1.0.0` and Release title to `SALES2TALLY v1.0.0 Release`.
3. Drag and drop your compiled installer:
   ```text
   C:\Users\pichi\Desktop\Sales & Purchase Registers\dist\SALES2TALLY_Setup_v1.0.exe
   ```
4. Click **Publish release**.
5. Right-click on the uploaded `SALES2TALLY_Setup_v1.0.exe` in the release assets and copy its link address.
   *(Example: `https://github.com/<USERNAME>/<REPO>/releases/download/v1.0.0/SALES2TALLY_Setup_v1.0.exe`)*

---

### Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **Add New... > Project** and import your `sales2tally-web` GitHub repository.
3. Under **Environment Variables**, add:
   * **Key**: `DOWNLOAD_URL`
   * **Value**: *(Paste your copied GitHub Release .exe download URL from Step 2)*
4. Click **Deploy**.

---

### 🎯 Result
* Your website is live worldwide on your custom Vercel domain (e.g. `https://sales2tally.vercel.app`).
* Every user who clicks **"DOWNLOAD FOR WINDOWS"** will automatically get redirected to your latest GitHub release `.exe`!
* Whenever you release an update, simply update the `DOWNLOAD_URL` variable in Vercel Settings without touching any website code.
