import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router";
import { getProductListAction } from "../../redux/ProductSlice";
import { ApiStatus, IProduct } from "../../types/Product.type";

function ProductCardList() {
  const dispatch = useAppDispatch();
  const { list, listStatus } = useAppSelector((state: RootState) => state.product);
  const navigator = useNavigate();

  useEffect(() => {
    dispatch(getProductListAction());
  }, []);

  return (
    <>
      {listStatus === ApiStatus.loading && <tbody>List is loading</tbody>}
      {listStatus === ApiStatus.error && <tbody>Error while loading list</tbody>}
      {listStatus === ApiStatus.ideal &&
        list.map((product: IProduct, index: number) => {
          return (
            <div>
              <td>{index + 1}</td>
              <td>{product.brand_name}</td>
              <td>{product.product_name}</td>
              <td>{product.product_img}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => {
                      navigator(`/edit/${product.id}`);
                    }}
                  />
                  <input type="button" value="Delete" onClick={() => {}} />
                </div>
              </td>
            </div>
          );
        })}
    </>
  );
}

export default ProductCardList;
