const startProcessing = () => {
    const products = [
        {
        name: "Laptop",
        category: "Electronics",
        price: 1000,
        quantity: 5,
        inStock: true,
        },
        {
        name: "Phone",
        category: "Electronics",
        price: 500,
        quantity: 0,
        inStock: false,
        },
        {
        name: "Shirt",
        category: "Apparel",
        price: 20,
        quantity: 100,
        inStock: true,
        },
        {
        name: "Jeans",
        category: "Apparel",
        price: 40,
        quantity: 50,
        inStock: true,
        },
        {
        name: "TV",
        category: "Electronics",
        price: 1500,
        quantity: 3,
        inStock: true,
        },
        {
        name: "Hat",
        category: "Apparel",
        price: 15,
        quantity: 200,
        inStock: true,
        },
    ];

    const discountCategory = "Apparel";
    const discountRate = 0.1; // 10% discount
    console.log(processProducts(products, discountCategory, discountRate));
    };

    const processProducts = (products, discountCategory, discountRate) => {
    // Your code goes here

        const section = document.createElement("section");
        section.className = "product-list";
        const newProducts = [];

        for (let i = 0; i < products.length; i++){
            if (products[i].inStock === true){
                let productValue = products[i].price * products[i].quantity;
                if (products[i].category === discountCategory){
                    productValue = productValue * (1 - discountRate);
                }

                product = {
                    name: products[i].name,
                    category: products[i].category,
                    discountedTotalValue: productValue 
                }
                newProducts.push(product);

                section.innerHTML = ` 
                    <h3>${product}</h3>
                `
            }
        }
        
        return newProducts;
    };

startProcessing()