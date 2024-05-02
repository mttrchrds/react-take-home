import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-3 mb-3">
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;
