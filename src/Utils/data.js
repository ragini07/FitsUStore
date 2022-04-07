export const initialFilterState = {
  sortBy: "",
  ratingBy: 0,
  priceRange: 10000,
  showFastDeliveryOnly: false,
  showOutOfStock: false,
  category: { Beds: false, Lighting: false, Decor: false, Sofas: false },
  searchQuery: "",
};

export const initialUserDataState = {
  cart: [],
  wishlist: [],
  orders : []

  
};

export const Coupons = [
  { _id: 1, title: "NEW USER", value: 20 },
  { _id: 2, title: "BIG BILLION SALE", value: 50 },
  { _id: 3, title: "DIWALI SALE", value: 30 },
];
