export interface IAlertService {
  ShowSingleActionAlert: (
    msg: string,
    btnTxt?: string,
    btnActionHandle?: any,
  ) => void;
}
