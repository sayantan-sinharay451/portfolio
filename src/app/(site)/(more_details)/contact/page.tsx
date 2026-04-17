'use client';
import React from 'react';
import PageHeading, { PageHeadingProps } from '../_components/PageHeading';
import ContactForm from './_components/ContactForm';
import ContactInfo from './_components/ContactInfo';

const pageHeadingData: PageHeadingProps = {
  title: 'Contact',
  subTitle: "Get in touch — I'm available for freelance projects and collaborations.",
};

const ContactPage = () => {
  return (
    <>
      <PageHeading {...pageHeadingData} />

      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  );
};

export default ContactPage;
