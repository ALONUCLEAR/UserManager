var express = require('express');
var router = express.Router();

const database = {
    isAdmin: (id) => true,
    isOrganization: (id) => true,
    isTeacher: (id) => true,
    isStudent: (id) => true,
    isValidToken: (token) => true,
};

/* is User an Admin */
router.get('/users/:id/isAdmin', function(req, res, next) {
  res.send(database.isAdmin(req.params.id));
});

/* is User an Organization */
router.get('/users/:id/isOrganization', function(req, res, next) {
    res.send(database.isOrganization(req.params.id));
});

/* is User a Student */
router.get('/users/:id/isStudent', function(req, res, next) {
    res.send(database.isStudent(req.params.id));
});
  
/* is User a Teacher */
router.get('/users/:id/isTeacher', function(req, res, next) {
    res.send(database.isTeacher(req.params.id));
});

/* is Token Valid */
router.get('/isValidToken/:token', function(req, res, next) {
    res.send(database.isValidToken(req.params.token));
});

module.exports = router;
