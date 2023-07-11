var express = require('express');
var router = express.Router();

const database = {
    isAdmin: (id) => true,
    isOrganization: (id) => true,
    isTeacher: (id) => true,
    isStudent: (id) => true,
};

/* is User an Admin */
router.get('/:id/isAdmin', function(req, res, next) {
  res.send(database.isAdmin(req.params.id));
});

/* is User an Organization */
router.get('/:id/isOrganization', function(req, res, next) {
    res.send(database.isOrganization(req.params.id));
});

/* is User a Student */
router.get('/:id/isStudent', function(req, res, next) {
    res.send(database.isStudent(req.params.id));
});
  
/* is User a Teacher */
router.get('/:id/isTeacher', function(req, res, next) {
    res.send(database.isTeacher(req.params.id));
});

module.exports = router;
