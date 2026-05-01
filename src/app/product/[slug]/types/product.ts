export interface ColorOption {
  name: string;
  hex: string;
  baseImage: string;
  backImage: string;
  outOfStockSizes?: string[];
}

export interface DesignOption {
  id: string;
  name: string;
  fullRender?: string;
  thumb: string;
  isCustom?: boolean;
}

export interface ProductData {
  id: number;
  name: string;
  price: number;
  description?: string;
  colors: ColorOption[];
  sizes: string[];
  availableDesigns: DesignOption[];
}