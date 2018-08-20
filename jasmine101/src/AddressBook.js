function AddressBook() {
    this.contacts = [];
    this.initialComplete = false;
}

AddressBook.prototype.getInitialContacts = function(cb){
    let self = this;
    setTimeout(function(){
    self.initialComplete = true;
    if(cb){
     return cb();
    } 
    }, 3000);
}

AddressBook.prototype.addContact = function (contact) {
    this.contacts.push(contact);
}

AddressBook.prototype.getContact = function (index) {
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index){
      this.contacts.splice(index,1);
}

AddressBook.prototype.displayContact = function(contact){
    return this.contacts[contact]
}