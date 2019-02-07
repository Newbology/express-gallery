const express = require('express');
const router = express.Router();
const knex = require('../knex/index');

router.get('/', (req,res)=>{
  knex('gallery')
  .select('author', 'url', 'body')
  .then((data) => {
    
    res.render('gallery/index', { data });
  });
});

router.get('/new', (req,res)=>{
  res.render('gallery/new')
});

router.get('/:id', (req,res)=>{
  let id = req.params.id;
  knex('gallery')
  .select('author', 'url', 'body')
  .where('id', '=', id)
  .then((post) => {
    res.render('gallery/post', { post });
  });
});


router.post('/gallery', (req,res)=>{
  let body = req.body;
  knex('gallery')
  .insert({
    url: body.url,
    author: body.author,
    body: body.body
  })
  .then(() => {
    res.redirect('gallery');
  });
});

router.get('/:id/edit', (req,res)=>{
  let id = req.params.id;
  knex('gallery')
  .select('id', 'author', 'url', 'body')
  .where('id', '=', id)
  .then((post) => {
    res.render('gallery/edit', post[0]);
  });
});

router.put('/gallery/:id', (req,res)=>{
  let id = req.params.id;
  let body = req.body;
  knex('gallery')
  .where('id', '=', id)
  .update(body)
  .then(() => {
    res.redirect(`/gallery/${id}`);
  });
});

router.delete('/gallery:id', (req,res) =>{
  let id = req.params.id;
  knex('gallery')
  .where('id', '=', id)
  .del()
  .then(() => {
    res.redirect('/gallery');
  });
});

module.exports = router;