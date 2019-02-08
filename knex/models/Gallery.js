const bookshelf = require('./bookshelf');

class Gallery extends bookshelf.Model{
  get tableName() {return 'gallery';}
  get hasTimestamps() {return false;}

  users(){
    return this.belongsTo('User')
  }
}

module.exports = Gallery;