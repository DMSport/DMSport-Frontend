import { Link, useLocation } from "react-router-dom";
import SoccerIcon from "../../Assets/SVG/club/soccer";
import useFetch from "../../Hooks/useFetch";
import * as _ from "./style";
import { useEffect } from "react";
import VolleyballIcon from "../../Assets/SVG/club/volleyball";
import BasketballIcon from "../../Assets/SVG/club/basketball";
import BadmintonIcon from "../../Assets/SVG/club/badminton";

// TODO : page부분 반복되는 부분 리팩토링해야함(통합)
const localUrl = "http://3.35.154.118:8080";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njg2Njk5OTEsImlhdCI6MTY2ODY2NjM5MX0.OoK9zkNUmlsPMLbTg5X_ySxNvRMUnvtBKugZC-61R_w";
interface ITodayVoteData {
  is_ban: boolean;
  ban_period: string;
  max_people: number;
  vote: {
    vote_id: number;
    time: "LUNCH" | "DINNER";
    vote_count: number;
  }[];
}
export default function ClubPage({ clubName }: { clubName: string }) {
  const { pathname } = useLocation();

  const pages: { [key: string]: object } = {
    badminton: <BadmintonPage />,
    soccer: <SoccerPage />,
    volleyball: <VolleyballPage />,
    basketball: <BasketballPage />,
  };

  return (
    <_.Container>
      <>
        <SideBar pathname={pathname} />
        {pages[clubName]}
      </>
    </_.Container>
  );
}
function BasketballPage() {
  return (
    <_.MainContainer>
      <img
        src={require("../../Assets/PNG/basketballBg.png")}
        alt=""
        height={"70%"}
      />
      <BasketballIcon />
    </_.MainContainer>
  );
}
function VolleyballPage() {
  return (
    <_.MainContainer>
      <img
        src={require("../../Assets/PNG/volleyball.png")}
        alt=""
        height={"70%"}
      />
      <VolleyballIcon />
    </_.MainContainer>
  );
}
function SoccerPage() {
  const date = new Date();
  const parseDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const [POSTvoteClub] = useFetch(localUrl + "/club/vote/{vote-id}");
  const [GETvote, { data: voteData }] = useFetch<ITodayVoteData>(
    `${localUrl}/clubs/vote?type=BASKETBALL&date=${parseDate}`
  );

  useEffect(() => {
    GETvote({
      method: "get",
      headers: {
        Authorization: token,
      },
    });
  }, []);
  const onValidVoteClub = () => {
    POSTvoteClub({
      method: "post",
      headers: {
        Authorization: token,
      },
    });
  };
  return (
    <_.MainContainer>
      <img
        src={require("../../Assets/PNG/soccerBg.png")}
        alt=""
        height={"70%"}
      />
      <SoccerIcon />
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
          {voteData?.vote.length}/{voteData?.max_people}
        </_.Text>
        <_.Text size={32} weight={600}>
          {Number(voteData?.max_people) - Number(voteData?.vote.length)}명 남음
        </_.Text>
      </div>
    </_.MainContainer>
  );
}
function BadmintonPage() {
  return (
    <>
      <_.MainContainer>
        <img
          src={require("../../Assets/PNG/badmintonBg.png")}
          height={"70%"}
          alt=""
        />
        <BadmintonIcon />
      </_.MainContainer>
    </>
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
function SideBar({ pathname }: { pathname: string }) {
  return (
    <_.SideContainer>
      <_.Text
        size={36}
        weight={700}
        height={44}
        style={{ position: "absolute", left: "13rem" }}
      >
        클럽
      </_.Text>
      <div>
        <SideBtn content="농구" link="basketball" pathname={pathname} />
        <SideBtn content="배드민턴" link="badminton" pathname={pathname} />
        <SideBtn content="축구" link="soccer" pathname={pathname} />
        <SideBtn content="배구" link="volleyball" pathname={pathname} />
      </div>
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
