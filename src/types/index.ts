export interface IProduct {
  isLiked: boolean;
  discount: {
    discountPrice: number;
    discountAmount: number;
    paymentOptionKey: string;
    sellDiscountPercent: number;
    __typename: string;
  };
  adult: boolean;
  favorite: boolean;
  feedbackQuantity: number;
  id: number;
  minFullPrice: number;
  minSellPrice: number;
  offer: null | string;
  badges: {
    id: number;
    backgroundColor: string;
    text: string;
    textColor: string;
    __typename: string;
    iconLink?: string;
  }[];
  discountInfo: {
    text: string;
    textColor: string;
    backgroundColor: string;
    __typename: string;
  } | null;
  ordersQuantity: number;
  productId: number;
  rating: number;
  title: string;
  skuList: {
    id: number;
    bestPrice: boolean;
    sellPrice: number;
    __typename: string;
  }[];
  __typename: string;
  carrierCode: null | string;
  photos: {
    key: string;
    link: {
      high: string;
      low: string;
      __typename: string;
    };
    __typename: string;
  }[];
}
