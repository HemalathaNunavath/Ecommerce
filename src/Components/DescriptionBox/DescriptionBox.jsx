// import React from 'react'
// import './DescriptionBox.css'

// const DescriptionBox = () => {
//   return (
//    <div className = "descriptionbox">
//     <div className="descriptionbox-navigator">
//     <div className="description-tabs">
//         <div className= "description-nav-box">
//             Description
//         </div>
//         <div className = "description-nav-box fade">
//             Reviews(122)
//         </div>
//         </div>
//         <div className = "descriptionbox-description">
//         An e-commerce website is an online platform that facilitates the buying and selling of products or services
//                  over the internet. It serves as a virtual marketplace where business and individuals can showcase their products, interact with
//                  customers. and conduct transactions without the need for a physical presence, E-commerce websites
//                  have gained immense popularity due to their accessiblity, and the global reach they offer.
//                  E-commerce websites typically display products or services along with detailed descriptions, images,prices,and any available varaiations (e.g.,size,colors).Each product usually has its
//                   own dedicated page with relevant information.   
//         </div>
//     </div>
//    </div>
//   )
// }
// export default DescriptionBox


import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      {/* Tabs Section (Reviews first, Description second) */}
      <div className="descriptionbox-navigator">
        <div className="description-nav-box fade">Reviews (122)</div>
        <div className="description-nav-box">Description</div>
      </div>

      {/* Description Text Below Tabs */}
      <div className="descriptionbox-description">
        <p>
          An e-commerce website is an online platform that facilitates the buying and selling of products or services
          over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products,
          interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites
          have gained immense popularity due to their accessibility and the global reach they offer.
        </p>
        <p>
          E-commerce websites typically display products or services along with detailed descriptions, images, prices, and
          any available variations (e.g., size, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
