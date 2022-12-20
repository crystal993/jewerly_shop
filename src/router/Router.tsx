import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import MainPage from "../pages/Main";
import DetailPage from "../pages/product/Detail";
import PostingPage from "../pages/product/Posting";
import Layout from "../components/common/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/product/detail/:id" element={<DetailPage />} />
          <Route path="/product/post" element={<PostingPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
