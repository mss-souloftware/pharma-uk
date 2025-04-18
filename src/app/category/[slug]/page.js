import ConsultingCard from '@/component/productCategoryComponent/Consulting'
import FAQAccordion from '@/component/productCategoryComponent/FAQAccordion'
import ProductHeader from '@/component/productCategoryComponent/ProductHeader'
import ProductsCard from '@/component/productCategoryComponent/ProductsCard'
import api from '@/config/axios'
import React from 'react'

export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const res = await api.get("/products/categories");
    const category = res.data.data.find(
      (cat) => cat.name.toLowerCase().replace(/\s+/g, "-") === slug
    );

    if (!category) {
      return {
        title: "Category Not Found | iFeelShy",
        description: "This category could not be found.",
      };
    }

    return {
      title: `${category.name} | iFeelShy`,
      description: `Browse the best products in the ${category.name} category.`,
      openGraph: {
        title: `${category.name} | iFeelShy`,
        description: `Browse top-rated products in the ${category.name} category.`,
        images: [
          {
            url: category.image || "/default-og-image.jpg", // Add if category has an image
            width: 800,
            height: 600,
            alt: `${category.name} category image`,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching category:", error);
    return {
      title: "Category | iFeelShy",
      description: "Explore our categories.",
    };
  }
}

const dynCat = ({ params }) => {
  const { slug } = params;
  return (
    <div className="container mx-auto mt-20">
      <ProductHeader />
      <div className="mt-10 sm:mt-20">
        <ProductsCard />
      </div>
      <div className="mt-20">
        <ConsultingCard />
      </div>
      <div className="mt-20">
        <FAQAccordion slug={slug} />
      </div>
    </div>
  );
};

export default dynCat;
