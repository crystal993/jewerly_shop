import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toastError, toastSuccess } from "../components/ToastifyConfig";
import { ApiStatus, IProductState } from "../types/Product.type";
import { getProductListApi } from "../api/ProductService";

const initialState: IProductState = {
  list: [],
  listStatus: ApiStatus.ideal,
  createProductFormStatus: ApiStatus.ideal,
  updateProductFormStatus: ApiStatus.ideal,
};

export const getProductListAction = createAsyncThunk("user/getProductListAction", async () => {
  const response = await getProductListApi();
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetCreateListStatus: state => {
      state.createProductFormStatus = ApiStatus.ideal;
    },
  },
  extraReducers: builder => {
    builder.addCase(getProductListAction.pending, state => {
      state.listStatus = ApiStatus.loading;
    });
    builder.addCase(getProductListAction.fulfilled, (state, action) => {
      state.listStatus = ApiStatus.ideal;
      state.list = action.payload;
    });
    builder.addCase(getProductListAction.rejected, state => {
      state.listStatus = ApiStatus.error;
    });
  },
});

export default productSlice.reducer;
export const { resetCreateListStatus } = productSlice.actions;
