'use client';

import BannerCard from './BannerCard';
import { BEGINNERS, BUSINESS, MAP, TECH } from './constants';

export const Banner = ({ active }: { active: number }) => {
  switch (active) {
    case 1:
      return <BannerCard content={BEGINNERS} />;
    case 2:
      return <BannerCard content={TECH} />;
    case 3:
      return <BannerCard content={BUSINESS} />;
    case 4:
      return <BannerCard content={MAP} />;

    default:
      return <BannerCard content={BEGINNERS} />;
  }
};
