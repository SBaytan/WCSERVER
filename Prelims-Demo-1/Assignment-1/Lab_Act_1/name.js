module.exports = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }
}

/* Baytan Shem Ardelee Pioleen M.
   WD 201
   2/2/22
   Lab Act 1 
*/