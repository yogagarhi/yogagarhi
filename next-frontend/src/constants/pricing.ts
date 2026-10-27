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

// 300 Hour Yoga Teacher Training Rishikesh Pricing
export const COURSE_300_HOUR_RISHIKESH_PRICING = {
  shared: {
    originalPrice: "$1,299",
    price: "$1,099",
    savings: 200,
    roomType: "Tuition Only",
    numericPrice: 1099
  },
  triple: {
    originalPrice: "$1,599",
    price: "$1,399",
    savings: 200,
    roomType: "Shared Room",
    numericPrice: 1399
  },
  deluxe: {
    originalPrice: "$1,899",
    price: "$1,699",
    savings: 200,
    roomType: "Double Sharing",
    numericPrice: 1699
  },
  vip: {
    originalPrice: "$2,199",
    price: "$1,999",
    savings: 200,
    roomType: "Private Room",
    numericPrice: 1999
  }
};

export const PRICING_300_HOUR_RISHIKESH_TIERS = {
  tuition: COURSE_300_HOUR_RISHIKESH_PRICING.shared,
  triple: COURSE_300_HOUR_RISHIKESH_PRICING.triple,
  double: COURSE_300_HOUR_RISHIKESH_PRICING.deluxe,
  private: COURSE_300_HOUR_RISHIKESH_PRICING.vip,
};

// 100 Hour Yoga Teacher Training Varkala Pricing (12 days)
export const COURSE_100_HOUR_VARKALA_PRICING = {
  shared: {
    originalPrice: "$799",
    price: "$599",
    savings: 200,
    roomType: "Tuition Only",
    numericPrice: 599
  },
  triple: {
    originalPrice: "$999",
    price: "$799",
    savings: 200,
    roomType: "Shared Room",
    numericPrice: 799
  },
  deluxe: {
    originalPrice: "$1,199",
    price: "$999",
    savings: 200,
    roomType: "Double Sharing",
    numericPrice: 999
  },
  vip: {
    originalPrice: "$1,399",
    price: "$1,199",
    savings: 200,
    roomType: "Private Room",
    numericPrice: 1199
  }
};

export const PRICING_100_HOUR_VARKALA_TIERS = {
  tuition: COURSE_100_HOUR_VARKALA_PRICING.shared,
  triple: COURSE_100_HOUR_VARKALA_PRICING.triple,
  double: COURSE_100_HOUR_VARKALA_PRICING.deluxe,
  private: COURSE_100_HOUR_VARKALA_PRICING.vip,
};

// 200 Hour Yoga Teacher Training Varkala Pricing (28 days)
export const COURSE_200_HOUR_VARKALA_PRICING = {
  shared: {
    originalPrice: "$1,199",
    price: "$999",
    savings: 200,
    roomType: "Tuition Only",
    numericPrice: 999
  },
  triple: {
    originalPrice: "$1,499",
    price: "$1,299",
    savings: 200,
    roomType: "Shared Room",
    numericPrice: 1299
  },
  deluxe: {
    originalPrice: "$1,699",
    price: "$1,499",
    savings: 200,
    roomType: "Double Sharing",
    numericPrice: 1499
  },
  vip: {
    originalPrice: "$1,999",
    price: "$1,799",
    savings: 200,
    roomType: "Private Room",
    numericPrice: 1799
  }
};

export const PRICING_200_HOUR_VARKALA_TIERS = {
  tuition: COURSE_200_HOUR_VARKALA_PRICING.shared,
  triple: COURSE_200_HOUR_VARKALA_PRICING.triple,
  double: COURSE_200_HOUR_VARKALA_PRICING.deluxe,
  private: COURSE_200_HOUR_VARKALA_PRICING.vip,
};

// 300 Hour Yoga Teacher Training Varkala Pricing (28 days)
export const COURSE_300_HOUR_VARKALA_PRICING = {
  shared: {
    originalPrice: "$1,299",
    price: "$1,099",
    savings: 200,
    roomType: "Tuition Only",
    numericPrice: 1099
  },
  triple: {
    originalPrice: "$1,599",
    price: "$1,399",
    savings: 200,
    roomType: "Shared Room",
    numericPrice: 1399
  },
  deluxe: {
    originalPrice: "$1,899",
    price: "$1,699",
    savings: 200,
    roomType: "Double Sharing",
    numericPrice: 1699
  },
  vip: {
    originalPrice: "$2,199",
    price: "$1,999",
    savings: 200,
    roomType: "Private Room",
    numericPrice: 1999
  }
};

export const PRICING_300_HOUR_VARKALA_TIERS = {
  tuition: COURSE_300_HOUR_VARKALA_PRICING.shared,
  triple: COURSE_300_HOUR_VARKALA_PRICING.triple,
  double: COURSE_300_HOUR_VARKALA_PRICING.deluxe,
  private: COURSE_300_HOUR_VARKALA_PRICING.vip,
};
