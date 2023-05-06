async function getProducts() {
    try{
       
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json();
      return data;
      

    } catch (e) {
        console.error(e);
    }
} 

getProducts();

async function productRate() {
    const products = await getProducts();

 console.log("Products with a rating higher then 4.5 :")
 
    for (product of products.products){
        if (product.rating > 4.5){
           
            console.log(product.brand)
        } 
    }
}
productRate();