const fs = require('fs');
const csv = require('csv-parser');

// Function to filter and write data to a file
function filterAndWriteData(inputFile, outputFile, filterFunction) {
  const writeStream = fs.createWriteStream(outputFile);

  fs.createReadStream(inputFile)
    .pipe(csv())
    .on('data', (row) => {
      if (filterFunction(row)) {
        writeStream.write(`${JSON.stringify(row)}\n`);
      }
    })
    .on('end', () => {
      console.log(`Filtered data written to ${outputFile}`);
      writeStream.end();
    });
}

// Delete existing files if they exist
['canada.txt', 'usa.txt'].forEach((file) => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
});

// Filter data for Canada and write to canada.txt
filterAndWriteData('input_countries.csv', 'canada.txt', (row) => row.country === 'Canada');

// Filter data for United States and write to usa.txt
filterAndWriteData('input_countries.csv', 'usa.txt', (row) => row.country === 'United States');