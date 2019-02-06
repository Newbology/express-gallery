const express = require('express');
const router = express.Router();
const knex = require('../database');

router.get('/', (req,res)=>{
  knex('gallery')
  .select('author', 'picture', 'body')
  .then(() => {
    res.render('gallery/index')
  })
});

router.get('/:id', (req,res)=>{
  let id = Number(req.params.id);
  knex()
});
router.get('/gallery/new', (req,res)=>{});
router.post('/gallery', (req,res)=>{});
router.get('/gallery/:id/edit', (req,res)=>{});
router.put('/gallery/:id', (req,res)=>{});
router.delete('/gallery:id', (req,res) =>{});

module.exports = router;