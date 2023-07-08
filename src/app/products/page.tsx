import { getProducts } from "@/service/products";
import Link from "next/link";

export const revalidate = 10; // ISR

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  const products = await getProducts();

  return (
    <>
      <h1>제품 설명 페이지!</h1>
      <ul>
        {/* {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))} */}
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
