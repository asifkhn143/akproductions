const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Video Page
router.get('/', forwardAuthenticated, (req, res) => res.render('videos'));



// Profile
router.get('/profile', ensureAuthenticated, (req, res) =>
  res.render('profile', {
    user: req.user
  })
);

// Videos
router.get('/videos', ensureAuthenticated, (req, res) =>
  res.render('videos', {
    user: req.user
  })
);

// Audios
router.get('/audios', ensureAuthenticated, (req, res) =>
  res.render('audios', {
    user: req.user
  })
);

// Upload
router.get('/upload', ensureAuthenticated, (req, res) =>
  res.render('upload', {
    user: req.user
  })
);

// Members
router.get('/members', ensureAuthenticated, (req, res) =>
  res.render('members', {
    user: req.user
  })
);

// About
router.get('/about', ensureAuthenticated, (req, res) =>
  res.render('about', {
    user: req.user
  })
);

module.exports = router;
