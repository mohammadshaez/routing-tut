// Dynamic Routes


const ProductsIds = ({ params }) => {   //getting the url param
  return (
    <div>
      <h1>My Product Id : {params.productIds}</h1>      {/* nextJS treats [] as dynamic route id */}
    </div>
  );
};

export default ProductsIds;
