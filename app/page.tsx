import ProductsView from "@/components/ProductsView";
import WhiteFridayBanner from "@/components/WhiteFridayBanner";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // console.log(
  //   crypto.randomUUID().slice(0, 5) + 
  //   `>>> Rerendered the home page cahe with ${products.length} products and ${categories.length} categories`,
  // );

  return (
    <div>
    <WhiteFridayBanner/>

    <div className="">
      <ProductsView products={products} categories={categories}/>
    </div>
    </div>
  );
}
