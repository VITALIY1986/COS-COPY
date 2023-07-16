import React from 'react';
import Link from 'next/link';
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";
const ProductList = ({ products, minPrice, maxPrice }) => {
const filteredProducts = products.filter((product) => {
const price = parseFloat(product.price.replace("lei", "").replace(",", ""));
return price >= minPrice && price <= maxPrice;
});
console.log(products)
return (
<>
{filteredProducts.map((product) => (
undefined !== product && 'GroupProduct' !== product.__typename ? (

    <div className="product mb-5   relative bg-white p-2 rounded-sm">



        <Link href={ `/produs/${ product?.slug }`} >
            <a>
                <Image
                    className="object-cover bg-gray-100"
                    width="500"
                    height="500"
                    loading="lazy"
                    sourceUrl={ product?.image?.sourceUrl ?? '' }
                    defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
                    altText={product?.image?.altText ?? product?.slug}
                />
            </a>
            
        </Link>
        <div className="mt-3 text-center pl-2 md:pl-3 font-semibold text-text_title text-lg uppercase">{product.name}</div>
        <div className="product-info text-center pl-2 md:pl-3">
            
        
         {product?.salePrice   ?  <div className='mt-3 flex flex-col'>  <strike className=" text-red-200 text-xl ">{product?.regularPrice}<span ></span></strike><span className=' text-2xl bg-white rounded-full   text-text_title'>{product?.price}  </span></div> :   <div className=" text-2xl text-text_title">{product?.price }<span className='ml-2'></span></div>}
        
            <AddToCartButton product={ product } />
        </div>

    </div>
) : (
    ''
)
))}
</>
);
};

export default ProductList;
