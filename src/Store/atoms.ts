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

export const ChangeModal = atom({
  key: 'changeModal',
  default: ""
})

export const ChangeAdminHeader = atom({
  key: 'changeModal',
  default: false
})

export const ChangeUserHeader = atom({
  key: 'changeModal',
  default: false
})