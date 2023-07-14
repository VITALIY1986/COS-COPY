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
      
	  <title>Lenjerie de pat de calitate, Premium și de lux - Descoperă cea mai bună lenjerie de pat</title>
	  <meta name="description" content="Lenjerie de pat de calitate, Premium și de lux - descoperă confortul suprem și luxul absolut în fiecare noapte. Materiale premium și designuri elegante pentru un dormitor de excepție. Alege rafinamentul și calitatea pentru o experiență de dormit fără egal."/>
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
		
				<div class="mb-10"><h1 class="text-5xl  lg:text-6xl font-bold mb-10">Lenjerie de pat de calitate, Premium și de lux - Descoperă cea mai bună lenjerie de pat la Luxtex</h1><p>Bine ați venit la Luxtex, destinația dumneavoastră de încredere pentru lenjeria de pat de cea mai înaltă calitate, cu un nivel Premium și luxuriant. Suntem mândri să vă oferim o gamă largă de lenjerii de pat, create cu atenție și atenție la detalii, pentru a vă oferi cea mai bună experiență de odihnă și confort.</p><p>Indiferent dacă căutați o lenjerie de pat de calitate superioară, un design exclusiv sau materiale luxuriante, Luxtex vă întâmpină cu o selecție impresionantă. De la seturi de lenjerii de pat din bumbac moale și respirabil, până la lenjerii de pat din mătase fină sau satin delicat, veți găsi opțiuni care se potrivesc stilului și preferințelor dumneavoastră.</p><p>Calitatea și durabilitatea sunt principii de bază pentru Luxtex. Utilizăm materiale premium și tehnici de fabricație de înaltă calitate pentru a vă oferi lenjerii de pat care rezistă în timp și oferă o senzație plăcută la atingere. Fiecare detaliu este atent studiat, de la cusături precise până la finisaje impecabile, pentru a vă asigura că aveți parte de produse de cea mai înaltă calitate.</p><p>Experimentați confortul și rafinamentul pe care îl oferă lenjeriile de pat de lux de la Luxtex. Fie că doriți să transformați dormitorul într-un sanctuar de relaxare sau căutați o notă elegantă și sofisticată, gama noastră variată de modele și culori vă permite să alegeți ceea ce se potrivește cel mai bine stilului dumneavoastră.</p><p>Calitatea superioară, luxul și atenția la detalii sunt caracteristicile care ne definesc. Încrederea clienților noștri este prioritatea noastră, de aceea ne străduim să oferim numai produse excepționale și servicii impecabile.</p><p>Descoperiți cea mai bună lenjerie de pat la Luxtex și transformați dormitorul într-un spațiu de relaxare și rafinament. Vă așteptăm cu o selecție deosebită de lenjerii de pat de calitate superioară, Premium și de lux, care să vă ofere confortul și satisfacția deplină.</p></div>
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