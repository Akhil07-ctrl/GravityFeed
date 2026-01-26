import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Gravity Feed',
  description: 'Terms & Conditions for Gravity Feed - Read our terms of service and usage guidelines.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using Gravity Feed (&ldquo;the Service&rdquo;), you agree to be bound by these 
              Terms & Conditions (&ldquo;Terms&rdquo;). If you disagree with any part of these terms, 
              you may not access the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Gravity Feed is a news aggregation platform that provides personalized news content 
              from various sources. The Service includes features such as news browsing, 
              bookmarking, and personalized feeds.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            
            <h3 className="text-xl font-medium mb-3">Registration</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              To access certain features, you must register for an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and update your account information</li>
              <li>Keep your password secure and confidential</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Account Termination</h3>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to suspend or terminate your account for violations of these Terms 
              or for any other reason at our sole discretion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Use the Service for any illegal or unauthorized purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use automated tools to access the Service excessively</li>
              <li>Interfere with or disrupt the Service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Content and Intellectual Property</h2>
            
            <h3 className="text-xl font-medium mb-3">News Content</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              News content displayed on Gravity Feed is sourced from third-party providers. 
              We do not claim ownership of news articles, headlines, or media content.
            </p>

            <h3 className="text-xl font-medium mb-3">Service Content</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Service, including its design, text, graphics, and functionality, 
              is owned by Gravity Feed and protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of the Service, to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our Service may contain links to third-party websites or services. We are not 
              responsible for the content, privacy policies, or practices of third-party sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimers</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. We make no warranties, 
              expressed or implied, and hereby disclaim all warranties including, without limitation, 
              the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              In no event shall Gravity Feed, our directors, employees, partners, agents, suppliers, 
              or affiliates be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including loss of profits, data, use, or other intangible losses, resulting 
              from your use of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-gray-700 dark:text-gray-300">
              You agree to defend, indemnify, and hold harmless Gravity Feed and our licensee, 
              and licensors, and their respective directors, employees, contractors, agents, 
              officers, and shareholders, from and against any and all claims, damages, obligations, 
              losses, liabilities, costs or debt, and expenses (including but not limited to attorney&rsquo;s fees).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may terminate or suspend your account and bar access to the Service immediately, 
              without prior notice or liability, under our sole discretion, for any reason whatsoever 
              and without limitation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms shall be interpreted and governed by the laws of the jurisdiction 
              in which Gravity Feed operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify these Terms at any time. If we make material changes, 
              we will notify you by email or by posting a notice on our Service prior to the effective 
              date of the changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                Email: legal@gravity-feed.com<br />
                Website: www.gravity-feed.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
