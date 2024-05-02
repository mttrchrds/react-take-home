import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { buildLink } from "../../utilities/links";

import PageTitle from "../../components/pages/page_title";
import ProductsList from "./components/products_list";
import Loading from "../../components/ui/loading";
import Button from "../../components/forms/button";

const ProductsPage = () => {
  const navigate = useNavigate();

  const [loadingProducts, setLoadingProducts] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    setLoadingProducts(true);
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => {
        setLoadingProducts(false);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

  const handleClickCreateButton = (e) => {
    e.preventDefault();
    navigate(buildLink.product());
  };

  const renderProducts = () => {
    if (loadingProducts) {
      return <Loading />;
    }

    return (
      <>
        <Button type="button" onClick={handleClickCreateButton}>
          Create product
        </Button>
        <ProductsList products={products} />
      </>
    );
  };

  return (
    <>
      <PageTitle>Products page</PageTitle>
      {renderProducts()}
    </>
  );
};

export default ProductsPage;
