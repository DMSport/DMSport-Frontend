import First from "../Components/Main/First";
import Second from "../Components/Main/Second";
import Third from "../Components/Main/Third";

function Main() {
  return (
    <div style={{ scrollSnapType: "both mandatory" }}>
      <First />
      <Second />
      <Third />
    </div>
  );
}

export default Main;
