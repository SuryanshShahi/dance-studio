export const SITE_NAME = "Rhythm Studio";
export const SITE_TAGLINE = "Move with Passion.";
export const SITE_DESCRIPTION =
  "Experience the raw energy of movement in the city's premier high-octane dance studio. From hip-hop to contemporary, find your beat and move with passion.";
export const FOOTER_TAGLINE =
  "Redefining the dance experience through energy, motion, and community.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_LINKS = {
  studioInfo: {
    title: "Studio Info",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Location", href: "/contact" },
      { label: "Facility", href: "/gallery" },
      { label: "FAQ", href: "/contact" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: [
      { label: "Instructors", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "Gift Cards", href: "/contact" },
      { label: "Blog", href: "/events" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/contact" },
      { label: "Terms of Service", href: "/contact" },
      { label: "Cookies", href: "/contact" },
    ],
  },
} as const;

export const IMAGES = {
  hero: "https://lh3.googleusercontent.com/aida-public/AB6AXuBeTu-e1USOeZeF1soiGbvmIhmNRTkAEOAGH95kfaD9l0H9TtaYjwVy_qf6iFfEJ_WCHU_LKSGSjjHmrOBi2Ai9e1l1Ipf7y_NNM6oYWk5JcT9cgfXR5L1uDlaQ68JbZa7-t5RlEni6o-oCDY0W8yN77ZvuJx-g3KwYA4aZKOOS3U9mkylByZYZaDayO7YYsNdaKfVEgyXOdDAf2OiLUk4Cb25tiCFj4n7iF9eMeGYye4ed0Mmn98AWMZm3kcMXMmk7L3E2OlsahUM",
  hipHop:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBFi8V1rWEbGH9xEJgqWwnzYoWnmc0Jji6kHLutYi00oY4h4tqowsohig_K0oJJVPnZYcn9EmV2wy4O1xoSLB_4qklKpeRtc9BvbqaE0xXuVBQxWtWebASr59AHANbjdXUH1qghHPKmhxdVgMKGr2tP6-NW-A0pNSwEZKa7PQBlkXj9FvHo2YI0dL18K_MabTQc-IIp1j6Mi5FQit_nRiSPLA1tPaLrvZPKW3GE1Jlv1pT6PnkApkjo5GvIQXdohrT0XvtM3WCvq9s",
  contemporary:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcgpxvjUgAyE_TJm54Tdmpf0G-Nxk5ke2vm2ChoQsLNdlaqiWFS9iLwmkI-_a6q_l_vMuFg6t3QOOGp-x56gVxonW32qYpSL944Z9tfa4DwFtbjPoU0vcSvQtyRha6O95ghJz-A8NOGyiIC3i5WIn-_2OP7b0CqW0OoVZDyaCP9x5NzGuvD9fmzAnXxddMKxJe6aMIog3WitER8mzI2RzNe3SDb7UTdxO6qq9Vglqnv5K6SDI3UGPnPS7pQ1SsevDYS_FKbg_A5Tg",
  ballet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDYI6CU5wh7uf9W27TmyDdhFKrWEjCO48o4QTOHX6YelZI3LKMMYOAMPtbubkCILkh0WFOOyP3nHsggL9nWUKJQthSsU2soUva2_I7hggC95moBZHJCt4OjurbWaddq9FEc1vJEJQtDZTj_CdtQN6WAya503ohV0FMqsoDUKhogjVrPr8SgqXBFn1vItH-WlS6ZbiF94jZzRs0e1JDxiL6-e3USIgDip6TrHGmoFT_mO454rg-3jWQDPJn6lZBj0PlQelHFBAkB8dE",
  jazzFunk:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD7wiiGUHCR_jDRqoaqzhXoSR4Hccbb9daaCIuEXtJHyH6KI9FTYpiVEr0LgxqVjoSRvfNiR1QYa4nMHxkv97Ydf9lqlOKb9W_GVYKqgTQSqPnT1788f7XTM0Ixh6MDdeC8uCk9jsWu4IRXgrpdnC8N4_n3Ud6pOFzSoBrgriad8XOrDFOjSw_UzJScN8LseOIG0H-d40hjFUGWu8jObu8H2umJPns6pw5kq6bQ6tT6FSY6FWNZWTQYD72ZKp-AeIHq6Fgz9wKBMwQ",
  aboutHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCLd1rECOVSA1RzoqvPz2QNJKcUeXSVcc6p29hSziEq5sOEu5PzTZ2ERZPPtpCK83DIPkjHOEIa82-FO2cJDd_AYzHJ8CctQmD9gvCtEphkfclwWh5k8jwa56MLnTClkpeHF3hE0P-SQ4wlEVbgSd_GlRR0K-mAkddsneNbTxf2ZmT7ZYcRrsSJ1KFeKlxhAsIGC7LBswYEWks7cLG3S7J6sQhNqpWwNpndqArQ_NBevmeqImxmN9DCBnVGJK9_Ri9szZ5n3BXx7hw",
  aboutStory:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBTTJWpe1QRWodrjgwmBC5VpGdRcFSrAD-uduaOmgJq784d5jrfzHND1NamxDksbNepSijkzP-Xfk5vQMbGRs8k1TnpETzRSX56whDLYpJEcK6ucqxjjDQ9z4NovBk2DoNZN5pQ0k2tmEq_we4wQhBBBumhVmjK4K7QDXWpk9ej82t9REbU5UsAQqyxwRypuvfAYKQYEqgcdoaO7N5QyphGMwjiQ90ckOCqrUb4tXy2F-AJ-fqbdj52EtSR5taK_3lOK3R1qiXlG64",
  instructorMaya:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCUadFXd26z6XrNuglEgl0_qyr1sppuiCmHW9Tt2YaRgMAwFEV_OngR6uqWf5ycH10MyS-tyj_ovA_-YlTDifQQP7n_cZun23Uwj7QPyybwU0G1w_FfrDkRS4zUQPArX54i_e3YOi3IZ09Q3Igx4pDxJQYNTL_z8ofrZHjPG_GpuI5rrAK3n0-gokh72rFjl7NOz2hgTFBrexxCqhxpB3CBzDdW44Nvu4_fmrWBUtcyF8eKUDz2rVPAwaN_SjKWABNTMdIONHlGaDs",
  instructorMarcus:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdci_EYLUxeYvGiGGs2hovwdtDUloehmcL6HTfVL4WRx1bZjJdtynC6ELi6IBuypu4GrMmtJUWUArStqp2iKt38PltLy3qRDgtzYlJjb7fyv6Od41jhnI4xQ7iV1minxhzaTGm3VVEwQlv8xnqv_gVWRzOpzuL9cpcXXmxvRR8kB-59BdnFcVp2bNyOjXkwAPaUmULimoHSIAM0PC8twhe_pdxZR_6yzrEF7-ySnn8Pj97MiZtrvWRNiB4WrZc03ci76YVfvQq5G0",
  instructorElena:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByrzddP5wu9NgbcpcHyr8hJwydDAuX243VpyUBosK9voe2uZ35WgLr5y6rQe9KZ8H2Ui5LacdoHSbYJTYza4eBa_z9o0yQ6KK8m_sscTiljQqcglA_r3ZDKIiVAX1m2KI5fpr5TDygx4Ocea2mQTcymrlMOTmFlQNBynk0uOZ0SyIWXuFDH3YaGZawT1uA5wo0rAuz7KbkY-oxti-mwIn6YiSk18bBxXaC5__mJjoJPKpeAG3ex9C4REaKYjQm0LRESiOEcT4m49E",
  instructorDavid:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA4NIS_RDQvtdhiN4_5-Mr-i3bXuKsxQw6RUWYLBAHijeuEhnKX2HFksGnOIHKyHPRwLtuR7Jd7DE9katnDNqShL7_BVn6w0XGsnt_je4MXiJrxS_0_4WrmO0_VVoukzBACdsK1VNhkHXOYLd-Xn5EPw327iDWXXjFjzwHEEcNfJKzn_zj5xMxf8wuUmLgS97v_rM4bv3-ImPMYK13oNVIc_NDTiGkKe3sNEYjMdSJKa4RNf8uqC7nQCCqGeHiQiHJQsQG1RuE283M",
  eventsHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxEdUMgfQ08lYGhpdQH3WDqrDbBS3wKr3ACDrTD_UkBMaQLfQsKJwH7QpsIrsm_OJvkvhxNAxxNO33nIqAySkPN25IpQvwtOUX2LL6L9NZ4HcauneYCYm72CWYgyNrcmcsggMH1UDOfAdISGdyzdx8Ixfg0p4t076-1l5y9ARvNTaNsssLNa6ZZ4Mb7qBGDSv-PLhe_C-srKvf_7TobAScO09hvEunJNSfYA23M8AKDKzLv58er6In9e68Ghuf4UqB_18bhpa0kzg",
  urbanFlow:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC0koD6LDYrp3Yo6m0TE2VAeuLoJWpqXDSSbkL7QjeK-XM-PxGBRTNkQn4gdCzfVx7E0M0t5YZkjClzXhv4y524_uhc9P23juqw3d-9LkMHrxYIvOIW5gB5UD8HvsqqnVVrH-QPhEHWAotghIxwG-bLp2u_Ul8n70JqwU0Mb_swsdV85w1DecS69dfqvRwD5MDYEAnJYIgvuhy0Ez77qwqMspd6LPmV_XHW2v3iWNl8OzsCAeuPzIpc3sYYUVnWji6PF_lze41HQjI",
  midnightRhythms:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8vdvag7bABKMxwwXgy3lYNPOCEkVBDBHWuzP-RVK7AxUFg9nuJ9Iwpl64tqw26fxPd_nDc_EGTITkc95QoOXC661xzdSIiSOwQIuChM_qLon1il_jDBbIWoJufyIj6e8GdIucZ-K3dyGwFg7C8vhJcmWaafM8ggZ3ZS2lYEFg0xbNjf64dz4ttRE-o2gPIxvFfbqnaYN4SrvJbl_18NmrLYqxUVZpmXQfKdWiyLDUeP9gohoJxSDPuEFFOPwa_UWgcQkCHEswJoI",
  globalGrooves:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBzlS1jJJjtxy4T5_6v6rOh9XjzVxtUWL6HepawCFfzCKa98dS39-JD1njvQTyfGIeVTLwTM1oSGAbeA3LUK14us7fIwb2_UIzhthhqUIK5IrCrMqWDkK7Pxb23WSa10bkSt2zRSxJkpUcbNuCBFMWw-4bfnutLOZMRhxK1y2-8l0wBWPWkakqHkzu6Cc_ilCgJGRyAfyf778Mjvzee6H2cjEc-5-_TNm0MMKJIXPl4yAgMqZTZj6KcNc-dO4GaJ3n5ALfyWg_Sl5Y",
  eliteMasterclass:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDA0fhY4hEKoxByjRjErRMng9bysoqkzkjBTropO9l9mIMu1RnBQJl3WQymzkPT9VO-cjApH0WWcUCko5GOuEG8kitD1MM_q_mUGKaA9lQdk2pgHoglOMIkUaetdeScac-56eZURHmVkimspIgJ8QBvD0osWMN0J4uIE75t9AWQDq0sFocpY6udcThf66fOji6in8eLAMpURKF5t9ayiThitSviO_ARNC0d5me9iHZXej8W9ZzZtCDrZrKVLsoX4s1l11NCBYivja8",
  galleryFeatured:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCkuBmN5LcTJFjxDXK2LQQM5FVkcHuL85DGaHXREhz48xqrJUFHklD7vOawQUE4rbXD0pKreoyF9D-mOuCzzFz2njQ4aVnGmEj6TmeUNd2taGmNRcZoHVc0Ly-mRdLtBd_3utqXT3SDbFp_xbZ0UvtKZA7e7ipjsrWFwtBLcvoJLngJOxJpCsazDFKdaHul1-z2qV8NJPtUmk_c9ZuBahxgf_UgD65fO2b5-q7ovMdortCRM6tviWKegRI_gNTDYLH8jejm97xgnVI",
  galleryPortrait:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBiYnqcC8kEEn1CkgTBqePcDTPvL1zBkI2uFoEOWu73LkHkoLG36pGzEsLyKJWsUTA16fCSNAPZwaWRDF0lvc_Bdc373VqplUf14OIqz2wI-L1tOLfv-cI4c0OURudya_W66iuT3VnU5y1nT-Ud0sb03K6m8b2Nz1yNK8Gxhzq9qbTcTOmFy9FQJRYFtinW-5kYxsSFpywL39qWJDVHoXb46CvdTWchQJYzIMijnn6FPBH1LfcpsJZ86keKFUbt1luzFb8KuZhT5uk",
  galleryHipHop:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAaSl9njMLE01SDlDHmneNOWjf93GysuCsKIZIE88KD3fprpEoPn0FHdVMmJ1AWfl2ONgrnkNCjj8rX5Q1HtOCZtaiXkkV8EdOlXbzpO0QakmR9982sx8FKdOtjj0MNYdwz0fAhtr2TA4jBkRJ6hFIuVs-oUNZUc9W61fLi9J2cKt1Jk-palmSrTwJ_qb5Jq_hnRVMe7LhbxwMrD4YfDdnDT9fcyKsd7_YQ5afM16uJOTxlX0a0X_U0UE6B0e8opHhzVeVBm7ltdDA",
  galleryStage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuByXJQ3jBcMgqT7rSJvg-NSHBM_qRboOUgHdkQcJAMvpO7vyYjDZ9wypoIEqjWa97aauDEVbXC0HYTSrujkhvC7VRIqOe4UfmycAnj-yNrB0hbmFX_dy4fcZvPbRnWryRcrYN_jDxq-jqVhq9ieeKzgT1LaIxe4C_k_UDOE8Z1AyyzY8zqJG8Tq4lGR1bkHQgkFG7-axYaJBudcdTiyFymVqVU-l4G-8oHcXWA9SveeLwXmKKn_X7KtzArcd_SiKmpGXlrLBmeNmME",
  galleryFeet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBZpTJVribaa_T-e7_iciy0OboEcb_AwF14M_TCZl5oftKx-zym2Te0JyzMRqHYBeLB2ofcP33_Euqi0oy7-K1GgKuEhDZXimNDYkVJ3jEUL82FPKjqGtdx1cqMe3WUPEZXc0_wb919c17AsuIdFrErhnWJ-pVYIQk1O7mrDldejlZK_SlwlST0ZR54naWkNFm9kFkF0Ai61KWIxTUZta1SdtjCGnreIN9zhJf5JI28eJvZJ1W00wt4kX3XoLo-rWkBKfxUNyzhc8Y",
  galleryInstructor:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDulEtKF75hUzP4dXRTl9QEafAm7aBHWTJxR19k7yhMCHE7epy4lgcCBl4hjzJZ5FsdDVdGp-81iR8lcIbC7qSZR-ehU8XhBYwyprEq7uu-Xh9fXt5ACdo5tmajpoxkScQAXMp3ahXWP5URHd5pYVCt5nHGJJeaE3BKreMlwE0upO1bXU0SCfrnUNvEZHg-w-iRXKT_PfU-611KkgFGpZjJw6OBkCmM-MlERXnQRnOicmJzFibvDmkk5AUoKBgYxF6T_12PuojEhDY",
  galleryRehearsal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCxweGbbAvlJDsn6FmWBh1iDAztvLfk5CQHepa56s4kaSQ4V4lLqZzycueq-aHljgJz2eS6KT180GX-15lDeG1dZo-hAs0jMUMRHdjAG5EpPuJ6TRCIcXaZn_FB3I3uUeienOho6X9zUsGpPvWTsNPUxWWZdbmq_r9Bs2Bq4tIcJNyf_ps2Fo_CvmpMOJkwhTyAcvB9xB2b8jRS8Xx5xw5DO0NsTRhU5d0gs0N4lacfbQhzwgPGauEi2bgdPHQEut9DWIjUAieINkY",
  contactMap:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBrO38t3BsoPW1FzU66b3TQ7FmdiOgTvGHE6Kw2oMtB0P7yxG0YQng2_DJ684PpvfWWAfd8hr-rM3TTBsZffEyxfBHQWgq044rNrfpocljSVhVKhp5rGYlduMTnRdw_YcuPPoZg4hGwhlIEwPnLarbkruXOFqyJINfDKKzBj4h47MB4dIMw2FEH1qHLK9j1VZX8pe3J_NmGISDbK6tvJdd52PJvbTeTY35py78UY72V2qao3z5NDqcBVISfxB7VLnH7ymxcqWQGUQQ",
} as const;

export const CONTACT_INFO = {
  address: {
    line1: "742 Beat Street,",
    line2: "Electric District, NY 10012",
  },
  phone: "+1 (555) RHYTHM-01",
  email: "hello@rhythm-studio.com",
} as const;

export const CONTACT_SUBJECTS = [
  "Class Inquiry",
  "Private Session",
  "Event Booking",
  "General Vibe Check",
] as const;

export const CONTACT_SOCIAL_LINKS = [
  { platform: "instagram" as const, label: "Instagram", href: "https://instagram.com" },
  { platform: "tiktok" as const, label: "TikTok", href: "https://tiktok.com" },
  { platform: "facebook" as const, label: "Facebook", href: "https://facebook.com" },
  { platform: "youtube" as const, label: "YouTube", href: "https://youtube.com" },
];
