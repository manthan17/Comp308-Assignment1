let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render("templates/home.ejs", { title: 'Manthan Shah' });
});

router.get('/about', (req, res, next) => {
  res.render("templates/about.ejs", { title: 'About' });
});

router.get('/products', (req, res, next) => {
  res.render("templates/projects.ejs", { title: 'Projects' });
});

router.get('/services', (req, res, next) => {
  res.render("templates/services.ejs", { title: 'Services' });
});

router.get('/contact', (req, res, next) => {
  res.render("templates/contact.ejs", { title: 'Contacts' });
});


module.exports = router;
