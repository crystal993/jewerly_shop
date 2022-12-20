import React from "react";
import ProductForm from "../../components/product/ProductForm";

interface IProps {
  isEditForm: boolean;
}

function Posting(props: IProps) {
  const { isEditForm } = props;
  if (isEditForm) {
    return (
      <>
        <ProductForm title={"상품수정"} />
      </>
    );
  } else {
    return (
      <>
        <ProductForm title={"상품등록"} />
      </>
    );
  }
}

export default Posting;
