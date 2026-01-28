'use client';

import { Twitter, Linkedin, Facebook, Instagram, Mail, Clock, Wrench, Handshake, Newspaper, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ContactClient() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString());
    }, []);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formspree.io/f/mojdekeg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setSubmitStatus('success');
                form.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <div className="max-w-4xl mx-auto px-6 py-16">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Last updated: {currentDate}
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            We&apos;d love to hear from you! Whether you have questions, feedback, partnership opportunities,
                            or need support with our platform, our team is here to help. Choose the most convenient way
                            to reach out to us below.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">General Inquiries</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                For general questions, feedback, or information about Gravity Feed.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-blue-600 dark:text-blue-400"><Mail className="w-5 h-5" /></span>
                                    <a href="mailto:hello@gravity-feed.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        hello@gravity-feed.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-blue-600 dark:text-blue-400"><Clock className="w-5 h-5" /></span>
                                    <span className="text-gray-700 dark:text-gray-300">Response within 24 hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Support</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Technical support, bug reports, and help with using our platform.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-600 dark:text-green-400"><Wrench className="w-5 h-5" /></span>
                                    <a href="mailto:support@gravity-feed.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        support@gravity-feed.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-600 dark:text-green-400"><Clock className="w-5 h-5" /></span>
                                    <span className="text-gray-700 dark:text-gray-300">Response within 12 hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Partnerships</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Business partnerships, content collaborations, and media inquiries.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-600 dark:text-purple-400"><Handshake className="w-5 h-5" /></span>
                                    <a href="mailto:partnerships@gravity-feed.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        partnerships@gravity-feed.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-purple-600 dark:text-purple-400"><Clock className="w-5 h-5" /></span>
                                    <span className="text-gray-700 dark:text-gray-300">Response within 48 hours</span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-4">Press & Media</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Press releases, media kits, and journalist inquiries.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-600 dark:text-orange-400"><Newspaper className="w-5 h-5" /></span>
                                    <a href="mailto:press@gravity-feed.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                                        press@gravity-feed.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-orange-600 dark:text-orange-400"><Zap className="w-5 h-5" /></span>
                                    <span className="text-gray-700 dark:text-gray-300">Immediate response</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                        <p className="text-green-800 dark:text-green-200">
                                            Thank you for your message! We&apos;ll get back to you within 24 hours.
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                        <p className="text-red-800 dark:text-red-200">
                                            Something went wrong. Please try again or email us directly at hello@gravity-feed.com
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Your Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select a topic</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="support">Technical Support</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="press">Press & Media</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-black text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                <div className="flex flex-col justify-center items-center space-y-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        We&apos;ll respond within 24 hours
                                    </span>
                                </div>
                            </form>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Office Location</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
                                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                                    <p className="font-medium">Gravity Feed Inc.</p>
                                    <p>Flat - 305, SVS Heights</p>
                                    <p>Ruby Block, Kompally</p>
                                    <p>Hyderabad, Telangana - 500014</p>
                                    <p>India</p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Phone: +91 9872669959
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
                        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold mb-2">Customer Support</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                                        Saturday - Sunday: 10:00 AM - 4:00 PM PST
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Business & Press</h4>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Monday - Friday: 9:00 AM - 5:00 PM PST<br />
                                        Closed on weekends and holidays
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-6">Connect With Us</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Follow us on social media for updates, news tips, and community engagement:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <a href="https://twitter.com/gravityfeed" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="text-center">
                                    <Twitter className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                                    <span className="text-sm font-medium">Twitter</span>
                                </div>
                            </a>
                            <a href="https://linkedin.com/company/gravity-feed" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="text-center">
                                    <Linkedin className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                                    <span className="text-sm font-medium">LinkedIn</span>
                                </div>
                            </a>
                            <a href="https://facebook.com/gravityfeed" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="text-center">
                                    <Facebook className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                                    <span className="text-sm font-medium">Facebook</span>
                                </div>
                            </a>
                            <a href="https://instagram.com/gravityfeed" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <div className="text-center">
                                    <Instagram className="w-8 h-8 mx-auto mb-2 text-pink-500" />
                                    <span className="text-sm font-medium">Instagram</span>
                                </div>
                            </a>
                        </div>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <summary className="font-medium cursor-pointer">How quickly will I receive a response?</summary>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">
                                    We aim to respond to all inquiries within 24 hours. Support tickets are typically answered
                                    within 12 hours, while press inquiries receive immediate attention.
                                </p>
                            </details>

                            <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <summary className="font-medium cursor-pointer">Do you offer phone support?</summary>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">
                                    Currently, we offer email-based support to ensure detailed and trackable assistance.
                                    Phone support is available for enterprise customers and press inquiries.
                                </p>
                            </details>

                            <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <summary className="font-medium cursor-pointer">Can I request a feature or report a bug?</summary>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">
                                    Absolutely! Please email our support team with detailed information about the feature
                                    request or bug report. Include screenshots and steps to reproduce any issues.
                                </p>
                            </details>

                            <details className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                                <summary className="font-medium cursor-pointer">How do I become a news source partner?</summary>
                                <p className="mt-3 text-gray-600 dark:text-gray-400">
                                    Please reach out to our partnerships team with information about your publication,
                                    audience size, and content focus. We&apos;ll review your submission and get back to you.
                                </p>
                            </details>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
