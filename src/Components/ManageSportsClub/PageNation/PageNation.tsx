import { useState } from "react";
import { ISearchType, IUser } from "../studentsearch/StudentSearch";
import * as _ from "./PageNation.style";

interface IPage {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: IUser[];
  searchType: ISearchType;
  keyword: string;
}

const PageNation = ({ page, setPage, data, searchType, keyword }: IPage) => {
  const Left = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  const Right = () => {
    if (page !== Math.ceil(data?.filter((props: IUser) => props.authority !== "ADMIN" && props)?.length / 12) - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const dt = data
    ?.filter((props: IUser) => props.name.includes(keyword))
    ?.filter((props: IUser) => props.authority !== "ADMIN" && props)
    ?.filter((props: IUser) => (searchType !== "ALL" ? props.authority.includes(searchType) : props));

  return (
    <_.Pages>
      <_.Arrow onClick={Left}>&lt;</_.Arrow>
      {dt?.slice(0, Math.ceil(dt?.length / 12)).map((res, i) => {
        return (
          <_.Number key={res.id} onClick={() => setPage(i)} isSelect={page === i}>
            {i + 1}
          </_.Number>
        );
      })}
      <_.Arrow onClick={Right}>&gt;</_.Arrow>
    </_.Pages>
  );
};

export default PageNation;
