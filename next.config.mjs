import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['africanarguments.org', 'media.istockphoto.com'],
      },
};
 
export default withNextIntl(nextConfig);