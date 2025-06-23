import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import { motion } from "framer-motion";



const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/s1.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/s2.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/s3.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/s4.jpg" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/s5.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/s6.jpg" },	
];




const HomePage = () =>{


	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

    return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<h1 className=' text-center text-5xl sm:text-6xl font-bold text-red-900 mb-4'>
					Explore Our Categories
				</h1>
				<p className='mt-2 text-center text-sm text-stone-600'>
					Explore our collection of authentic Korean skincare products for radiant, healthy-looking skin.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>
				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
			</motion.div>
			
		</div>
	);
}


export default HomePage