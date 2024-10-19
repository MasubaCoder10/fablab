'use client';
import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl'; 
import logo from '../../../assets/images/NILAB__logo.png';

interface Parametre {
  id: string;
  email: string;
  slogan: string;
  number: string;
  linkLinkedIn: string;
  linkInstagram: string;
  linkTwitter: string;
  linkFacebook: string;
  image: string;
}

const Footer: React.FC = () => {
  const t = useTranslations('footer');

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const parametre: Parametre = {
    id: '1',
    email: 'contact@nilab.com',
    slogan: 'Innovating Locally, Empowering Globally',
    number: '0123456789',
    linkLinkedIn: 'https://linkedin.com',
    linkInstagram: 'https://instagram.com',
    linkTwitter: 'https://twitter.com',
    linkFacebook: 'https://facebook.com',
    image: '/logo.png',
  };

  return (
    <footer className="bg-[#084029] text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
          {/* Column 1 */}
          <div className="text-center md:text-left">
            <a href="#home" className="-m-1.5 p-1.5 flex items-center gap-2">
              <Image
                src={logo}
                alt="logo"
                className="h-auto w-full max-w-[160px] md:max-w-[300px] lg:max-w-[400px] object-cover"
                sizes="(max-width: 768px) 160px, (max-width: 1024px) 300px, 400px"
                priority
              />
            </a>
            <p className="pt-5">{parametre.slogan}</p>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="py-4">
              <li className="py-2">
                <Link href="/contact" className="py-2 text-white text-2xl font-bold">
                  {t('contactLink')}
                </Link>
              </li>
              <p>
                <Link href={`mailto:${parametre.email}`} className="py-4 ">
                  {parametre.email}
                </Link>
              </p>
              <p className="py-2">{parametre.number}</p>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:py-4 text-center md:text-left">
            <ul>
              <li className="py-2">
                <Link href="/" className="py-2 ">
                  {t('programLink')}
                </Link>
              </li>
              <li className="py-1">
                <Link href="#" className={`py-2 text-sm`}>
                  {t('currentProjectLink')}
                </Link>
              </li>
              <li className="py-1">
                <Link href="#" className={`py-2 text-sm`}>
                  {t('pastProjectLink')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="py-4">
            <ul>
              <li className="py-2">
                <Link href="/blog" className="py-2 ">
                  {t('blog')}
                </Link>
              </li>
              <li className="py-1 text-sm">
                <Link href="#" className="py-1 ">
                  {t('latestBlog')}
                </Link>
              </li>
              <li className="py-1">
                <Link href="#" className="py-1 ">
                  {t('allBlog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div className="py-4">
            <ul>
              <li className="py-2">
                <Link href="/about" className="py-2 ">
                  {t('aboutUs')}
                </Link>
              </li>
              <div className="flex space-x-4 mt-2 justify-center md:justify-start">
                <Link href={`${parametre.linkFacebook}`} target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                    <FaFacebook className="text-white group-hover:text-[#001A40] transition duration-300" />
                  </div>
                </Link>
                <Link href={`${parametre.linkLinkedIn}`} target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                    <FaLinkedin className="text-white group-hover:text-[#001A40] transition duration-300" />
                  </div>
                </Link>
                <Link href={`${parametre.linkInstagram}`} target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                    <FaInstagram className="text-white group-hover:text-[#001A40] transition duration-300" />
                  </div>
                </Link>
                <Link href={`${parametre.linkTwitter}`} target="_blank" rel="noopener noreferrer">
                  <div className="bg-[#FF6F00] rounded-full p-3 hover:bg-white transition duration-300 group">
                    <FaTwitter className="text-white group-hover:text-[#001A40] transition duration-300" />
                  </div>
                </Link>
              </div>
              <div className="hidden md:flex justify-center pt-10">
                <button
                  onClick={scrollToTop}
                  className="mt-4 p-2 bg-[#064f32] rounded-md flex items-center gap-5 border border-[#BFD3E3] text-white hover:bg-[#064f32] transition duration-300"
                >
                  {t('btn')} <FaArrowUp className="text-sm" />
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <hr className="w-full" />
      <div className="text-center py-5">
        <p>&copy; 2024 NILAB. {t('policy')}</p>
      </div>
    </footer>
  );
};

export default Footer;
