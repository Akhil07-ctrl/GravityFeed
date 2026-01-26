import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us - Gravity Feed',
  description: 'Get in touch with the Gravity Feed team - We\'d love to hear from you about feedback, partnerships, or support.',
};

export default function Contact() {
  return <ContactClient />;
}
