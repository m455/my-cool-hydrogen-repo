import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  routes: import.meta.globEager('./src/routes/**/*.server.[jt](s|sx)'),
  shopify: {
    defaultLocale: 'en',
    storeDomain: 'jesses-very-cool-store.myshopify.com',
    storefrontToken: 'f3f2b52d2b6b53fa52f45512020ea464',
    storefrontApiVersion: '2022-07',
  },
});
