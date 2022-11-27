import moment from "moment";
import "moment/locale/ko";

export const CreatedDate = (created_at: string) => {
  const Make = created_at.slice(0, 10);
  const Make2 = created_at.slice(11, 19);
  return moment(`${Make} ${Make2}`, "YYYY-MM-DD HH:mm:ss").fromNow();
};
