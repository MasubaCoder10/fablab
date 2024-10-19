'use client';

import React, { useState, ChangeEvent } from 'react';
import { useTranslations } from 'next-intl';

interface FormData {
  nom: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    email: '',
    message: ''
  });

  const t = useTranslations('ContactUsPageForm');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

 

  return (
    <form  className="bg-white p-6 rounded shadow-2xl w-full max-w-6xl mx-auto mb-16">
      <div className="mb-4">
        <input
          className="border-2 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-green-100"
          id="nom"
          type="text"
          placeholder={t('name')}
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <input
          className="border-2 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-green-100"
          id="email"
          type="email"
          placeholder={t('email')}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-6">
        <textarea
          className="border-2 rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline focus:ring focus:border-green-100"
          id="message"
          placeholder={t('message')}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex justify-end">
        <button
          className={` border-2  border-orange-600 bg-white hover:bg-orange-600 text-[#084029] px-6 py-2 rounded-2xl font-semibold hover:text-white`}
          type="submit"
        >
          {t('btn')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
