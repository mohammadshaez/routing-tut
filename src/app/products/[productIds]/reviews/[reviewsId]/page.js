import { notFound } from "next/navigation";

const ReviewIds = ({ params }) => {
  if (params.reviewsId > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        Review Number: {params.reviewsId} for the product: {params.productIds}
      </h1>
    </div>
  );
};

export default ReviewIds;

//nested dynamic route
