import Layout from "../src/components/Layout";

import client from '../src/components/ApolloClient';
import ProductHome from "../src/components/ProductHomePage";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";

import Head from "next/head"
import HeroCarousel from "../src/components/home/hero-carousel";




import ParentCategoryBlock from "../src/components/category/category-block/ParentCategoryBlock";

import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image'
import Link from 'next/link';
import Script from 'next/script';


export default function Home (props) {

	
	




	
	
	const { productCategories,heroCarousel,featuredproducts } = props || {};




     
	
	
	

	return (
	
		
			<Layout>
				<Head>
      
	  <title>Vitamine și minerale naturale direct de la producător. C.O.S. Laboratories</title>
	  <meta name="description" content="Vitamine și minerale de la producător. Deoarece suntem producători, oferim preț favorabil și calitate înaltă."/>
	  <meta name="google-site-verification" content="5sT3_P7tKTbA9RuTPkiQlpDpXBK84GG89RcmtVHR-Dw" />
	  <meta name="robots" content="index,follow" />
	</Head>
				<Script strategy="lazyOnload">
        {`
            window.replainSettings = { id: '57c23d8c-ad58-4f57-b0bc-d65f546cf0d4' };
            (function(u){var s=document.createElement('script');s.async=true;s.src=u;
            var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
            })('https://widget.replain.cc/dist/client.js');
        `}
      </Script>
				{/*Hero 1*/}
	<div  className="main  ">
	<HeroCarousel heroCarousel={heroCarousel}/>
	<div className="wt-braun"></div>
			
	
















	
			{/*Categories*/}
			<h2 className="text-2xl ml-3 uppercase mt-20 text-center font-semibold">CATALOGE</h2>
			<div className=" flex flex-wrap  justify-around my-10">
				
				{ productCategories.length ? (
							productCategories
							.filter(category => category.slug !== "par-landing")
							.filter(category => category.slug !== "uncategorized")
							.filter(category => category.slug !== "vitamine-minerale")
							.filter(category => category.slug !== "advertising-package")
							.filter(category => category.slug !== "offers")
							.filter(category => category.slug !== "aloe-vera-pacheta-3-1")
							.filter(category => category.slug !== "pachete-promotionale")
							.map( category => <ParentCategoryBlock category={ category }/> )
						) : '' }
			
			</div>
			


	




			

		









	
		
	{/*Hero 5*/}	
	<div className="products container mx-auto my-10  ">
	<h2 className="text-2xl ml-3 uppercase mt-20 text-center font-semibold">PRODUCE</h2>	
		
			<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
				{ featuredproducts.length ? (
							featuredproducts.map( product => <ProductHome key={ product.id }  product={ product }/> )
						) : '' }
							</div>
					
			
							
					
				
			

			
				</div>
			
			</div>
		
				
			</Layout>
		
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	return {
		props: {
			questionsAnswers:data?.category?.posts?.nodes ? data.category.posts.nodes : [],
			productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : [],
			featuredproducts: data?.featuredproducts?.nodes ? data.featuredproducts.nodes : []
		},
		revalidate: 1
	}

};