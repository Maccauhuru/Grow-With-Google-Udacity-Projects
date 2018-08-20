describe("Address Book",function (){
it("Should be able to add new contact",function(){
    const addressBook = new AddressBook();
    const thisContact = new Contact();
    addressBook.addContact(thisContact);
expect(addressBook.getContact(0)).toBe(thisContact);
});

it("Should be able to delete contact",function(){
    const addressBook = new AddressBook();
    const thisContact = new Contact();

    addressBook.addContact(thisContact);
    addressBook.deleteContact(0);
expect(addressBook.deleteContact(0)).not.toBeDefined();
});

it('Should be able to get contact',function(){
    const addressBook = new AddressBook();
    const thisContact = new Contact();

    addressBook.addContact(thisContact);
    addressBook.getContact(0);
expect(addressBook.getContact(0)).toBe(thisContact);
});
});



describe('Async Address Book', function(){
    let addressBook = new AddressBook();
        beforeEach(function(done) {
            addressBook.getInitialContacts(function () {
                done();
            });
        });

    it('Should Grab Initial Contacts',function (done) {
        expect(addressBook.initialComplete).toBe(true);
        done();
    });
});



