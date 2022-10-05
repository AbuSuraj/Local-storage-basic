// use local storage to manage cart data
const addToDb = cosmetic =>{
    console.log(cosmetic)
    const {id,price, name} = cosmetic;
    let shoppingCart ={};
    //   get the shopping cart
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
    //    shoppingCart.name= name;
        const newQuantity = quantity+1;
        shoppingCart[id]=newQuantity
        //  localStorage.setItem(id,newQuantity)
    }
    else{
        // localStorage.setItem(id,1)
        shoppingCart[id] = 1; 
    }
    shoppingCart.name= name;
    localStorage.setItem("shopping-cart",JSON.stringify(shoppingCart));
}

const removeFromeDb = id => {
    let shoppingCart ={};
    
          const storedCart = localStorage.getItem("shopping-cart");
        shoppingCart = JSON.parse(storedCart);
        const quantity = shoppingCart[id];
        if(quantity>0){
            let newQuantity = quantity -1;
            shoppingCart[id] = newQuantity;
            localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart))
        }
        else {
             delete shoppingCart[id];
             delete shoppingCart["name"];
             localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
             alert("no item available for this product")
        }
}
export {addToDb, removeFromeDb}