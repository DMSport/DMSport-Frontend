import UserCard from "../UserCard/UserCard";
import Search from "../../../Assets/SVG/Search.svg";
import { useQuery } from "@tanstack/react-query";
import api from "../../../Utils/api/admin";
import { useState } from "react";
import PageNation from "../PageNation/PageNation";
import useInput from "../../../Hooks/useInput";
import { useRecoilValue } from "recoil";
import { isNoticeModalAtom } from "../../../Store/atoms";
import UserModal from "../UserModal/UserModal";
import * as _ from "./StudentSearch.style";

export interface IUser {
  id: number;
  name: string;
  authority: string;
  length?: number;
}

export type ISearchType = "ALL" | "USER" | "ADMIN" | "MANAGER";

const StudentSearch = () => {
  const [keyword, onChangeKeyword] = useInput();
  const { data } = useQuery(["user"], api.getUsers);
  const type: ISearchType[] = ["ALL", "USER", "ADMIN", "MANAGER"];
  const [searchType, setSearchType] = useState<ISearchType>("ALL");
  const [page, setPage] = useState<number>(0);
  const NoticeModal = useRecoilValue(isNoticeModalAtom);

  return (
    <>
      <_.Container>
        <_.SearchWrapper>
          <_.Input onChange={onChangeKeyword} value={keyword} />
          <_.Img src={Search} alt="검색" />
          <_.ButtonWrapper>
            {type.map((res: ISearchType, i) => {
              return (
                <_.FilterButton key={i} onClick={() => setSearchType(res)} searchType={searchType === res}>
                  {res}
                </_.FilterButton>
              );
            })}
          </_.ButtonWrapper>
        </_.SearchWrapper>
        <_.CardWrapper>
          {data?.data
            ?.filter((props: IUser) => props.name.includes(keyword))
            ?.filter((props: IUser) => (searchType !== "ALL" ? props.authority.includes(searchType) : props))
            ?.slice(page * 12, page * 12 + 12)
            ?.map((res: IUser) => {
              return <UserCard key={res.id} name={res.name} id={res.id} authority={res.authority} />;
            })}
        </_.CardWrapper>
        <PageNation page={page} setPage={setPage} data={data?.data} searchType={searchType} keyword={keyword} />
      </_.Container>
      {NoticeModal && <UserModal />}
    </>
  );
};

export default StudentSearch;
