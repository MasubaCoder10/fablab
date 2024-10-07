"use client";

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image, { StaticImageData } from 'next/image';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import enFlag from './flags/en.png';
import frFlag from './flags/fr.png';

interface Props {
  local: string;
}

const NavBar: React.FC<Props> = ({ local }) => {
  const t = useTranslations('navBar');
  const pathname = usePathname();
console.log('path', pathname);
  const navigation = [
    { name: t('home'), href: '' },
    { name: t('aboutus'), href: '/about' },
    { name: t('blog'), href: '/blog' },
    { name: t('contac'), href: '/programs' },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(local);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setSelectedLang(local);
  }, [local]);

  const handleLanguageChange = (newLang: string) => {
    setSelectedLang(newLang);
    setDropdownOpen(false);

    if (typeof window !== 'undefined') {
      const newPath = pathname.replace(`/${local}`, `/${newLang}`);
      window.location.href = newPath;
    }
  };

  const getFlagSrc = (lang: string): StaticImageData => {
    switch (lang) {
      case 'en':
        return enFlag;
      case 'fr':
        return frFlag;
      default:
        return enFlag;
    }
  };

  return (
    <header id="home" className="absolute inset-x-0 top-0 z-50">
      <nav aria-label="Global" className="flex items-center justify-around p-6 lg:px-8 fixed top-0 w-full bg-white bg-opacity-90 h-[80px]">
        <div className="flex lg:flex">
          <a href="#home" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">FabLab</span>
            <span className="text-2xl font-bold text-indigo-600">FabLab</span>
          </a>
          <div className="md:hidden flex items-center sm:ml-20">
            <button
              className="appearance-none border-none outline-none bg-transparent text-sm focus:outline-none"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex items-center p-2 bg-white rounded-md shadow-md">
                <Image src={getFlagSrc(selectedLang)} alt={`${selectedLang} flag`} width={24} height={20} className="mr-2" />
                <span className="ml-2">{selectedLang.toUpperCase()}</span>
                <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleLanguageChange('en')}>
                  <Image src={enFlag} alt="English" width={24} height={20} />
                  <span className="ml-2">English</span>
                </li>
                <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleLanguageChange('fr')}>
                  <Image src={frFlag} alt="French" width={24} height={20} />
                  <span className="ml-2">French</span>
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex md:hidden">
          <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        <div className="hidden md:flex md:gap-x-12 h-full items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={"/" + local + item.href}
              className={`relative text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-300 ease-in-out h-full flex items-center after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-23px] after:h-[6px] after:bg-indigo-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 after:origin-left
                ${pathname=== "/" + local + item.href ? 'text-indigo-600 after:scale-x-100' : ''}
              `}
            >

              
              
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden relative md:flex items-center">
          <button
            className="appearance-none border-none outline-none bg-transparent text-sm focus:outline-none"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex items-center p-2 bg-white rounded-md shadow-md">
              <Image src={getFlagSrc(selectedLang)} alt={`${selectedLang} flag`} width={24} height={20} className="mr-2" />
              <span className="ml-2">{selectedLang.toUpperCase()}</span>
              <FaChevronDown className={`ml-2 transform transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {dropdownOpen && (
            <ul className="absolute top-full mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
              <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleLanguageChange('en')}>
                <Image src={enFlag} alt="English" width={24} height={20} />
                <span className="ml-2">English</span>
              </li>
              <li className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 transition-colors" onClick={() => handleLanguageChange('fr')}>
                <Image src={frFlag} alt="French" width={24} height={20} />
                <span className="ml-2">French</span>
              </li>
            </ul>
          )}
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
        <DialogPanel className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="relative bg-white rounded-lg p-6 w-full max-w-sm">
            <div className="flex items-center justify-between">
              <a href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Next</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-7 w-7" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative">
                      <a
                        href={item.href}
                        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50
                        ${pathname.includes(item.href) ? 'text-indigo-600' : ''}
                        `}
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default NavBar;
