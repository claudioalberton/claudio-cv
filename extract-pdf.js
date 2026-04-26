const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('linkedInProfile.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log('PDF extracted to pdf_text.txt');
}).catch(function(error) {
    console.error('Error parsing PDF:', error);
});
