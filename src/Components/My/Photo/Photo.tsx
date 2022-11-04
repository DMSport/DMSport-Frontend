import kangmin from "../../../Assets/SVG/developers/kangmin.svg";
import jikwan from "../../../Assets/SVG/developers/jikwan.svg";
import seounghoon from "../../../Assets/SVG/developers/seounghoon.svg";
import kanginhae from "../../../Assets/SVG/developers/kanginhae.svg";
import * as _ from "../Photo/Photo.style";

const Photo = () => {
  return (
    <_.Container>
      <_.Img width="200" src={kangmin}></_.Img>
      <_.Img src={jikwan}></_.Img>
      <_.Img src={kanginhae}></_.Img>
      <_.Img src={seounghoon}></_.Img>
    </_.Container>
  );
};

export default Photo;
