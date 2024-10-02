//your JS code here. If required.
// Create the student object
const student = {
    name: "Alice"
};

// Add getKeys method to Object prototype
Object.prototype.getKeys = function() {
    return Object.keys(this); // Return an array of keys
};

// Example usage
console.log(student.getKeys()); // Output: ["name"]
