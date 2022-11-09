import { Link, useLocation } from "react-router-dom";
import MoonIcon from "../../Assets/SVG/moonIcon";
import * as _ from "./style";

export default function ClubPage({ clubName }: { clubName: string }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <_.Container>
      <SideBar pathname={pathname} />
      {clubName === "badminton" && <BadmintonPage />}
      {clubName === "soccer" && <SoccerPage />}
    </_.Container>
  );
}
function SoccerPage() {
  return (
    <_.SoccerContainer>
      <img src={require("../../Assets/PNG/soccerBg.png")} alt="" height={600} />
    </_.SoccerContainer>
  );
}
function BadmintonPage() {
  return (
    <>
      <_.BadmintonContainer>
        <img
          src={require("../../Assets/PNG/badmintonBg.png")}
          height="600"
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
      </_.BadmintonContainer>
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
      <SideBtn content="농구" link="basketball" pathname={pathname} />
      <SideBtn content="배드민턴" link="badminton" pathname={pathname} />
      <SideBtn content="축구" link="soccer" pathname={pathname} />
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
            4/5명
          </_.Text>
        </div>
      </_.SideBtnWrapper>
    </Link>
  );
}
