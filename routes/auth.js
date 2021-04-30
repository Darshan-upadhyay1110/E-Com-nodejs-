const express = require("express");
const { check, body } = require("express-validator");

const authController = require("../controller/auth");
const User = require('../models/user');

const router = express.Router();

router.get("/login", authController.getLogin);

router.get("/signup", authController.getSignup);

router.post(
    '/login',
    [
      body('email')
        .isEmail()
        .withMessage('Please enter a valid email address.')
        .normalizeEmail(),
      body('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
    ],
    authController.postLogin
  );
  

router.post(
  "/signup",
  [
    check("email")
      .isEmail()
      .withMessage("Please Enter Valid Email Id")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject(

                'Email Already Exists ,  please Enter Diffrent Email.Id'
            )
          }
        });
      })
      .normalizeEmail(),

    body("password", "Please Enter Valid Password Which Has More Than 6 Char")
      .isLength({ min: 6 })
      .isAlphanumeric()
      .trim(),

    body("confirmPassword").trim().custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password Not Matched!");
      }
      return true;
    }),
  ],
  authController.postSignup
);

router.post("/logout", authController.postLogout);

router.get("/reset", authController.getReset);

router.post("/reset", authController.postReset);

router.get("/reset/:token", authController.getNewPassword);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
