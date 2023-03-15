import React, { useState } from "react";
import ProductTable from './ProductTable';


const AddProductForm = ({ onSubmit }) => {

    const Field = ({ label, id, ...rest }) => (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} />
        </div>
    );

    // to manage productId - increment by 1 each time a new product is added...
    const [productId, setProductId] = useState(1);

    const [product, setProduct] = useState({
        productId: productId,
        productName: '',
        productCategory: '',
        supplier: '',
        price: '',
    });

    // array of all products...
    const [products, setProducts] = React.useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setProducts(products.concat(product))
        const newProductId = productId + 1;
        setProductId(newProductId);
        setProduct({
            productId: newProductId,
            productName: '',
            productCategory: '',
            supplier: '',
            price: '',
        });
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
                    Product From
                </h1>
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mbsc-form-group">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="productName">
                            Product Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="productName"
                            type="text"
                            name="productName"
                            value={product.productName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="productCategory">
                            Product Category
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="productCategory"
                            type="text"
                            name="productCategory"
                            value={product.productCategory}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="supplier">
                            Supplier
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="supplier"
                            type="text"
                            name="supplier"
                            value={product.supplier}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="price"
                            type="text"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Add Product
                        </button>
                    </div>
                </form>
                {products && <ProductTable products={products} />}
            </div>
        </div>
    );
};

export default AddProductForm