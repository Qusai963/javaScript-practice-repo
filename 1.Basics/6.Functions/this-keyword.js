const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }, this);
    }
}

/*
        OR
    const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        const self = this;
        this.tags.forEach(function(tag){
            console.log(self.title, tag);
        });
    }
}
*/

/*
        OR using bind method
    const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        }.bind(this));
    }
}
*/

/*
        OR using arrow functions
    const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
}
*/
video.showTags();