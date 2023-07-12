import Link from 'next/link';
import Image from "../../../image";
import {DEFAULT_CATEGORY_IMG_URL} from "../../../constants/urls";

const ParentCategoryBlock = ( props ) => {

	const { category } = props;

	return (
		<div className="product w-1/2  md:w-1/3  my-3 flex justify-center text-center ">
			<Link href={`/categorie/${category?.slug}`}>
				<a>
				<Image
						className=" mx-3 "
						layout="fill"
						containerClassNames="h-28 w-28"
						sourceUrl={ category?.image?.sourceUrl ?? '' }
						defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
						altText={category?.image?.altText }
					/>
					<div className=" pt-3">
						<h3 className=" text-lg  font-medium  break-all ... ">{category?.name}</h3>
					
					</div>
				</a>
			</Link>
		</div>
	);
}

export default ParentCategoryBlock;