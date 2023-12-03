import React, { useState } from "react";

const ProductForm: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product submitted:", { productName, productPrice, productDescription });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Nome do Produto
        </label>
        <input
          type="text"
          id="productName"
          className="mt-1 p-2 w-full border rounded-md"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
          Preço do Produto
        </label>
        <input
          type="text"
          id="productPrice"
          className="mt-1 p-2 w-full border rounded-md"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
          Descrição do Produto
        </label>
        <textarea
          id="productDescription"
          className="mt-1 p-2 w-full border rounded-md"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Cadastrar Produto
      </button>
    </form>
  );
};

export default ProductForm;
