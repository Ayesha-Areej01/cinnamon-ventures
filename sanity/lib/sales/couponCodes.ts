export const COUPON_CODES = {
    WFRIDAY: "WFRIDAY",
    XMAS2025: "XMAS2025",
    NY2025: "NY2025",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;