import { atom } from "recoil";

export const isNoticeAtom = atom({
  key: "isNotice",
  default: 0,
});

export const isNoticeModalAtom = atom({
  key: "isNoticeModal",
  default: false,
});

export const Email = atom({
  key: 'email',
  default: ''
});
