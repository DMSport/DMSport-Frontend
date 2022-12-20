import { Link, useLocation, useNavigate } from "react-router-dom";
import SoccerIcon from "../../Assets/SVG/club/soccer";
import useFetch, {IFetchingConfig} from "../../Hooks/useFetch";
import * as _ from "./Clubpage.style";
import { useEffect, useState } from "react";
import VolleyballIcon from "../../Assets/SVG/club/volleyball";
import BasketballIcon from "../../Assets/SVG/club/basketball";
import BadmintonIcon from "../../Assets/SVG/club/badminton";
import MoonIcon from "../../Assets/SVG/moonIcon";
import SunIcon from "../../Assets/SVG/SunIcon";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import axios, { AxiosResponse } from "axios";
import Swal from "sweetalert2";
import { isNoticeModalAtom } from "../../Store/atoms";
import UserListModal from "./UserListModal";

const WhatTime = atom<"DINNER" | "LUNCH">({
  key: "whatTime",
  default: "DINNER",
});

interface IVoteData {
  vote_id: number;
  time: "DINNER" | "LUNCH";
  vote_count: number;
  max_people: number;
  is_complete: boolean;
  vote_user: {
    name: string;
    team: number;
  }[];
}
interface IUser {
  name: string;
  email: string;
  authority: string;
}
interface ITodayVoteData {
  ban: boolean;
  ban_period: string;
  max_people: number;
  vote_list: IVoteData[];
}

export default function ClubPage({ clubName }: { clubName: string }) {
  const { pathname: oldPathname } = useLocation();
  const pathname = oldPathname.slice(6).toUpperCase();
  // key 이름은 clubName과 일치하게 작성해야 한다.
  const clubPageModel: { [key: string]: object } = {
    soccer: (
      <ClubMainPages
        src={require("../../Assets/PNG/soccerBg.png")}
        pathname={pathname}
        Icon={() => <SoccerIcon />}
      />
    ),
    basketball: (
      <ClubMainPages
        src={require("../../Assets/PNG/basketballBg.png")}
        pathname={pathname}
        Icon={() => <BasketballIcon />}
      />
    ),
    badminton: (
      <ClubMainPages
        src={require("../../Assets/PNG/badmintonBg.png")}
        pathname={pathname}
        Icon={() => <BadmintonIcon />}
      />
    ),
    volleyball: (
      <ClubMainPages
        src={require("../../Assets/PNG/volleyball.png")}
        pathname={pathname}
        Icon={() => <VolleyballIcon />}
      />
    ),
  };

  return (
    <_.Container>
      <>
        <SideBar pathname={pathname} />
        {clubPageModel[clubName]}
      </>
    </_.Container>
  );
}

function ClubMainPages({ src, pathname, Icon }: { src: string; pathname: string; Icon: () => JSX.Element }) {
  const [voteData, setVoteData] = useState<IVoteData>();
  const [isOnPositionsModal, setIsOnPositionsModal] = useState(false);
  const [isVote, setIsVote] = useState(false);
  const [isNoticeModal, setIsNoticeModal] = useRecoilState(isNoticeModalAtom);

  const whatTime = useRecoilValue(WhatTime);

  const navigate = useNavigate();

  const [GETvote, { data: allVoteData }] = useFetch<ITodayVoteData>(
    `${process.env.REACT_APP_BASE_URL}clubs/vote?type=${pathname}`
  );
  const [GETuser, { data: userData }] = useFetch<IUser>(`${process.env.REACT_APP_BASE_URL}users/my`);
  const [POSTvoteClub] = useFetch(`${process.env.REACT_APP_BASE_URL}clubs/vote/${voteData?.vote_id}`);

  useEffect(() => {
    GETuser({
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    }).catch((err) => {
      if (err.response.data.status === 401) {
        Swal.fire({
          icon: "error",
          title: "로그인 에러",
          text: "로그인을 확인해주세요.",
        }).then(() => {
          navigate("/");
        });
      }
    });
  }, []);

  const onValidVoteClub = () => {
    const POSTvoteClubConfig: IFetchingConfig = {
      method: "post",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      options: {
        newUrl: `${process.env.REACT_APP_BASE_URL}clubs/vote/${voteData?.vote_id}`,
      },
    }
    const GETvoteConfig: IFetchingConfig = {
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      options: {
        newUrl: `${process.env.REACT_APP_BASE_URL}clubs/vote?type=${pathname}`,
      },
    }

    const POSTvoteClubPromise = POSTvoteClub(POSTvoteClubConfig).then(() => {
      alert(isVote ? "취소 성공" : "투표 성공");
    });
    const GETvotePromise = GETvote(GETvoteConfig);

    Promise.all([POSTvoteClubPromise, GETvotePromise]).then(() => {
      getUser();
    })
  };

  const getUser = () => {
    GETvote({
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
      options: {
        newUrl: `${process.env.REACT_APP_BASE_URL}clubs/vote?type=${pathname}`,
      },
    }).then((res) => {
      const userVoteData = res.data.vote_list;
      if (userVoteData.find((i: any) => i.vote_user[0]?.name === userData?.name)) {
        setIsVote(true);
      } else {
        setIsVote(false);
      }
    });
  };
  useEffect(() => {
    setVoteData(allVoteData?.vote_list?.find((prev: any) => prev.time == whatTime));
  }, [allVoteData?.vote_list, whatTime]);

  useEffect(getUser, [whatTime, pathname]);

  const postitionModel: { [key: string]: string[] } = {
    SOCCER: ["C.F", "S.F", "L.W", "C.M", "R.W", "A.M", "D.M", "L.S.T", "R.S.T", "S.W", "G.K"],
    BASKETBALL: ["P.G", "S.G", "S.F", "P.F", "C"],
    VOLLEYBALL: ["Right", "Left", "Center", "Libero"],
    BADMINTON: ["신청"],
  };
  console.log(voteData);
  return (
    <_.MainContainer>
      {Boolean(voteData?.is_complete || !voteData) && (
        <>
          <_.IsNone />
          <_.IsNoneText size={42} color="white" weight={700}>
            {voteData?.is_complete ? "마감되었습니다." : "경기를 찾을 수 없습니다."}
          </_.IsNoneText>
        </>
      )}
      {isOnPositionsModal && (
        <_.PositionModalWrapper>
          {postitionModel[pathname].map((i) => (
            <_.PositionWrapper>
              <_.Text size={16} weight={700}>
                {i}
              </_.Text>
              <_.SubmitBtn
                onClick={() => {
                  onValidVoteClub();
                  setIsOnPositionsModal(false);
                }}
              >
                신청
              </_.SubmitBtn>
            </_.PositionWrapper>
          ))}
        </_.PositionModalWrapper>
      )}
      <img src={src} alt="" style={{ width: "71%", height: "70%" }} />
      <Icon />
      <_.Text
        size={24}
        color={"white"}
        style={{ position: "absolute" }}
        weight={700}
        onClick={() => (isVote ? onValidVoteClub() : setIsOnPositionsModal(true))}
      >
        {isVote ? "취소하기" : "참가하기"}
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
            {Number(Boolean(voteData?.vote_count) ? voteData?.vote_count : 0)}/{allVoteData?.max_people}
          </>
        </_.Text>
        <_.Text size={32} weight={600}>
          {Number(allVoteData?.max_people) - Number(Boolean(voteData?.vote_count) ? voteData?.vote_count : 0)}명 남음
        </_.Text>
        {allVoteData?.vote_list[0]?.is_complete ? (
          <_.Button style={{ zIndex: 99 }} onClick={() => setIsNoticeModal(true)}>
            팀 보기
          </_.Button>
        ) : (
          <_.Button onClick={() => setIsNoticeModal(true)}>신청자 목록 보기</_.Button>
        )}
      </div>
      {isNoticeModal && <UserListModal list={allVoteData?.vote_list} />}
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
      <_.ToggleBtnWrapper onClick={() => setWhatTime((prev) => (prev !== "DINNER" ? "DINNER" : "LUNCH"))}>
        <MoonIcon />
        <SunIcon />
        <_.ToggleBtn isNight={whatTime} />
      </_.ToggleBtnWrapper>
    </_.SideContainer>
  );
}

function SideBtn({ content, link, pathname }: { content: string; link: string; pathname: string }) {
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
      <line x1="2" y1="156.338" x2="2" y2="0.645233" stroke="black" strokeWidth="3" />
    </svg>
  );
}
