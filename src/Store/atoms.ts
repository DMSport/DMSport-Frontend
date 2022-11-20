import { atom } from "recoil";

type NoticeType = "ALL" | "BASKETBALL" | "SOCCER" | "VOLLEYBALL" | "BADMINTON";

export type MenuType = "STUDENT" | "SPORTS" | "NOTICE";
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

export const ChangeUserHeader = atom({
  key: "changeUser",
  default: false,
});

export const MenuAtom = atom<MenuType>({
  key: "menu",
  default: "STUDENT",
});

export const UserAtom = atom({
  key: "uesr",
  default: { name: "", authority: "USER", user_id: 0 },
});
