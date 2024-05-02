import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { buildLink } from "../../utilities/links";

import PageTitle from "../../components/pages/page_title";
import Loading from "../../components/ui/loading";
import ProductForm from "./components/product_form";
import PageLayout from "../../components/layout/page_layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ProductPage = () => {
  const { productId } = useParams();

  const navigate = useNavigate();

  const [loadingProduct, setLoadingProduct] = useState(false);
  const [productMutating, setProductMutating] = useState(false);
  const [product, setProduct] = useState();
  const [productError, setProductError] = useState("");
  const [productSuccess, setProductSuccess] = useState("");

  useEffect(() => {
    if (productId) {
      setLoadingProduct(true);
      axios
        .get(`http://localhost:8080/api/products/${productId}`)
        .then((response) => {
          setLoadingProduct(false);
          setProduct(response.data);
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }, [productId]);

  const handleSaveProduct = (payload) => {
    setProductMutating(true);
    setProductError("");
    setProductSuccess("");
    axios
      .put(`/api/products/${productId}`, {
        ...payload,
      })
      .then((response) => {
        setProductMutating(false);
        setProductSuccess("Product successfully updated");
        setProduct(response.data);
      })
      .catch((error) => {
        setProductMutating(false);
        setProductError("There has been a problem updating this product");
        setProductSuccess("");
        console.log({ error });
      });
  };

  const handleCreateProduct = (payload) => {
    setProductMutating(true);
    setProductError("");
    setProductSuccess("");
    axios
      .post("/api/products", {
        ...payload,
      })
      .then((response) => {
        navigate(buildLink.products());
      })
      .catch((error) => {
        setProductMutating(false);
        setProductError("There has been a problem creating this product");
        setProductSuccess("");
        console.log({ error });
      });
  };

  const renderForm = () => {
    if (loadingProduct) {
      return <Loading />;
    }

    return (
      <ProductForm
        product={product}
        submitHandler={productId ? handleSaveProduct : handleCreateProduct}
        loading={productMutating}
        submitLabel={productId ? "Update product" : "Create product"}
        success={productSuccess}
        error={productError}
      />
    );
  };

  return (
    <PageLayout>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={buildLink.products()}>Products</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Product
          </li>
        </ol>
      </nav>
      <PageTitle>Product page</PageTitle>
      <Row className="justify-content-center">
        <Col sm={8} md={6}>
          {renderForm()}
        </Col>
      </Row>
    </PageLayout>
  );
};

export default ProductPage;
