
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useAppSelector } from '../../app/hooks';



// const ProductDetailPage: React.FC = () => {
//   const { productId } = useParams<{ productId: string }>();
//   const product = useAppSelector((state) => state.product.products[productId]);
  

//   if (!product) {
//     // Handle the case where the product is not found.
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="product-detail">
//       <h1>{product?.title}</h1>
//       <img src={product?.images} alt={product.imageAlt} />
//       <p>{product?.description}</p>
//       <p>Price: ${product?.price}</p>
//       {/* Add more product details as needed */}
//     </div>
//   );
// };

// export default ProductDetailPage;

import React from 'react'

const ProductDetailPage = () => {
  return (
    <div>ProductDetailPage</div>
  )
}

export default ProductDetailPage