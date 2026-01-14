const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'data', 'tours.ts');
let content = fs.readFileSync(filePath, 'utf8');
// Append extra sentence to every description field if not already present
content = content.replace(/description: "([^"]+)"/g, (match, p1) => {
  if (p1.includes('Enjoy local cuisine')) return match;
  return `description: "${p1} Enjoy local cuisine, cultural immersion, and breathtaking scenery throughout the day."`;
});
fs.writeFileSync(filePath, content, 'utf8');
console.log('Itinerary descriptions enriched.');
