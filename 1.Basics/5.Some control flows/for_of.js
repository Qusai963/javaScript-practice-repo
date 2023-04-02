let colors = ['red', 'green', 'blue'];

for ( let color of colors ) 
    console.log( color ); // red green blue

    console.log( '**********************' ); 

// for objects
let circle = {
     radius: 1,
     darw: function(){ 
        console.log('drawing circle');
}
};

// for keys in objects
for(let keys of Object.keys(circle))
    console.log(keys); // radius draw

    console.log( '**********************' ); 

for(let entry of Object.entries(circle))
    console.log(entry); //[ 'radius', 1 ]
                        //[ 'darw', [Function: darw] ]

if('radius' in circle) console.log('yes');                        
