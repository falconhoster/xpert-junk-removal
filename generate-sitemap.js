/**
 * Sitemap Generator for Xpert Junk Removal
 * Run with: node generate-sitemap.js
 *
 * This script scans all HTML files and generates an updated sitemap.xml
 */

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://xpertjunkremoval.co.nz';
const ROOT_DIR = __dirname;

// Priority mapping based on page type/location
const getPriority = (filePath) => {
    if (filePath === 'home.html' || filePath === 'index.html') return '1.0';
    if (filePath.includes('pricing') || filePath.includes('household-junk')) return '0.9';
    if (filePath.startsWith('services/') && !filePath.includes('mixed') && !filePath.includes('general') && !filePath.includes('one-off') && !filePath.includes('heavy')) return '0.8';
    if (filePath.startsWith('locations/') && (filePath.includes('central') || filePath.includes('north') || filePath.includes('west') || filePath.includes('south') || filePath.includes('east'))) return '0.8';
    return '0.7';
};

// Get change frequency based on page type
const getChangeFreq = (filePath) => {
    if (filePath === 'home.html' || filePath === 'index.html') return 'weekly';
    return 'monthly';
};

// Recursively find all HTML files
const findHtmlFiles = (dir, fileList = [], relativePath = '') => {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const relPath = relativePath ? `${relativePath}/${file}` : file;

        if (fs.statSync(filePath).isDirectory()) {
            // Skip node_modules and hidden directories
            if (!file.startsWith('.') && file !== 'node_modules') {
                findHtmlFiles(filePath, fileList, relPath);
            }
        } else if (file.endsWith('.html')) {
            fileList.push(relPath);
        }
    });

    return fileList;
};

// Generate sitemap XML
const generateSitemap = () => {
    const today = new Date().toISOString().split('T')[0];
    const htmlFiles = findHtmlFiles(ROOT_DIR);

    // Sort files: home first, then services, then locations
    htmlFiles.sort((a, b) => {
        if (a === 'home.html' || a === 'index.html') return -1;
        if (b === 'home.html' || b === 'index.html') return 1;
        if (a.startsWith('services/') && !b.startsWith('services/')) return -1;
        if (b.startsWith('services/') && !a.startsWith('services/')) return 1;
        return a.localeCompare(b);
    });

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    htmlFiles.forEach(file => {
        // Convert file path to URL
        let url = file.replace(/\\/g, '/');

        // Handle home page
        if (url === 'home.html' || url === 'index.html') {
            url = '';
        }

        const fullUrl = `${DOMAIN}/${url}`;
        const priority = getPriority(file);
        const changefreq = getChangeFreq(file);

        xml += '    <url>\n';
        xml += `        <loc>${fullUrl}</loc>\n`;
        xml += `        <lastmod>${today}</lastmod>\n`;
        xml += `        <changefreq>${changefreq}</changefreq>\n`;
        xml += `        <priority>${priority}</priority>\n`;
        xml += '    </url>\n';
    });

    xml += '</urlset>\n';

    return xml;
};

// Main execution
const sitemap = generateSitemap();
const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Sitemap generated successfully!`);
console.log(`Location: ${sitemapPath}`);
console.log(`Total URLs: ${(sitemap.match(/<url>/g) || []).length}`);
