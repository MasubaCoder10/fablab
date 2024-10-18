import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['africanarguments.org', 'media.istockphoto.com', 't4.ftcdn.net', 'www.un.org', 'cms.groupeditors.com'
          ,"encrypted-tbn0.gstatic.com", "lh3.googleusercontent.com", "businesswest.com"
        ],
      },
};
 
export default withNextIntl(nextConfig);