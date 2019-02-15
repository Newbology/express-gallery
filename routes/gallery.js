const express = require('express');
const router = express.Router();
const Gallery = require('../knex/models/Gallery')

let renderData = {
  photo: null,
  photList: null
}

function isAuthenticated (req, res, next) {
  if(req.isAuthenticated()) { next();}
  else { res.redirect('/'); }
};


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


router.post('/', isAuthenticated, (req,res)=>{
  let body = req.body;
  Gallery
  .forge({
    user_id: req.user.id,
    url: req.body.url,
    author: req.body.author,
    body: req.body.body
  })
  .save(null, {method: 'insert'})
  .then(() => {
    res.redirect('/gallery');
  });
});

router.get('/:id', (req,res)=>{
  let id = req.params.id;
  Gallery
  .fetchAll()
  .then((photoList) =>{
  return renderData.photoList = photoList.toJSON()
  });
  Gallery
  .where('id', '=', id)
  .fetchAll()
  .then((photo) => {
  renderData.photo = photo.toJSON()
    res.render('gallery/post', renderData );
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
  .where('user_id', id)
  .fetchAll()
  .destroy()
  .then(() => {
    res.redirect('/gallery');
  });
});

router.put('/:id', (req,res)=>{
  let id = req.user.id;
  let galleryId = req.params.id;
  let body = req.body;
  delete body._method;
  Gallery
  .forge(body)
  .where('user_id', '=', id)
  .save(null, {method: 'update'})
  .then(() => {
    res.redirect(`/gallery/${galleryId}`);
  });
});


module.exports = router;