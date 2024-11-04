export type IAsyncStorage = {
  SaveData: (key: string, value: string) => void;
  GetData: (key: string) => Promise<string | undefined>;
  RemoveData: (key: string) => void;
  ClearAllData: () => void;
};
