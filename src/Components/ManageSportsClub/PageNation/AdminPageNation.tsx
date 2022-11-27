import styled from "styled-components";
import * as _ from "../PageNation/PageNation.style";
import { IUser } from "../studentsearch/StudentSearch";
import { IPage } from "./PageNation";

const AdminPageNation = ({ page, setPage, data, keyword, searchType }: IPage) => {
  const Left = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };

  const Right = () => {
    if (page !== Math.ceil(data?.length / 3) - 1) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <_.Pages>
      <_.Arrow onClick={Left}>&lt;</_.Arrow>
      {data?.slice(0, Math.ceil(data?.length / 3)).map((res, i) => {
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

export default AdminPageNation;
