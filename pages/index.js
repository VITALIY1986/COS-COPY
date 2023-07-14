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
      
	  <title>Lenjerie de pat de calitate, Premium și de lux în Iași - Descoperă cea mai bună lenjerie de pat pentru confortul suprem și luxul absolut.</title>
	  <meta name="description" content="Lenjerie de pat de calitate, Premium și de lux în Iași - Descoperă confortul suprem și luxul absolut în fiecare noapte. Materiale premium și designuri elegante pentru un dormitor de excepție. Alege rafinamentul și calitatea pentru o experiență de dormit fără egal. Explorează gama noastră de lenjerii de pat în Iași pentru a adăuga un plus de eleganță și rafinament în dormitorul tău."/>
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
			
	
















	
			{/*Categories
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
			


	
*/}



			

		









	
		
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
		
				<div class="mb-10"><h1 class="text-5xl  lg:text-6xl font-bold mb-10">Lenjerie de pat de calitate, Premium și de lux în Iași - Descoperă cea mai bună lenjerie de pat la Luxtex</h1>
				<p>destinația ta de încredere pentru confortul suprem și luxul absolut. Suntem mândri să îți oferim o gamă largă de lenjerii de pat, create cu atenție și atenție la detalii, pentru a-ți oferi cea mai bună experiență de odihnă și confort în inima orașului Iași.</p>
				<p>Indiferent dacă cauți o lenjerie de pat de calitate superioară, un design exclusiv sau materiale luxuriante, Luxtex te întâmpină cu o selecție impresionantă. De la seturi de lenjerii de pat din bumbac moale și respirabil, până la lenjerii de pat din mătase fină sau satin delicat, vei găsi opțiuni care se potrivesc stilului și preferințelor tale.</p>
				<p>Calitatea și durabilitatea sunt principii de bază pentru Luxtex. Utilizăm materiale premium și tehnici de fabricație de înaltă calitate pentru a-ți oferi lenjerii de pat care rezistă în timp și oferă o senzație plăcută la atingere. Fiecare detaliu este atent studiat, de la cusături precise până la finisaje impecabile, pentru a te asigura că ai parte de produse de cea mai înaltă calitate.</p>
				<p>Experimentează confortul și rafinamentul pe care îl oferă lenjeriile de pat de lux de la Luxtex în orașul Iași. Fie că vrei să transformi dormitorul într-un sanctuar de relaxare sau cauți o notă elegantă și sofisticată, gama noastră variată de modele și culori îți permite să alegi ceea ce se potrivește cel mai bine stilului tău.</p>
				<p>Calitatea superioară, luxul și atenția la detalii sunt caracteristicile care ne definesc. Încrederea clienților noștri este prioritatea noastră, de aceea ne străduim să oferim numai produse excepționale și servicii impecabile în Iași.</p>
				<p>Descoperă cea mai bună lenjerie de pat la Luxtex în Iași și transformă dormitorul într-un spațiu de relaxare și rafinament. Te așteptăm cu o selecție deosebită de lenjerii de pat de calitate superioară, Premium și de lux, care să îți ofere confortul și satisfacția deplină.</p>
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