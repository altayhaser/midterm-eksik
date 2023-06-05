class Product {
    constructor(id, title, price, description, image) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }
  
  // Testing the Product class
  const product = new Product(1, "Example Product", 10.99, "This is an example product", "example.jpg");
  console.log(product);



  const productItem = {
    product: {},
    addToCart() {
        console.log(this.product);
    },
    render() {
        return product
    },
  };

  class ProductList {
    constructot() {
        products = [];
    }
  
    fetchProducts() {
    fetch("http://jsonblob.com/1113963111093911552")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
  }

  render() {
        // render the products by looping through the products array and create a new ProductItem instance for each product. Use render method of ProductItem class to get each product element and append it to the `<ul>`.
        this.products.forEach(productItem => {
            console.log(productItem);
            const product = new product
            // productItem.appendchild(<ul></ul>);
        })

  }
};



