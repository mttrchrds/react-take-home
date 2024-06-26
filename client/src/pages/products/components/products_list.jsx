import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { buildLink } from "../../../utilities/links";

import Warning from "../../../components/ui/warning";
import Table from "react-bootstrap/Table";

const ProductsList = ({ products }) => {
  const renderProductRow = (product) => (
    <tr key={product.id}>
      <td>
        <Link to={buildLink.product(product.id)}>{product.name}</Link>
      </td>
      <td>{product.type}</td>
      <td>{product.brand}</td>
    </tr>
  );

  if (products.length === 0) {
    return <Warning text="There are no products" />;
  }

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th align="left" width="40%">
            Product name
          </th>
          <th align="left" width="30%">
            Type
          </th>
          <th align="left" width="30%">
            Brand
          </th>
        </tr>
      </thead>
      <tbody>{products.map((p) => renderProductRow(p))}</tbody>
    </Table>
  );
};

ProductsList.defaultProps = {
  products: [],
};

ProductsList.propTypes = {
  products: PropTypes.array,
};

export default ProductsList;
