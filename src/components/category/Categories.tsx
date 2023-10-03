

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { filterByCategory } from '../../features/cat/categorySlice';
// import { RootState } from '../../app/store';

// function Categories() {
//   const dispatch = useDispatch();
//   const { loading, error, foundProducts } = useSelector(
//     (state: RootState) => state.categories
//   );

//   useEffect(() => {
  
//     dispatch(filterByCategory(`categoryId`)); // How To Replace 'yourCategoryID' 
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (foundProducts) {
//     return (
//       <div>
//         <h2>Found Products</h2>
//         <ul>
//           {foundProducts.map((product) => (
//             <li key={product.id}>
//               <h3>{product.title}</h3>
//               <p>{product.description}</p>
//               <p>Price: ${product.price}</p>
            
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }

//   return null;
// }

// export default Categories;

import React from 'react'

const Categories = () => {
  return (
    <div>Categories</div>
  )
}

export default Categories