import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer - Gravity Feed',
  description: 'Disclaimer for Gravity Feed - Important information about our news aggregation service.',
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Important Notice</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Please read this disclaimer carefully before using Gravity Feed. This disclaimer 
              applies to all users of our news aggregation platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">News Content Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gravity Feed is a news aggregation platform that curates content from various sources. 
              We do not create, edit, or endorse the news articles displayed on our platform.
            </p>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                <strong>Important:</strong> The views, opinions, and information expressed in news articles 
                belong solely to the original content creators and do not necessarily reflect the views of Gravity Feed.
              </p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We are not responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>The accuracy, reliability, or completeness of news content</li>
              <li>Any errors, omissions, or misinformation in news articles</li>
              <li>The timeliness or currency of news information</li>
              <li>Defamatory, offensive, or harmful content in news articles</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Financial Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              News content on Gravity Feed may include financial information, market analysis, 
              investment advice, or economic commentary. This information is provided for 
              informational purposes only and should not be considered as:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Financial advice</li>
              <li>Investment recommendations</li>
              <li>Trading suggestions</li>
              <li>Professional financial guidance</li>
            </ul>
            
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4 mb-4">
              <p className="text-red-800 dark:text-red-200">
                <strong>Warning:</strong> Always consult with qualified financial professionals before making 
                any investment decisions. We are not liable for any financial losses resulting from news content.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Health and Medical Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              News articles may contain health, medical, or wellness information. Such content is 
              not intended as medical advice and should not be used to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Diagnose medical conditions</li>
              <li>Treat health problems</li>
              <li>Replace professional medical consultation</li>
              <li>Make healthcare decisions</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300">
              Always seek qualified medical advice for health concerns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Legal Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              News content may include legal information or analysis. This information is not 
              legal advice and should not be used as a substitute for professional legal counsel. 
              Consult qualified legal professionals for legal matters.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technical Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              While we strive to maintain a reliable service, we cannot guarantee:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Uninterrupted service availability</li>
              <li>Error-free operation</li>
              <li>Real-time news updates</li>
              <li>Compatibility with all devices or browsers</li>
            </ul>
            
            <p className="text-gray-700 dark:text-gray-300">
              We reserve the right to modify, suspend, or discontinue any part of our service without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our platform contains links to third-party websites and external content. We are not 
              responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>The content of external websites</li>
              <li>Privacy practices of third-party sites</li>
              <li>Security of external links</li>
              <li>Any damages from visiting third-party sites</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Responsibility</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As a user of Gravity Feed, you are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Critically evaluating news content</li>
              <li>Verifying information from multiple sources</li>
              <li>Making informed decisions based on news</li>
              <li>Understanding the limitations of aggregated content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300">
              To the maximum extent permitted by law, Gravity Feed shall not be liable for any 
              direct, indirect, incidental, consequential, or punitive damages arising from your 
              use of our service or reliance on news content displayed on our platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
            <p className="text-gray-700 dark:text-gray-300">
              You agree to indemnify and hold Gravity Feed harmless from any claims, damages, 
              or expenses arising from your use of our service or reliance on news content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Copyright and Fair Use</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We respect intellectual property rights and strive to operate within fair use principles. 
              News content is displayed with proper attribution to original sources. If you believe 
              any content infringes on your rights, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this disclaimer periodically to reflect changes in our service or 
              applicable laws. Continued use of our platform constitutes acceptance of any updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have questions about this disclaimer or need to report concerns about news content:
            </p>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                Email: legal@gravity-feed.com<br />
                Website: www.gravity-feed.com<br />
                For content issues: content@gravity-feed.com
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              By using Gravity Feed, you acknowledge that you have read, understood, and agree to this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
