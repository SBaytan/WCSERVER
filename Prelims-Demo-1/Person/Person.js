//Baytan Shem Ardelee Pioleen M.
//2075 WCSERVER

module.exports = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + ' ' + lastName;
    }
}