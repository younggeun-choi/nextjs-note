import styles from "./laytout.module.css";
import Link from "next/link";

export const metadata = {
  title: "멋진 제품 사이트 | 전체 제품",
  description: "멋진 제품을 확인해보세요",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/man">남성옷</Link>
        <Link href="/products/women">여성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
