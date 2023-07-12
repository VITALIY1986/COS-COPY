import { useState } from 'react';
import { v4 } from "uuid";
import { getUpdatedItems } from "../../../functions";
import {Cross, Loading} from "../../icons";

const CartItem = ( {
	                   item,
	                   products,
					   updateCartProcessing,
	                   handleRemoveProductClick,
	                   updateCart,
                   } ) => {

	const [productCount, setProductCount] = useState( item.qty );

	/*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */
	const handleQtyChange = ( event, cartKey ) => {

		if ( process.browser ) {

			event.stopPropagation();

			// If the previous update cart mutation request is still processing, then return.
			if ( updateCartProcessing ) {
				return;
			}

			// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
			const newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;

			// Set the new qty in state.
			setProductCount( newQty );

			if ( products.length ) {

				const updatedItems = getUpdatedItems( products, newQty, cartKey );

				updateCart( {
					variables: {
						input: {
							clientMutationId: v4(),
							items: updatedItems
						}
					},
				} );
			}

		}
	};


	return (
		
		<div className="woo-next-cart-item " key={ item.productId }>
          
			<div className=" flex mt-2 mb-3">
				{/* Remove item */}
				
                <img width="200" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={ item.image.title }/>
			</div>
			
				
		
		<span className='text-2xl font-semibold upp'>	{ item.name }</span>
            <div className='mt-6'>PRICE -<span className="ml-3 woo-next-cart-element font-semibold">{ ( 'string' !== typeof item.price ) ? item.price.toFixed( 2 ) : item.price }</span></div>
		

			{/* Qty Input */ }
            <div className='mt-2'>
			<span className="woo-next-cart-element woo-next-cart-qty">CANTITATE - 
				{/* @TODO Need to update this with graphQL query */ }
				<input
					type="number"
					min="1"
					data-cart-key={ item.cartKey }
					className={ `woo-next-cart-qty-input form-control ml-3 font-semibold ${ updateCartProcessing ? 'opacity-25 cursor-not-allowed' : '' } ` }
					value={ productCount }
					onChange={ ( event ) => handleQtyChange( event, item.cartKey ) }
				/>
			</span>
            </div>
            <div className='mt-2 '>
			TOTAL -	<span className='ml-3 font-semibold'>{ ( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice }</span>
                </div>
		</div>
		
	)
};

export default CartItem;