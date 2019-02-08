const express = require('express');
const router = express.Router();
const knex = require('../knex/index');
const Gallery = require('../knex/models/Gallery')

router.get('/', (req,res)=>{
  Gallery
  .fetchAll()
  .then((data) => {
   data = data.toJSON()
    res.render('gallery/index', { data });
  });
});

router.get('/new', (req,res)=>{
  res.render('gallery/new')
});


router.post('/', (req,res)=>{
  let body = req.body;
  Gallery
  .forge({
    url: body.url,
    author: body.author,
    body: body.body
  })
  .save(null, {method: 'insert'})
  .then(() => {
    res.redirect('/gallery');
  });
});

router.get('/:id', (req,res)=>{
  let id = req.params.id;
  Gallery
  .where('id', '=', id)
  .fetchAll()
  .then((post) => {
    post = post.toJSON();
    res.render('gallery/post', { post });
  });
});


router.get('/:id/edit', (req,res)=>{
  let id = req.params.id;
 Gallery
  .where('id', '=', id)
  .fetchAll()
  .then((post) => {
    post = post.toJSON();
    res.render('gallery/edit', post[0]);
  });
});

router.delete('/:id', (req,res) =>{
  let id = req.params.id;
  Gallery
  .where('id', '=', id)
  .del()
  .save()
  .then(() => {
    res.redirect('/');
  });
});

router.put('/:id', (req,res)=>{
  let id = req.params.id;
  let body = req.body;
  delete body._method;
  Gallery
  .forge(body)
  .where('id', '=', id)
  .save(null, {method: 'update'})
  .then(() => {
    res.redirect(`/gallery/${id}`);
  });
});


module.exports = router;