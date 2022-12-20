import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router";
import { deleteProductAction, getProductListAction } from "../../redux/ProductSlice";
import { ApiStatus, IProduct } from "../../types/Product.type";
import styled from "styled-components";
import Button from "../elements/Button";

function ProductCardList() {
  const dispatch = useAppDispatch();
  const { list, listStatus } = useAppSelector((state: RootState) => state.product);
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <Wrapper>
      {listStatus === ApiStatus.loading && <tbody>List is loading</tbody>}
      {listStatus === ApiStatus.error && <tbody>Error while loading list</tbody>}
      {listStatus === ApiStatus.ideal &&
        list.map((product: IProduct, index: number) => {
          return (
            <ProductCard>
              <BrandName>{product.brand_name}</BrandName>
              <ProductName>{product.product_name}</ProductName>
              <Img src={product.product_img} alt={product.product_name}></Img>
              <Price>{product.product_price} 원</Price>
              <ButtonsWrapper>
                <Button
                  variant="primary"
                  size="sm"
                  content="수정"
                  onClick={() => {
                    navigator(`/product/edit/${product.id}`);
                  }}
                />
                <Button
                  variant="gray"
                  size="sm"
                  content="삭제"
                  onClick={() => {
                    dispatch(deleteProductAction(product.id));
                  }}
                />
              </ButtonsWrapper>
            </ProductCard>
          );
        })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px 0px;
`;

const BrandName = styled.p``;

const ProductName = styled.p``;

const Price = styled.p``;

const Img = styled.img`
  width: 80%;
`;

const ButtonsWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;

export default ProductCardList;
