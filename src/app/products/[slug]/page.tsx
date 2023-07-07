type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default function PantsPage({ params }: Props) {
  return <h1>{params.slug} 설명 페이지!</h1>;
}

// 미리 SSG 로 생성
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
