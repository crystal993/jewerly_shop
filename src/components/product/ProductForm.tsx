import React, { useState } from "react";
import styled from "styled-components";
import Input from "../elements/Input";
import Button from "../elements/Button";

export interface ProductFormProps {
  title: string | undefined;
}

function ProductForm({ title }: ProductFormProps) {
  const initialState = {
    brand_name: "",
    product_name: "",
    product_price: "",
  };

  const [product, setProduct] = useState(initialState);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // todo : api create
    setProduct(initialState);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Form onSubmit={onSubmitHandler}>
        <Input
          label={"브랜드 명"}
          name="brand_name"
          type="text"
          value={product.brand_name}
          onChange={onChangeHandler}
          width={"500px"}
          height={"40px"}
          placeholder={"상품 브랜드 명을 입력하세요."}
          required={true}
        />
        <Input
          label={"상품 명"}
          name="product_name"
          type="text"
          value={product.product_name}
          onChange={onChangeHandler}
          width={"500px"}
          height={"40px"}
          placeholder={"상품 명을 입력하세요."}
          required={true}
        />
        <Input
          label={"가격"}
          name="product_price"
          type="number"
          value={product.product_price}
          onChange={onChangeHandler}
          width={"500px"}
          height={"40px"}
          placeholder={"가격을 입력하세요."}
          required={true}
        />
        <Button content={title === "상품등록" ? "상품등록" : "상품수정"} size={"lg"} />
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 40px 0px;
`;

const Title = styled.p``;

const Form = styled.form`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0px;
`;

export default ProductForm;
