var days = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 0
};

function numDay(names) {
    return names.map(name => days[name]); // Use 'names' as the parameter name and return the mapped values
}

var names = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
console.log(numDay(names));
