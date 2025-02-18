import { jsPDF } from 'jspdf';
import fetch from 'node-fetch';

async function fetchImageData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Image not found');
  }
  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer).toString('base64');
}

function constructMagazineURL(pubConfig, dateStr, page) {
  const dateObj = new Date(dateStr);
  const YYYY = dateObj.getFullYear();
  const MM = String(dateObj.getMonth() + 1).padStart(2, '0');
  const DD = String(dateObj.getDate()).padStart(2, '0');
  return `https://epaper.dotsolution.net/assets/file_media/${pubConfig.id}/${YYYY}/${MM}/${DD}/large/${page}.jpg`;
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', 'https://tyasono.xyz');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { pubKey, dateStr } = req.body;

    // Magazine configurations
    const magazineConfig = {
      the_economist: {
        name: "The Economist",
        id: "4037",
        startPage: 1,
        maxPages: 150
      },
      tempo: {
        name: "TEMPO",
        id: "4036",
        startPage: 3,
        maxPages: 150
      },
      time: {
        name: "TIME",
        id: "4071",
        startPage: 2,
        maxPages: 150
      },
      guardian: {
        name: "Guardian",
        id: "4074",
        startPage: 1,
        maxPages: 150
      },
      bloomberg: {
        name: "Bloomberg",
        id: "4041",
        startPage: 1,
        maxPages: 150
      }
    };

    const pubConfig = magazineConfig[pubKey];
    if (!pubConfig) {
      return res.status(400).json({ error: 'Invalid publication' });
    }

    const pdf = new jsPDF();
    let pageNumber = pubConfig.startPage;
    let addedAnyPage = false;

    while (pageNumber <= pubConfig.maxPages) {
      const imgUrl = constructMagazineURL(pubConfig, dateStr, pageNumber);
      try {
        const base64Data = await fetchImageData(imgUrl);
        if (addedAnyPage) {
          pdf.addPage();
        }
        pdf.addImage(`data:image/jpeg;base64,${base64Data}`, 'JPEG', 10, 10, 190, 277);
        addedAnyPage = true;
        pageNumber++;
      } catch (error) {
        break;
      }
    }

    if (!addedAnyPage) {
      return res.status(404).json({ error: 'No pages found' });
    }

    const pdfBuffer = Buffer.from(pdf.output('arraybuffer'));
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${pubConfig.name}-${dateStr}.pdf`);
    res.send(pdfBuffer);

  } catch (error) {
    console.error('Error generating magazine PDF:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}