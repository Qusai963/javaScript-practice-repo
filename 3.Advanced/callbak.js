let order = (call_production) =>{

    console.log("Order placed. Please call production")
    
      call_production();
    };
    
    let production = () =>{
    
    console.log("Production has started")
    
    };

    order(production);