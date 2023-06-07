const {uuid} = require('uuidv4')


const contacts = [
  {
    id: uuid(),
    name: 'Bryan',
    Phone: '15487464',
    categoryid: uuid(),
  },
]

class ContactsRepository {
  findAll(){
    return new Promise((resolve) => resolve(contacts))
  }
}

module.exports = new ContactsRepository();
