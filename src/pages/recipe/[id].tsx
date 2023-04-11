import { useRouter } from "next/router";

const Recipe = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Recipe;
