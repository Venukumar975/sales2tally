// SALES2TALLY - Retro Terminal & Download Bridge

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Footer Year
    const yearElem = document.getElementById("year");
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }

    // 2. FAQ Accordion Interaction
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            
            // Close other open items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                const toggle = otherItem.querySelector(".faq-toggle");
                if (toggle) toggle.textContent = "+";
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add("active");
                const toggle = item.querySelector(".faq-toggle");
                if (toggle) toggle.textContent = "−";
            }
        });
    });

    // 3. Vercel Serverless Release Download Bridge
    // Fetches the environment variable download URL without hardcoding
    async function initDownloadLinks() {
        try {
            const res = await fetch("/api/download?json=true");
            if (res.ok) {
                const data = await res.json();
                if (data && data.downloadUrl && data.downloadUrl !== "#") {
                    const mainBtn = document.getElementById("main-download-btn");
                    const navBtn = document.getElementById("nav-download-btn");
                    if (mainBtn) mainBtn.href = data.downloadUrl;
                    if (navBtn) navBtn.href = data.downloadUrl;
                }
            }
        } catch (e) {
            // Local dev mode fallback (uses standard /api/download redirect)
            console.log("Using direct serverless /api/download router");
        }
    }

    initDownloadLinks();
});
