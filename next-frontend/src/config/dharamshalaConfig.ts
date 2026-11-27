/**
 * Feature flags for Dharamshala, India yoga course pages.
 * Keep false until venue, teacher bios, and official details are fully confirmed.
 */
export const DHARAMSHALA_200_READY = false;
export const DHARAMSHALA_100_READY = false;
export const DHARAMSHALA_300_READY = false;

export const IS_DHARAMSHALA_LOCATION_VISIBLE =
  DHARAMSHALA_200_READY || DHARAMSHALA_100_READY || DHARAMSHALA_300_READY;
