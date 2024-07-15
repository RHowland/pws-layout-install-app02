export interface ILayoutItemMetadata {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  customData?: ICustomLayoutMetadata;
}

export interface ILayouts {
  [key: string]: ILayoutItemMetadata[];
}

export interface ICustomLayoutMetadata {
  imgUrl: string;
}
