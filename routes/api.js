var express = require('express');
var router = express.Router();

var classRetriever = require('../web_scraping/webScrape.js');

// courses = {
//   "cs290": {
//     "001": {
//       "days": "mwf",
//       "time": "3:00pm",
//       "instructor": "Hess, Rob",
//       "crn": "23049",
//       "location": "LInC 210"
//     }
//   },
//   "agri402": {
//     "001": {
//       "days": "tr",
//       "time": "9:00am",
//       "instructor": "Gaebel, K.",
//       "crn": "73008",
//       "location": "ALS 0008"
//     }
//   }
// };
router.get('/:subject_code/:course_code', function(req, res, next) {
  var requestedCourse = req.params.subject_code.toLowerCase() + req.params.course_code.toLowerCase();
  var coursesFromDatabase = classRetriever.getClassJSON(req.params.subject_code.toLowerCase(), req.params.course_code.toLowerCase());
  console.log(coursesFromDatabase);

  if (1==1) {
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(coursesFromDatabase));
  } else {
    res.send("Course not found");
  }
  
});

module.exports = router;