import { mobileProducts } from './products';

export const apps = mobileProducts;

export function getAppBySlug(slug: string | undefined) {
  return apps.find((app) => app.slug === slug);
}

export type {
  Platform,
  ProductFaq as AppFaq,
  ProductInfo as AppInfo,
  ProductRelease as AppRelease,
  ProductStatus as AppStatus,
} from './products';
