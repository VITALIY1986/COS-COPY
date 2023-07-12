import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import ParentCategoryBlock from "../src/components/category/category-block/ParentCategoryBlock";
import GET_CATEGORIES_QUERY from "../src/queries/get-categories";

export default function Categories ( props ) {

	const { productCategories } = props;

	return (
		<Layout>
			
			{/*Categories*/}
			
				<h2 className="text-2xl ml-3 uppercase mt-20 text-center">Categories</h2>
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
		</Layout>
	)
};

export async function getStaticProps() {

	const {data} = await client.query({
		query: GET_CATEGORIES_QUERY,
	});

	return {
		props: {
			productCategories: data?.productCategories?.nodes || []
		},
		revalidate: 1
	}

};
