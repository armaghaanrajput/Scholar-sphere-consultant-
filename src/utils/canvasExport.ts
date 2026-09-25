/**
 * Utility to download canvas, SVG or generated graphics as high-resolution PNG files
 */
import { PosterData } from '../types';

export function downloadDataUrlAsFile(dataUrl: string, filename: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function exportSvgToPng(
  svgElement: SVGSVGElement,
  filename: string,
  targetWidth = 1080,
  targetHeight = 1080
) {
  try {
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const URL = window.URL || window.webkitURL || window;
    const blobURL = URL.createObjectURL(svgBlob);

    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, targetWidth, targetHeight);
        ctx.drawImage(image, 0, 0, targetWidth, targetHeight);
        const pngUrl = canvas.toDataURL('image/png', 1.0);
        downloadDataUrlAsFile(pngUrl, filename);
      }
      URL.revokeObjectURL(blobURL);
    };
    image.src = blobURL;
  } catch (err) {
    console.error('Error exporting SVG to PNG:', err);
  }
}

/**
 * High-resolution canvas rasterizer for official campaign posters
 */
export function generatePosterPng(poster: PosterData) {
  const width = 1200;
  const height = 1750;
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Background
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, height);

  // 1. Top Brand Header Bar
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, 0, width, 120);

  // Logo mark on top left
  // Draw Orange Sun Arc
  ctx.fillStyle = '#F58220';
  ctx.beginPath();
  ctx.arc(80, 56, 32, -Math.PI * 0.8, Math.PI * 0.1);
  ctx.lineTo(80, 56);
  ctx.fill();

  // Draw Navy Cap
  ctx.fillStyle = '#0B2545';
  ctx.beginPath();
  ctx.moveTo(80, 42);
  ctx.lineTo(115, 54);
  ctx.lineTo(80, 66);
  ctx.lineTo(45, 54);
  ctx.closePath();
  ctx.fill();

  // Draw Cap Base
  ctx.beginPath();
  ctx.ellipse(80, 68, 18, 10, 0, 0, Math.PI);
  ctx.fill();

  // White dot on cap
  ctx.fillStyle = '#FFFFFF';
  ctx.beginPath();
  ctx.arc(80, 70, 3, 0, Math.PI * 2);
  ctx.fill();

  // Brand Name
  ctx.fillStyle = '#0B2545';
  ctx.font = '900 32px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Scholar Sphere', 130, 55);

  ctx.font = '800 13px "Plus Jakarta Sans", sans-serif';
  ctx.letterSpacing = '5px';
  ctx.fillText('CONSULTANTS', 132, 78);
  ctx.letterSpacing = '0px';

  // Header Right Side text
  ctx.textAlign = 'right';
  ctx.fillStyle = '#64748B';
  ctx.font = '700 14px sans-serif';
  ctx.fillText('PATTOKI • KASUR • PUNJAB', width - 50, 50);
  ctx.fillStyle = '#FF7A00';
  ctx.font = '900 16px sans-serif';
  ctx.fillText('100% Free Consultation', width - 50, 75);
  ctx.textAlign = 'left';

  // Divider line
  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 110);
  ctx.lineTo(width, 110);
  ctx.stroke();

  // 2. Poster Hero Header
  let heroGrad = ctx.createLinearGradient(0, 110, width, 400);
  if (poster.theme === 'gold') {
    heroGrad.addColorStop(0, '#0B2545');
    heroGrad.addColorStop(1, '#1A3F6B');
  } else if (poster.theme === 'verification') {
    heroGrad.addColorStop(0, '#0B2545');
    heroGrad.addColorStop(1, '#781515');
  } else {
    heroGrad.addColorStop(0, '#0B2545');
    heroGrad.addColorStop(1, '#0F3057');
  }

  ctx.fillStyle = heroGrad;
  ctx.fillRect(0, 110, width, 320);

  // Category Tag
  ctx.fillStyle = '#FF7A00';
  ctx.font = '900 16px sans-serif';
  ctx.fillText(poster.category.toUpperCase(), 60, 160);

  // Badge if available
  if (poster.badge) {
    ctx.fillStyle = poster.theme === 'gold' ? '#FACC15' : '#FF7A00';
    ctx.roundRect(width - 260, 138, 200, 34, 8);
    ctx.fill();
    ctx.fillStyle = poster.theme === 'gold' ? '#0F172A' : '#FFFFFF';
    ctx.font = '900 14px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(poster.badge, width - 160, 161);
    ctx.textAlign = 'left';
  }

  // Poster Main Title
  ctx.fillStyle = poster.theme === 'gold' ? '#FACC15' : '#FFFFFF';
  ctx.font = '900 42px "Plus Jakarta Sans", sans-serif';
  ctx.fillText(poster.title, 60, 220);

  // Poster Subtitle
  ctx.fillStyle = '#E2E8F0';
  ctx.font = '600 20px sans-serif';
  ctx.fillText(poster.subtitle, 60, 265);

  let currentY = 460;

  // Warning or Gold box
  if (poster.theme === 'verification') {
    ctx.fillStyle = '#FEF2F2';
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 3;
    ctx.roundRect(60, currentY, width - 120, 110, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#B91C1C';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('⚠ ALERT: FAKE & UNAPPROVED COLLEGES IN PUNJAB', 85, currentY + 38);

    ctx.fillStyle = '#7F1D1D';
    ctx.font = '600 15px sans-serif';
    ctx.fillText('Always verify college registration via Punjab Parents Corner or PNMC Council before admission.', 85, currentY + 70);
    ctx.fillText('Scholar Sphere verifies any college 100% free of charge.', 85, currentY + 92);
    currentY += 135;
  } else if (poster.theme === 'gold') {
    ctx.fillStyle = '#FFFBEB';
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3;
    ctx.roundRect(60, currentY, width - 120, 110, 12);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#B45309';
    ctx.font = '900 18px sans-serif';
    ctx.fillText('★ 100% FREE EDUCATION FOR LABOUR WORKERS CHILDREN', 85, currentY + 38);

    ctx.fillStyle = '#78350F';
    ctx.font = '600 15px sans-serif';
    ctx.fillText('Children of industrial and mill workers are legally entitled to 100% FREE tuition & hostel.', 85, currentY + 70);
    ctx.fillText('We assist with full Punjab Workers Welfare Fund (PWWF) documentation.', 85, currentY + 92);
    currentY += 135;
  }

  // Content Blocks
  poster.contentBlocks.forEach((block, idx) => {
    // Section Heading
    ctx.fillStyle = '#0B2545';
    ctx.font = '900 22px sans-serif';
    ctx.fillText(`${idx + 1}. ${block.heading.toUpperCase()}`, 60, currentY);

    ctx.strokeStyle = '#E2E8F0';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(60, currentY + 10);
    ctx.lineTo(width - 60, currentY + 10);
    ctx.stroke();

    currentY += 40;

    // Points
    block.points.forEach((pt) => {
      ctx.fillStyle = '#F8FAFC';
      ctx.strokeStyle = '#E2E8F0';
      ctx.lineWidth = 1.5;
      ctx.roundRect(60, currentY, width - 120, 48, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#10B981';
      ctx.font = '900 18px sans-serif';
      ctx.fillText('✔', 85, currentY + 30);

      ctx.fillStyle = '#1E293B';
      ctx.font = '700 17px sans-serif';
      ctx.fillText(pt, 120, currentY + 30);

      currentY += 58;
    });

    currentY += 20;
  });

  // Footer: 3 Mandatory lines
  const footerY = height - 200;
  ctx.fillStyle = '#0B2545';
  ctx.fillRect(0, footerY, width, 200);

  // Trust ribbon
  ctx.fillStyle = '#FF7A00';
  ctx.fillRect(0, footerY, width, 45);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 16px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(poster.trustLine, width / 2, footerY + 28);

  // Contact line
  ctx.fillStyle = '#FACC15';
  ctx.font = '900 22px sans-serif';
  ctx.fillText(poster.officialContact, width / 2, footerY + 95);

  // Physical address & owner
  ctx.fillStyle = '#CBD5E1';
  ctx.font = '600 16px sans-serif';
  ctx.fillText(poster.officialFooter, width / 2, footerY + 135);
  ctx.fillText('Direct Helpline: +92 329 4403898 • Email: scholarsphereconsultant@gmail.com', width / 2, footerY + 165);
  ctx.textAlign = 'left';

  // Download
  const pngUrl = canvas.toDataURL('image/png', 1.0);
  downloadDataUrlAsFile(pngUrl, `scholar-sphere-poster-${poster.number}.png`);
}
