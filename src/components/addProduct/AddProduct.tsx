// // AddProduct.tsx

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addProduct}  from './addSlice'; // Import the action to add a product

// const AddProduct: React.FC = () => {
//   const dispatch = useDispatch();
//   const [productData, setProductData] = useState({
//     title: '',
//     price: 0,
//     description: '',
//     categoryId: 1, // Set the default category ID
//     images: [''], // Provide a default image URL
//   });

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setProductData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Dispatch the action to add a new product
//     dispatch(addProduct(productData));
//   };

//   return (
//     <div>
//       <h2>Add New Product</h2>
//       <form>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={productData.title}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Price:</label>
//           <input
//             type="number"
//             name="price"
//             value={productData.price}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={productData.description}
//             onChange={handleInputChange}
//           />
//         </div>
//         {/* Add fields for categoryId and images */}
//         <div>
//           <button type="button" onClick={handleSubmit}>
//             Add Product
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;
import React from 'react'

const AddProduct = () => {
  return (
    <div>AddProduct</div>
  )
}

export default AddProduct