const ContactsRepository = require('../repositories/ContactsRepositorie')

class ContactController {
  async index(request, response){
    const contacts = await ContactsRepository.findAll();
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
