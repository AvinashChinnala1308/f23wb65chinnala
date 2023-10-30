var express = require('express');
var router = express.Router();

var organizations = [
    {
      organizationName: 'Bosch Global Software Technologies',
      location: 'Hyderabad, India',
      industry: 'Technology',
      numberOfEmployees: 3000,
      revenue: 50000000,
      website: 'https://www.bosch-softwaretechnologies.com/en/our-company/about-us/',
    },
    {
      organizationName: 'Wipro',
      location: 'Whitefields, Inida',
      industry: 'Technology',
      numberOfEmployees: 50000,
      revenue: 7000000,
      website: 'https://www.wipro.com/',
    },
    {
        organizationName: 'Apps Associates',
        location: 'Uppal, Inida',
        industry: 'Technology',
        numberOfEmployees: 5000,
        revenue: 7000000,
        website: 'https://appsassociates.com/',
      }



];

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('organizations', { title: 'Search Results' });
  });

  module.exports = router;