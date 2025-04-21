const express = require('express');

// ROUTER 
const router = express.Router();

// IMPORT POSTS.JS
const posts = require('../posts.js');

// GET ALL JSON
router.get('/', (req, res) => {
    res.json(posts);
});

// MAIN GET POST
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id == postId);
    if (!post) {
        res.send('Post non trovato');
    }
    else{
        res.json(post);
    }
});

// CREATE
router.post('/', (req, res) => {
    res.send(`Creazione nuovo post`);
});

// UPDATE
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} aggiornato`);
});

// MODIFY
router.patch('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} modificato`);
});

// DELETE
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    res.send(`Post con id ${postId} eliminato`);
});

// EXPORT
module.exports = router;