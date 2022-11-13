import { Link, useLocation } from "react-router-dom";
import SoccerIcon from "../../Assets/SVG/club/soccer";
import MoonIcon from "../../Assets/SVG/moonIcon";
import useFetch from "../../Hooks/useFetch";
import * as _ from "./style";
import { useEffect } from "react";

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
      {clubName === "badminton" && <BadmintonPage />}
      {clubName === "soccer" && <SoccerPage />}
      {clubName === "volleyball" && <VolleyballPage />}
      {clubName === "basketball" && <BasketballPage />}
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
    </_.MainContainer>
  );
}
function SoccerPage() {
  const date = new Date();
  const parseDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const [voteClub] = useFetch("/club/vote/{vote-id}");
  const [getVote, { data: voteData }] = useFetch<ITodayVoteData>(
    "http://3.35.154.118:8080" + "club/vote?type=soccer&date=" + parseDate
  );

  useEffect(() => {
    getVote({
      method: "get",
    });
  }, []);
  const onValidVoteClub = () => {
    voteClub({
      method: "post",
      headers: {
        // 토큰이 들어가야 하는 곳
        Authorization: "",
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
          style={{
            position: "absolute",
          }}
          alt=""
        />
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
      <_.Text size={36} weight={700} height={44}>
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
  const date = new Date();
  const parseDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  const [getVote, { data: voteData }] = useFetch<ITodayVoteData>(
    "http://3.35.154.118:8080" +
      "club/vote?type=" +
      pathname.slice(6) +
      "&date=" +
      parseDate
  );

  useEffect(() => {
    getVote({
      method: "get",
    });
  }, []);
  return (
    <Link to={`/club/${link}`}>
      <_.SideBtnWrapper isUserClick={pathname.slice(6) === link}>
        <div>
          <_.Text size={25} weight={700} height={43.57}>
            {content}
          </_.Text>
          <MoonIcon />
        </div>
        <div
          style={{
            display: "flex",
            boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.15)",
            borderRadius: "60px",
          }}
        >
          <_.SideBtnColorStick width={100} />
          <_.SideBtnGrayStick width={100} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <_.Text size={14} weight={600} color={"#898A8D"}>
            00 : 00 : 00
          </_.Text>
          <_.Text size={18} weight={600} color={"#898A8D"}>
            {voteData?.vote.length}/{voteData?.max_people}명
          </_.Text>
        </div>
      </_.SideBtnWrapper>
    </Link>
  );
}
