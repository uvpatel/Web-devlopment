// Example of passing art details
const artworks = [
    { id: 1, title: "Artwork 1", description: "This is artwork 1.", img: "art1.jpg" },
    { id: 2, title: "Artwork 2", description: "This is artwork 2.", img: "art2.jpg" }
];

// Get artwork detail from URL
const params = new URLSearchParams(window.location.search);
const artId = params.get('id');

// If on art-detail page
if (window.location.pathname.includes('art-detail.html')) {
    const art = artworks.find(a => a.id == artId);
    if (art) {
        document.querySelector('#art-title').textContent = art.title;
        document.querySelector('#art-description').textContent = art.description;
        document.querySelector('#art-img').src = art.img;
    }
}


const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files like HTML, CSS, JS

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact form submitted by ${name}, Email: ${email}, Message: ${message}`);
    res.send('Thank you for contacting us!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
