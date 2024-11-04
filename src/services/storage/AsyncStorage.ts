import AsyncStorage from '@react-native-async-storage/async-storage';
import {IAsyncStorage} from './IAsyncStorage';

export default class AsyncStorages implements IAsyncStorage {
  async SaveData(key: string, value: string) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log('AsyncStroage SaveData', error);
    }
  }
  async GetData(key: string): Promise<string | undefined> {
    try {
      var data: any = await AsyncStorage.getItem(key);
      return data ? data : undefined;
    } catch (error) {
      console.log('AsyncStroage GetData', error);
    }
  }
  async RemoveData(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('AsyncStroage RemoveData', error);
    }
  }
  async ClearAllData() {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log('AsyncStroage ClearAllData', error);
    }
  }
}
