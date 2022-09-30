import { addDays } from 'date-fns/esm';
import { Platform } from 'react-native';

export function getPlatformDate(date: Date) {
  if (Platform.OS === 'ios') {
    return addDays(date, 1);
  } else {
    return date;
  }
}
