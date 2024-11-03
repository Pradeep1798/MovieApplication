import {Alert} from 'react-native';
import {IAlertService} from './IAlertService';

export default class AlertService implements IAlertService {
  async ShowSingleActionAlert(
    msg: string,
    btnTxt = 'Ok' as string,
    btnActionHandle = () => {},
  ) {
    Alert.alert('', msg, [
      {
        text: btnTxt,
        onPress: () => {
          btnActionHandle();
        },
        style: 'default',
      },
    ]);
  }
}
