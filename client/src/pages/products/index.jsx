import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { buildLink } from "../../utilities/links";

import PageTitle from "../../components/pages/page_title";
import ProductsList from "./components/products_list";
import Loading from "../../components/ui/loading";
import Button from "../../components/forms/button";
import PageLayout from "../../components/layout/page_layout";

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
        <div className="d-flex justify-content-end mb-3">
          <Button type="button" onClick={handleClickCreateButton}>
            Create product
          </Button>
        </div>
        <ProductsList products={products} />
      </>
    );
  };

  return (
    <PageLayout>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      <PageTitle>Products page</PageTitle>
      {renderProducts()}
    </PageLayout>
  );
};

export default ProductsPage;
