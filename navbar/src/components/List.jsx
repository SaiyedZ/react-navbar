import React, { useState, useRef, useEffect, Fragment } from "react";

const ElectricProductList = ({ theme }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("electricProducts");
    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          { id: 1, name: "Laptop", brand: "HP", price: 10000, stock: 3 },
          { id: 2, name: "Android", brand: "Samsung", price: 3000, stock: 14 },
        ];
  });

  const [newProduct, setNewProduct] = useState({
    name: "",
    brand: "",
    price: "",
    stock: 1,
  });

  const nameInputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("electricProducts", JSON.stringify(products));
  }, [products]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: name === "price" || name === "stock" ? Math.max(1, Number(value)) : value,
    });
  };

  const addProduct = (event) => {
    event.preventDefault();
    if (!newProduct.name || !newProduct.brand || !newProduct.price || newProduct.stock < 1) return;

    const newId = products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    setProducts([...products, { ...newProduct, id: newId }]);
    setNewProduct({ name: "", brand: "", price: "", stock: 1 });
    nameInputRef.current.focus();
  };

  const increaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: product.stock + 1 } : product
      )
    );
  };

  const decreaseQuantity = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, stock: Math.max(1, product.stock - 1) } : product
      )
    );
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const styles = {
    
    pageWrapper: {
     
        minHeight: "100vh",
        width: "100vw",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: theme === "light" ? "#f0f4f8" : "#1a1a1a",
      boxSizing: "border-box",
    }
,
      
    
    container: {
      width: "100%",
      maxWidth: "700px",
      backgroundColor: theme === "light" ? "#ffffff" : "#2c2c2c",
      padding: "30px",
      borderRadius: "12px",
      boxShadow:
        theme === "light"
          ? "0 8px 24px rgba(0, 0, 0, 0.1)"
          : "0 8px 24px rgba(255, 255, 255, 0.05)",
      color: theme === "light" ? "#1f2937" : "#f9fafb",
      margin: "auto",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
      textAlign: "center",
    },
    form: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "15px",
      marginBottom: "30px",
    },
    input: {
      padding: "10px 12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      backgroundColor: theme === "light" ? "#f9f9f9" : "#3a3a3a",
      color: theme === "light" ? "#000" : "#fff",
    },
    button: {
      gridColumn: "span 2",
      padding: "12px",
      backgroundColor: "#4f46e5",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    productList: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    },
    productItem: {
      padding: "15px",
      borderRadius: "10px",
      backgroundColor: theme === "light" ? "#f1f5f9" : "#444",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    productText: {
      flex: "1 1 100%",
      marginBottom: "10px",
      fontSize: "16px",
      textAlign: "left",
    },
    quantityButtons: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    qtyBtn: {
      padding: "5px 10px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: theme === "light" ? "#2563eb" : "#c084fc",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
    },
    deleteButton: {
      backgroundColor: "#ef4444",
      color: "#fff",
      border: "none",
      padding: "6px 12px",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };

  return (
    <Fragment>
      <div style={styles.pageWrapper}>
        <div style={styles.container}>
          <h2 style={styles.heading}>⚡ Products</h2>

          {/* Add Product Form */}
          <form onSubmit={addProduct} style={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={handleInputChange}
              ref={nameInputRef}
              required
              style={styles.input}
            />
            <input
              type="text"
              name="brand"
              placeholder="Brand"
              value={newProduct.brand}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              min="1"
              required
              style={styles.input}
            />
            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={handleInputChange}
              min="1"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>Add Product</button>
          </form>

          {/* Product List */}
          <div style={styles.productList}>
            {products.map((product) => (
              <div key={product.id} style={styles.productItem}>
                <div style={styles.productText}>
                  <strong>{product.name}</strong> ({product.brand}) – ₹{product.price}
                </div>

                <div style={styles.quantityButtons}>
                  <button onClick={() => decreaseQuantity(product.id)} style={styles.qtyBtn}>−</button>
                  <span>{product.stock}</span>
                  <button onClick={() => increaseQuantity(product.id)} style={styles.qtyBtn}>＋</button>
                  <button onClick={() => deleteProduct(product.id)} style={styles.deleteButton}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ElectricProductList;
