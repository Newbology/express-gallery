const bookshelf = require('./bookshelf');

class User extends bookshelf.Model{
  get tableName() { return 'users';}
  get hasTimestamps() {return true;}

  users(){
    return this.hasMany('Gallery')
  }
}

module.exports = bookshelf.model('User', User);