import React from "react";

interface Props {
  limit: number;
  page: number;
}

const Pagination = ({ page, limit }: Props) => {
  return (
    <h1 className="top-4 absolute text-white text-2xl">
      Pagina {page} - Limite de properties {limit}
    </h1>
  );
};

export default Pagination;
