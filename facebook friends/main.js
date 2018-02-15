/*jshint esversion:6*/
/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
let facebookProfile = {
  name: "Don Dada 2018",
  friends: 500,
  messages: ["Original Don Dada", "Step inna Yu Face", "Big Yute Nah Play"],
  postMessage: function(message) {
    if (message) {
      facebookProfile.messages.push(message);
    }
  },
  deleteMessage: function(index) {
    if (facebookProfile.messages.length > 0) {
      facebookProfile.messages.splice(index, 1);
    }
  },
  addFriend: function() {
    facebookProfile.friends += 1;
  },
  removeFriend: function() {
    facebookProfile.friends -= 1;
  }
};
