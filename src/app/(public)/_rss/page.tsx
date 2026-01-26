import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RSS Feeds - Gravity Feed',
  description: 'Generate custom RSS feeds for your favorite news categories and sources on Gravity Feed.',
};

export default function RSSFeeds() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            RSS Feeds
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is RSS?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              RSS (Really Simple Syndication) is a web feed format that allows you to receive updates 
              from your favorite websites in a standardized format. Subscribe to our RSS feeds to get 
              the latest news delivered directly to your RSS reader.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Available RSS Feeds</h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Category Feeds</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Subscribe to specific news categories:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">General News</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/general
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Business</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/business
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Technology</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/technology
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Sports</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/sports
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Entertainment</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/entertainment
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Health</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/health
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Science</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/science
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Politics</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/politics
                    </code>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Regional Feeds</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  News from specific regions:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">United States</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/us
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">United Kingdom</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/uk
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Canada</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/ca
                    </code>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">Australia</span>
                    <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                      /rss/au
                    </code>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Custom Feeds</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Create personalized RSS feeds based on your preferences:
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4">
                  <p className="text-blue-800 dark:text-blue-200 mb-2">
                    <strong>Coming Soon:</strong> Custom RSS feeds will allow you to:
                  </p>
                  <ul className="list-disc pl-6 text-blue-800 dark:text-blue-200">
                    <li>Combine multiple categories</li>
                    <li>Filter by keywords</li>
                    <li>Exclude specific sources</li>
                    <li>Set update frequency</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How to Use RSS Feeds</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Step 1: Choose an RSS Reader</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Popular RSS readers include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                  <li><strong>Feedly:</strong> Web and mobile app with free and premium plans</li>
                  <li><strong>Inoreader:</strong> Advanced RSS reader with automation features</li>
                  <li><strong>The Old Reader:</strong> Simple, clean interface</li>
                  <li><strong>Feedbin:</strong> Minimalist design with fast updates</li>
                  <li><strong>NewsBlur:</strong> Social features and story training</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Step 2: Copy the Feed URL</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Click on any feed URL above or construct your own using this format:
                </p>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <code className="text-sm">
                    https://gravity-feed.com/rss/[category]
                  </code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Step 3: Add to Your Reader</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Paste the URL into your RSS reader&apos;s &ldquo;Add Feed&rdquo; or &ldquo;Subscribe&rdquo; section.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">RSS Feed Format</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our RSS feeds include the following information for each article:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <pre className="text-sm text-gray-700 dark:text-gray-300">
{`<item>
  <title>Article Title</title>
  <description>Article summary...</description>
  <link>https://source.com/article-url</link>
  <pubDate>Mon, 01 Jan 2024 12:00:00 GMT</pubDate>
  <category>Technology</category>
  <source>Source Name</source>
  <guid isPermaLink="true">unique-article-id</guid>
</item>`}
              </pre>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Update Schedule</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div>
                  <h4 className="font-medium">Breaking News Feed</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Real-time updates</p>
                </div>
                <span className="text-green-600 dark:text-green-400 font-medium">Every 5 minutes</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <div>
                  <h4 className="font-medium">Category Feeds</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Regular updates</p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-medium">Every 30 minutes</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <div>
                  <h4 className="font-medium">Custom Feeds</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Personalized schedule</p>
                </div>
                <span className="text-purple-600 dark:text-purple-400 font-medium">User-defined</span>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800 dark:text-yellow-200">
                <strong>Fair Usage Policy:</strong> RSS feeds are limited to 100 requests per hour per IP address 
                to ensure fair access for all users. Commercial use requires a separate agreement.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Feed not updating?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check your RSS reader&apos;s refresh settings. Some readers only update feeds every few hours.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Getting errors?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ensure the feed URL is correct and your RSS reader supports RSS 2.0 format.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Missing articles?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Some sources may have restrictions on RSS syndication. Contact us if you need specific content.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Developer Resources</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              For developers who want to integrate our RSS feeds:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>XML validation tools available</li>
              <li>JSON Feed format support (coming soon)</li>
              <li>WebSub/PubSubHubbub integration (planned)</li>
              <li>API documentation for custom feed generation</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
