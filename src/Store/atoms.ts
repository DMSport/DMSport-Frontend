import { atom } from "recoil";

type NoticeType = "ALL" | "BASKETBALL" | "SOCCER" | "VOLLEYBALL" | "BADMINTON";

export const NoticeTypeAtom = atom<NoticeType>({
  key: "isNotice",
  default: "ALL",
});

export const isNoticeModalAtom = atom({
  key: "isNoticeModal",
  default: false,
});

export const NoticeIdAtom = atom({
  key: "NoticeId",
  default: 0,
});

export const Email = atom({
  key: "email",
  default: "",
});

export const ChangeModal = atom({
  key: "changeModal",
  default: "",
});
