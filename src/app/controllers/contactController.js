const ContactsRepository = require('../repositories/ContactsRepositorie')

class ContactController {
  index(request, response){
    const contacts = ContactsRepository.findAll();
    response.json(contacts)
  }
  show(){

  }
  store(){

  }
  update(){

  }
  delete(){

  }
}
module.exports = new ContactController();
