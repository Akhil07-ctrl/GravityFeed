import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Data Sources - Gravity Feed',
  description: 'Learn about our news data sources, partners, and coverage at Gravity Feed.',
};

export default function DataSources() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Data Sources
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our News Partners</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Gravity Feed aggregates news from trusted sources worldwide through our partnership with News API. 
              We carefully select sources to ensure comprehensive coverage and reliability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Primary Data Provider</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">News API</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our primary source for real-time news data from thousands of publications worldwide.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
                <li>Over 80,000 news sources</li>
                <li>Real-time updates every 15 minutes</li>
                <li>Coverage in 50+ languages</li>
                <li>157 countries represented</li>
              </ul>
              <a 
                href="https://newsapi.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Visit News API →
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Source Categories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Business & Finance</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Bloomberg</li>
                  <li>• Reuters Business</li>
                  <li>• Financial Times</li>
                  <li>• Wall Street Journal</li>
                  <li>• CNBC</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Technology</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• TechCrunch</li>
                  <li>• The Verge</li>
                  <li>• Ars Technica</li>
                  <li>• Wired</li>
                  <li>• Engadget</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Sports</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• ESPN</li>
                  <li>• BBC Sport</li>
                  <li>• Sky Sports</li>
                  <li>• Fox Sports</li>
                  <li>• Sports Illustrated</li>
                </ul>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3">Entertainment</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Variety</li>
                  <li>• Hollywood Reporter</li>
                  <li>• Entertainment Weekly</li>
                  <li>• People Magazine</li>
                  <li>• TMZ</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Geographic Coverage</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Region</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Countries</th>
                    <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-left">Sources</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">North America</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">3</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">15,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Europe</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">45</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">25,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Asia Pacific</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">35</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">20,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Middle East</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">15</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">8,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Africa</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">54</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">5,000+</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">Latin America</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">20</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">7,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Update Frequency</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-semibold">Breaking News</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time updates</p>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">Every 5 minutes</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-semibold">Top Headlines</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Major stories</p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Every 15 minutes</span>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div>
                  <h3 className="font-semibold">Category News</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Business, Tech, Sports, etc.</p>
                </div>
                <span className="text-purple-600 dark:text-purple-400 font-medium">Every 30 minutes</span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Source Quality Standards</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We maintain strict quality standards for our news sources:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Editorial standards and fact-checking processes</li>
              <li>Regular publication schedule</li>
              <li>Transparent ownership and funding</li>
              <li>Professional journalism credentials</li>
              <li>Compliance with local media regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Processing</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our system processes news data through several stages:
            </p>
            <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li><strong>Collection:</strong> Real-time API polling from News API</li>
              <li><strong>Filtering:</strong> Remove duplicates and low-quality content</li>
              <li><strong>Categorization:</strong> Automatic topic classification</li>
              <li><strong>Ranking:</strong> Sort by relevance and timeliness</li>
              <li><strong>Delivery:</strong> Serve personalized feeds to users</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">API Limits & Usage</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                <strong>Note:</strong> Our current plan allows for 1,000 API requests per day, 
                ensuring fresh content while managing costs effectively.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
