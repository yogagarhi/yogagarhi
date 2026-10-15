export const COURSE_200_HOUR_PRICING = {
  shared: {
    originalPrice: "$1,299",
    price: "$999",
    savings: 300,
    roomType: "Tuition Only",
    numericPrice: 999
  },
  private: {
    originalPrice: "$2,050",
    price: "$1,750",
    savings: 300,
    roomType: "Triple Sharing",
    numericPrice: 1750
  },
  deluxe: {
    originalPrice: "$2,199",
    price: "$1,899",
    savings: 300,
    roomType: "Double Sharing",
    numericPrice: 1899
  },
  vip: {
    originalPrice: "$2,799",
    price: "$2,499",
    savings: 300,
    roomType: "Private Room",
    numericPrice: 2499
  }
};

// Aliases matching exact package tier names
export const PRICING_200_HOUR_TIERS = {
  tuition: COURSE_200_HOUR_PRICING.shared,
  triple: COURSE_200_HOUR_PRICING.private,
  double: COURSE_200_HOUR_PRICING.deluxe,
  private: COURSE_200_HOUR_PRICING.vip,
};
