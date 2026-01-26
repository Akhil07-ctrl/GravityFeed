import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Gravity Feed',
  description: 'Learn about Gravity Feed - Our mission, vision, and the story behind our news aggregation platform.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              At Gravity Feed, we believe in the power of informed citizens. Our mission is to make 
              quality news accessible, personalized, and engaging for everyone. We aggregate news from 
              trusted sources worldwide, helping you stay informed about what matters most to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We envision a world where everyone has access to reliable, diverse, and personalized 
              news content. By leveraging cutting-edge technology and trusted partnerships, we&apos;re 
              building the future of news consumption—one that respects your time, intelligence, and 
              diverse perspectives.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Gravity Feed was born from a simple observation: in an age of information overload, 
                finding quality news that matters to you shouldn&apos;t be a challenge. Our founders, 
                experienced journalists and technologists, recognized the need for a platform that 
                combines the best of human curation with intelligent automation.
              </p>
              <p>
                Launched in 2026, we started with a vision to create a news platform that respects 
                your time and intelligence. Today, we serve thousands of users who rely on us for 
                their daily news needs, from breaking headlines to in-depth analysis across categories 
                that matter to them.
              </p>
              <p>
                Our commitment to quality, accuracy, and user privacy remains at the core of everything 
                we do. We&apos;re not just another news aggregator—we&apos;re your trusted partner in 
                staying informed.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Makes Us Different</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Quality Over Quantity</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We prioritize reliable sources and verified information over clickbait and sensationalism.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Personalization</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our intelligent algorithms learn your preferences to deliver news that matters to you.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Privacy First</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We never sell your data and believe in transparent privacy practices.
                </p>
              </div>
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Access news from 157 countries and 50+ languages for a truly global view.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-2">Integrity</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We uphold the highest standards of journalistic integrity and accuracy in everything we do.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We continuously evolve our technology to provide better, faster, and more relevant news experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-2">User-Centric</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Your needs and preferences guide every decision we make, from feature development to source selection.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-2">Transparency</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We believe in being open about our processes, sources, and business practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Technology & Innovation</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our platform is built on cutting-edge technology to deliver the best news experience:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>AI-powered content categorization and personalization</li>
              <li>Real-time news aggregation from 80,000+ sources</li>
              <li>Advanced filtering to remove duplicates and low-quality content</li>
              <li>Responsive design for seamless cross-device experience</li>
              <li>Secure authentication and data protection</li>
              <li>Optimized performance for fast loading times</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Partners & Affiliations</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">News API</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We partner with News API, the leading provider of news data from trusted sources worldwide. 
                This partnership ensures we have access to real-time, reliable news content from thousands 
                of publications across the globe.
              </p>
              <a 
                href="https://newsapi.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Learn more about News API →
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">80K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">News Sources</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">157</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Languages</div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Updates</div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Commitment to Sustainability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We&apos;re committed to environmental sustainability. Our platform is hosted on carbon-neutral 
              servers, and we continuously optimize our code to reduce energy consumption. We believe that 
              technology companies have a responsibility to minimize their environmental impact while 
              delivering value to users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We&apos;re just getting started. As we continue to grow and innovate, we invite you to be 
              part of our mission to make quality news accessible to everyone. Whether you&apos;re a reader, 
              contributor, or partner, there&apos;s a place for you in the Gravity Feed community.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
              <a 
                href="/careers" 
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                View Careers
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
