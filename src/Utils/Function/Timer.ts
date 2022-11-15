export const CreatedDate = (created_at: string) => {
  let now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const Make = created_at.slice(0, 10).split("-");
  const Today = year * 365 + month * 30 + date;
  const CreatedAt = parseInt(Make[0]) * 365 + parseInt(Make[1]) * 30 + parseInt(Make[2]);
  if (Today - CreatedAt >= 365) {
    return Math.floor((Today - CreatedAt) / 60) + "년전";
  } else if (Today - CreatedAt >= 30) {
    return Math.floor((Today - CreatedAt) / 60) + "달전";
  } else if (Today - CreatedAt >= 7) {
    return Math.floor((Today - CreatedAt) / 7) + "주전";
  } else if (Today - CreatedAt >= 1) {
    return Today - CreatedAt + "일전";
  } else if (Today === CreatedAt) {
    return "오늘";
  }
};
