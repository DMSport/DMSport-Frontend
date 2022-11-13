const ClubType = (type: string) => {
  switch (type) {
    case "전체":
      return "ALL";
    case "배드민턴":
      return "BADMINTON";
    case "농구":
      return "BASKETBALL";
    case "축구":
      return "SOCCER";
    case "배구":
      return "VOLLEYBALL";
  }
};

export default ClubType;
