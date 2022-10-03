import { CarDTO } from './CarDTO';

export interface NavigationProps {
  navigate: (
    screen: string,
    carObject: {
      car?: CarDTO;
      dates?: string[];
    }
  ) => void;
}
