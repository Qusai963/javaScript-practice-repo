person = {
    firstName: 'Qusai',
    lastName: 'Armoush',
    get fullName() {
        return `${person.firstName} ${person.lastName}`;
    },
    set fullName(value) {
        if(typeof value!== 'string')
            throw new Error('the value must be a string.');
        
            const parts = value.split(' ');
            
            if(parts.length < 2)
            throw new Error('Enter a first name and last name');

        this.firstName = parts[0];
        this.lastName = parts[1];
    }
}
try{
    person.fullName = 'Ali';
} catch(err) {
    alert(err);
}

console.log(person.fullName);