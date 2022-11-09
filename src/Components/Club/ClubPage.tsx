import MoonIcon from "../../Assets/SVG/moonIcon";
import * as _ from "./style";

export default function ClubPage({ clubName }: { clubName: string }) {
  return (
    <_.Container>
      <SideBar />
      {clubName === "badminton" && <BadmintonPage />}
    </_.Container>
  );
}

function BadmintonPage() {
  return (
    <>
      <_.MainContainer>
        <img
          src={require("../../Assets/PNG/badmintonBg.png")}
          height="600"
          style={{
            position: "absolute",
          }}
          alt=""
        />
        <_.MainSpotContainer>
          {[1, 2, 3, 4].map((i) => (
            <_.MainSpotWrapper>
              {[1, 2, 3, 4].map((i) => (
                <_.MainSpotBtn bgColor="#80CBE3">
                  <_.Text size={15} weight={700} color={"white"}>
                    지관
                  </_.Text>
                </_.MainSpotBtn>
              ))}
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
            </_.MainSpotWrapper>
          ))}
        </_.MainSpotContainer>
      </_.MainContainer>
    </>
  );
}

export function SideBar() {
  return (
    <_.SideContainer>
      <_.Text size={36} weight={700} height={44}>
        클럽
      </_.Text>
      {[1, 2].map((i) => (
        <_.SideBtnWrapper key={i}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <_.Text size={25} weight={700} height={43.57}>
              클럽
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
      ))}
    </_.SideContainer>
  );
}
