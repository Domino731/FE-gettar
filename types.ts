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
