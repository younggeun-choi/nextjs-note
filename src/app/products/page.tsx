import { getProducts } from "@/service/products";
import Link from "next/link";
import styles from "./page.module.css";

// export const revalidate = 10; // ISR

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌.
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 3 },
    // cache: "no-store",
  }); // fetch 에서 revalidate 를 통한 ISR
  const data = await res.json();
  const factText = data.data[0];

  return (
    <>
      <h1>제품 설명 페이지!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </>
  );
}
