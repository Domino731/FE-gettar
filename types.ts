export interface IFPropsBorderLine {
  position: "leftBot" | "rightBot" | "leftTop" | "rightTop";
  height?: string | number;
  color?: string;
  width?: string | number;
  radius?: number;
}
export interface IFPropsNavButton {
  text: string;
  active: boolean;
  changeSectionHandler: () => void;
}
export interface IFPropsCorner {
  width: number;
  height: number;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  backgroundColor: string;
  transformRotate?: number;
  borderColor?: string;
  borderWidth?: number;
  additionStyles?: any;
}
export interface IFPropsNoteSmall {
  location: "right" | "left";
}
export interface IFNoteData {
  title: {};
  content: {};
  id?: string;
}
