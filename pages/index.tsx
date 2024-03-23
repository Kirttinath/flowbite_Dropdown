// import Image from "next/image";
import { Inter } from "next/font/google";
// import { ProductPage } from "./Component/ProductPage";
// import AddProductPage from "./Component/AddProductPage";
import ProductPage from "./Component/ProductPage";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    // <AddProductPage />
    <ProductPage />
  );
}
