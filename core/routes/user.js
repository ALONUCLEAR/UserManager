var express = require('express');
var router = express.Router();
const {getUserByID, createUser, changeRoleByUserId, changePasswordByUserId, deleteUserByID} = require("../controllers/user");

/* GET users listing. */
router.get('/:id', async (req, res) => {
    try {
      const user = await getUserByID(req.params.id);
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send("error when getting user: " + err);
    }
  });

router.post('/create', async (req, res) => {
    try {
      const user = await createUser(req.body.user);
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send("error when create user: " + err);
    }
  });
  
router.post('/update', async (req, res) => {
    try {
      const user = await createUser(req.body.user);
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send("error when update user: " + err);
    }
  });

router.post('/setRole/:id', async (req, res) => {
    try {
      await changeRoleByUserId(req.params.id, req.body.role);
      res.status(200).send("Role changed successfully ");
    } catch (err) {
      res.status(500).send("error when update user: " + err);
    }
  });


router.post('/setPassword/:id', async (req, res) => {
    try {
      await changePasswordByUserId(req.params.id, req.body.password);
      res.status(200).send("Password changed successfully ");
    } catch (err) {
      res.status(500).send("error when change password: " + err);
    }
  });


router.delete('/delete/:id',async (req, res) => {
    try {
      await deleteUserByID(req.params.id);
      res.status(200).send("User deleted successfully ");
    } catch (err) {
      res.status(500).send("Error when deleting password: " + err);
    }
  });

module.exports = router;
