import React from "react";
import { HeroFile } from "../components";

import { customFetch } from "../utils";
import FeaturedProducts from "../components/FeaturedProducts";
const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
};
export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery);

  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <HeroFile />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
