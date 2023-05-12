var drink = ['milk', 'beer', 'beer', "milk", "milk"]
for (var i = 1; i < drink.length; i++) {
    if (drink[i] === 'milk') {
        console.log('good');
    } else if (drink[i] === 'beer') {
        console.log('bad');
    }
}