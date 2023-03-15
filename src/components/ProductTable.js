import React, { useState, useEffect } from "react";

const ProductTable = ({ products }) => {
  return (
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Product ID</th>
          <th className="px-4 py-2">Product Name</th>
          <th className="px-4 py-2">Product Category</th>
          <th className="px-4 py-2">Supplier</th>
          <th className="px-4 py-2">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.productId}>
            <td className="border px-4 py-2">{product.productId}</td>
            <td className="border px-4 py-2">{product.productName}</td>
            <td className="border px-4 py-2">{product.productCategory}</td>
            <td className="border px-4 py-2">{product.supplier}</td>
            <td className="border px-4 py-2">{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable