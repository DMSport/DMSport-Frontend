import { Link, useLocation } from "react-router-dom";
import SoccerIcon from "../../Assets/SVG/club/soccer";
import useFetch from "../../Hooks/useFetch";
import * as _ from "./style";
import { useEffect } from "react";
import VolleyballIcon from "../../Assets/SVG/club/volleyball";
import BasketballIcon from "../../Assets/SVG/club/basketball";
import BadmintonIcon from "../../Assets/SVG/club/badminton";
import MoonIcon from "../../Assets/SVG/moonIcon";
import SunIcon from "../../Assets/SVG/SunIcon";
import { atom, useRecoilState, useRecoilValue } from "recoil";

const IsNight = atom({
  key: "isNight",
  default: false,
});

const localUrl = "http://3.35.154.118:8080";
const token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqYW5namlzb3VuZ0Bkc20uaHMua3IiLCJ0eXAiOiJhY2Nlc3MiLCJleHAiOjE2Njg3MDY0ODgsImlhdCI6MTY2ODcwMjg4OH0.jC-YM-fm0YP04hdNYltZUrxf6CuD-xURMLcIhuY7PbY";
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

  return (
    <_.Container>
      <SideBar pathname={pathname} />
      <MainPageComponent
        src={""}
        pathname={pathname.slice(6).toUpperCase()}
        Icon={() => <SoccerIcon />}
      />
    </_.Container>
  );
}

function BasketballPage() {
  return (
    <_.MainContainer>
      <img src={require("")} alt="" height={"70%"} />
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
function MainPageComponent({
  src,
  pathname,
  Icon,
}: {
  src: string;
  pathname: string;
  Icon: () => JSX.Element;
}) {
  const date = new Date();
  const parseDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const isNight = useRecoilValue(IsNight);
  const [GETvote, { data: voteData }] = useFetch<ITodayVoteData>(
    `${localUrl}/clubs/vote?type=${pathname}&date=${parseDate}`
  );
  const [POSTvoteClub] = useFetch(
    `${localUrl}/club/vote/${
      isNight ? voteData?.vote[1].vote_id : voteData?.vote[0].vote_id
    }`
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
          {isNight ? voteData?.vote.length : voteData?.vote.length}/
          {voteData?.max_people}
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
  const [isNight, setIsNight] = useRecoilState(IsNight);
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
      <_.ToggleBtnWrapper onClick={() => setIsNight((current) => !current)}>
        <MoonIcon />
        <SunIcon />
        <_.ToggleBtn isNight={isNight} />
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
