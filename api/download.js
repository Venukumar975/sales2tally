// Vercel Serverless Function to route downloads to the GitHub release URL configured in Vercel Environment Variables

export default function handler(req, res) {
    // Read configured GitHub Release URL from Vercel Environment Variables
    const downloadUrl = 
        process.env.DOWNLOAD_URL || 
        process.env.NEXT_PUBLIC_DOWNLOAD_URL || 
        process.env.GITHUB_RELEASE_URL || 
        "";

    // If client requested JSON metadata
    if (req.query.json === "true") {
        return res.status(200).json({
            success: true,
            downloadUrl: downloadUrl || "#"
        });
    }

    // Direct download redirect
    if (downloadUrl && downloadUrl.startsWith("http")) {
        return res.redirect(302, downloadUrl);
    }

    // Fallback if environment variable is not yet configured in Vercel dashboard
    return res.status(200).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>SALES2TALLY - Download Configuration</title>
            <style>
                body { background: #050505; color: #00ff66; font-family: monospace; padding: 40px; text-align: center; }
                .box { border: 1px solid #00ff66; padding: 30px; max-width: 600px; margin: 40px auto; border-radius: 8px; }
                a { color: #fff; background: #00ff66; color: #000; padding: 10px 20px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block; margin-top: 20px; }
            </style>
        </head>
        <body>
            <div class="box">
                <h2>[ DOWNLOAD URL NOT CONFIGURED ]</h2>
                <p>Please set <code>DOWNLOAD_URL</code> or <code>GITHUB_RELEASE_URL</code> in your Vercel Project Environment Variables to your GitHub Release installer .exe link.</p>
                <a href="/">[ RETURN TO HOMEPAGE ]</a>
            </div>
        </body>
        </html>
    `);
}
