import fs from 'fs/promises';
import path from 'path';
import { DOMParser } from 'xmldom';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const reportsDir = path.join(__dirname, 'junit-reports');

try {
  const files = await fs.readdir(reportsDir);
  const latestReport = files[files.length - 1];
  
  if (!latestReport) throw new Error('No report files found');

  const reportPath = path.join(reportsDir, latestReport);
  console.log(`Looking at report: ${reportPath}`);

  const xmlText = await fs.readFile(reportPath, 'utf-8');
  console.log(`File size: ${xmlText.length} bytes`);

  new DOMParser().parseFromString(xmlText, 'application/xml');
  console.log('XML is good!');

  const lines = xmlText.split('\n').filter(line => line.trim());
  console.log(`Total lines: ${lines.length}`);

} catch (error) {
  console.error(`${error.message}`);
}