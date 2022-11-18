import { Link, useLocation } from "react-router-dom";
import SoccerIcon from "../../Assets/SVG/club/soccer";
import useFetch from "../../Hooks/useFetch";
import * as _ from "./style";
import { useEffect, useState } from "react";
import VolleyballIcon from "../../Assets/SVG/club/volleyball";
import BasketballIcon from "../../Assets/SVG/club/basketball";
import BadmintonIcon from "../../Assets/SVG/club/badminton";
import MoonIcon from "../../Assets/SVG/moonIcon";
import SunIcon from "../../Assets/SVG/SunIcon";
import { atom, useRecoilState, useRecoilValue } from "recoil";

const WhatTime = atom<"DINNER" | "LUNCH">({
  key: "whatTime",
  default: "DINNER",
});
interface IVoteData {
  vote_id: number;
  time: "LUNCH" | "DINNER";
  vote_count: number;
}
interface ITodayVoteData {
  is_ban: boolean;
  ban_period: string;
  max_people: number;
  vote: IVoteData[];
}

export default function ClubPage({ clubName }: { clubName: string }) {
  const { pathname: oldPathname } = useLocation();
  const pathname = oldPathname.slice(6);

  // key 이름은 clubName과 일치하게 작성해야 한다.
  const clubPages: { [key: string]: object } = {
    soccer: (
      <ClubMainPages
        src={require("../../Assets/PNG/soccerBg.png")}
        pathname={pathname.toUpperCase()}
        Icon={() => <SoccerIcon />}
      />
    ),
    basketball: (
      <ClubMainPages
        src={require("../../Assets/PNG/basketballBg.png")}
        pathname={pathname.toUpperCase()}
        Icon={() => <BasketballIcon />}
      />
    ),
    badminton: (
      <ClubMainPages
        src={require("../../Assets/PNG/badmintonBg.png")}
        pathname={pathname.toUpperCase()}
        Icon={() => <BadmintonIcon />}
      />
    ),
    volleyball: (
      <ClubMainPages
        src={require("../../Assets/PNG/volleyball.png")}
        pathname={pathname.toUpperCase()}
        Icon={() => <VolleyballIcon />}
      />
    ),
  };

  return (
    <_.Container>
      <>
        <SideBar pathname={pathname} />
        {clubPages[clubName]}
      </>
    </_.Container>
  );
}

function ClubMainPages({
  src,
  pathname,
  Icon,
}: {
  src: string;
  pathname: string;
  Icon: () => JSX.Element;
}) {
  const [voteData, setVoteData] = useState<IVoteData>();

  const date = new Date();
  const parseDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;

  const whatTime = useRecoilValue(WhatTime);

  const [GETvote, { data: allVoteData }] = useFetch<ITodayVoteData>(
    `${process.env.REACT_APP_BASE_URL}clubs/vote?type=${pathname}&date=${parseDate}`
  );
  const [POSTvoteClub] = useFetch(
    `${process.env.REACT_APP_BASE_URL}club/vote/${voteData?.vote_id}`
  );

  const onValidVoteClub = () => {
    POSTvoteClub({
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
  };

  useEffect(() => {
    setVoteData(
      allVoteData?.vote?.filter((prev: any) => prev.time === whatTime)[0]
    );
  }, [allVoteData?.vote, whatTime]);

  useEffect(() => {
    GETvote({
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
  }, [whatTime, pathname]);
  
  return (
    <_.MainContainer>
      <img src={src} alt="" height={"70%"} />
      {Icon && <Icon />}
      <_.Text
        size={24}
        color={"white"}
        weight={700}
        style={{ position: "absolute" }}
        onClick={onValidVoteClub}
      >
        참가하기
      </_.Text>
      <div
        style={{
          marginTop: "20em",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <_.Text size={32} weight={600}>
          <>
            {Number(Boolean(voteData?.vote_count) ? voteData?.vote_count : 0)}/
            {allVoteData?.max_people}
          </>
        </_.Text>
        <_.Text size={32} weight={600}>
          {Number(allVoteData?.max_people) -
            Number(Boolean(voteData?.vote_count) ? voteData?.vote_count : 0)}
          명 남음
        </_.Text>
      </div>
    </_.MainContainer>
  );
}

function SideBar({ pathname }: { pathname: string }) {
  const [whatTime, setWhatTime] = useRecoilState(WhatTime);
  return (
    <_.SideContainer>
      <_.Text size={36} weight={700} height={44}>
        클럽
      </_.Text>
      <div>
        <SideBtn content="농구" link="basketball" pathname={pathname} />
        <SideBtn content="배드민턴" link="badminton" pathname={pathname} />
        <SideBtn content="축구" link="soccer" pathname={pathname} />
        <SideBtn content="배구" link="volleyball" pathname={pathname} />
      </div>
      <_.ToggleBtnWrapper
        onClick={() =>
          setWhatTime((prev) => (prev !== "DINNER" ? "DINNER" : "LUNCH"))
        }
      >
        <MoonIcon />
        <SunIcon />
        <_.ToggleBtn isNight={whatTime} />
      </_.ToggleBtnWrapper>
    </_.SideContainer>
  );
}

function SideBtn({
  content,
  link,
  pathname,
}: {
  content: string;
  link: string;
  pathname: string;
}) {
  return (
    <Link to={`/club/${link}`}>
      <_.SideBtnWrapper isUserClick={pathname.slice(6) === link}>
        <_.Text weight={700} size={24}>
          {content}
        </_.Text>
      </_.SideBtnWrapper>
    </Link>
  );
}

/**
 * 후에 추가할 베드민턴 컴포넌트
 */
function WillBadmintonComponent() {
  return (
    <_.BadmintonSpotContainer>
      {[1, 2, 3, 4].map((i) => (
        <_.BadmintonSpotWrapper>
          {[1, 2, 3, 4].map((i) => (
            <_.BadmintonSpotBtn bgColor="#80CBE3">
              <_.Text size={15} weight={700} color={"white"}>
                지관
              </_.Text>
            </_.BadmintonSpotBtn>
          ))}
          <BadmintonLine />
        </_.BadmintonSpotWrapper>
      ))}
    </_.BadmintonSpotContainer>
  );
}
function BadmintonLine() {
  return (
    <svg
      width="4"
      height="157"
      viewBox="0 0 4 157"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", left: "50%" }}
    >
      <line
        x1="2"
        y1="156.338"
        x2="2"
        y2="0.645233"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
}
