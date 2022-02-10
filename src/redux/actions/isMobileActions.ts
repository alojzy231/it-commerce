export const TOGGLE_IS_MOBILE = 'isMobile/toggle';

export interface IIsMobileAction {
  type: string;
  payload: boolean;
}

const toggleIsMobile = (isMobile: boolean): IIsMobileAction => ({
  type: TOGGLE_IS_MOBILE,
  payload: isMobile,
});

export default toggleIsMobile;
