import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - Gravity Feed',
  description: 'Cookie Policy for Gravity Feed - Learn how we use cookies and tracking technologies.',
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
              when you visit a website. They help the website remember information about your visit, 
              which can make it easier to visit the site again and make the site more useful to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gravity Feed uses cookies for the following purposes:
            </p>
            
            <h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies are necessary for the website to function and cannot be switched off in our systems. 
              They are usually only set in response to actions made by you which amount to a request for services.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Authentication and login status</li>
              <li>Security tokens</li>
              <li>Shopping cart contents (if applicable)</li>
              <li>Load balancing</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Performance Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies allow us to count visits and traffic sources so we can measure and improve 
              the performance of our site.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Analytics and usage statistics</li>
              <li>Error tracking and reporting</li>
              <li>Performance monitoring</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Functional Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies enable the website to provide enhanced functionality and personalization.
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Remembering your preferences</li>
              <li>Personalized content recommendations</li>
              <li>Theme and display settings</li>
              <li>Language preferences</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Targeting Cookies</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These cookies may be set through our site by our advertising partners to build a profile 
              of your interests and show you relevant adverts on other sites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Cookie Name</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Purpose</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">session_token</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Authentication</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">preferences</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">User preferences</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">30 days</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">analytics_id</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Analytics tracking</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">theme</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Dark/light mode</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use third-party services that may set their own cookies on your device:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li><strong>Google Analytics:</strong> For website analytics and usage tracking</li>
              <li><strong>Google OAuth:</strong> For authentication and login services</li>
              <li><strong>News API:</strong> For news content delivery and caching</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
            
            <h3 className="text-xl font-medium mb-3">Browser Settings</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can control and/or delete cookies as you wish. You can delete all cookies that are 
              already on your computer and you can set most browsers to prevent them from being placed. 
              However, if you do this, you may have to manually adjust some preferences every time you 
              visit a site and some services and functionality may not work.
            </p>

            <h3 className="text-xl font-medium mb-3">Cookie Consent</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you first visit our website, you&apos;ll see a cookie banner where you can:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize your cookie preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookie Lifespan</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Cookies have different lifespans:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
              <li><strong>Flash Cookies:</strong> Stored by Adobe Flash Player and managed through that application</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Accept or reject cookies</li>
              <li>Withdraw consent at any time</li>
              <li>View what cookies are active</li>
              <li>Delete cookies from your device</li>
              <li>Request information about our use of cookies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you choose to disable cookies, some features of our website may not function properly:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>You may not be able to log in or maintain your session</li>
              <li>Personalized content may not be available</li>
              <li>Some interactive features may not work</li>
              <li>Analytics and performance tracking will be limited</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Cookie Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes by posting the new policy on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions about this Cookie Policy, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300">
                Email: privacy@gravity-feed.com<br />
                Website: www.gravity-feed.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
