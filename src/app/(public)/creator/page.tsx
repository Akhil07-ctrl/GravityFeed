import { Metadata } from 'next';
import Image from 'next/image';
import { Mail, MapPin, Github, Linkedin, Twitter, Globe, Code2, Palette, Database, Lock, Cloud, CheckCircle2, Circle } from 'lucide-react';

// Creator information - Replace with your actual details
const creator = {
  initials: 'KA',
  name: 'Kundena Akhil',
  title: 'Full-Stack Developer & Creator',
  tagline: 'Building the future of news consumption, one line of code at a time.',
  bio: `I'm a passionate full-stack developer who built Gravity Feed from the ground up. 
        With a vision to revolutionize how people consume news in the digital age, I combined 
        modern web technologies with intelligent design to create a seamless news aggregation platform.`,
  gradient: 'from-blue-500 via-purple-600 to-pink-600',
  email: 'akhilkundena@gmail.com',
  location: 'Hyderabad, India',
  // Add your profile picture path here (e.g., '/profile.jpg' in the public folder)
  // Or use GitHub profile picture: 'https://github.com/Akhil07-ctrl.png'
  profilePicture: '/profile.jpg',
  socialLinks: {
    github: 'https://github.com/Akhil07-ctrl',
    linkedin: 'https://www.linkedin.com/in/kundena-akhil-4b7073170/',
    twitter: 'https://x.com/akhil73602199',
    portfolio: 'https://portfolio-nine-flax-29.vercel.app/'
  }
};

// Tech stack used in the project
const techStack = [
  { name: 'Next.js 16', category: 'Frontend Framework', icon: 'Code2' },
  { name: 'React 19', category: 'UI Library', icon: 'Code2' },
  { name: 'TypeScript', category: 'Language', icon: 'Code2' },
  { name: 'Tailwind CSS', category: 'Styling', icon: 'Palette' },
  { name: 'MongoDB', category: 'Database', icon: 'Database' },
  { name: 'Mongoose', category: 'ODM', icon: 'Database' },
  { name: 'NextAuth.js', category: 'Authentication', icon: 'Lock' },
  { name: 'Framer Motion', category: 'Animations', icon: 'Code2' },
  { name: 'GSAP', category: 'Scroll Animations', icon: 'Code2' },
  { name: 'Lucide Icons', category: 'Icon Library', icon: 'Palette' },
  { name: 'News API', category: 'Data Source', icon: 'Cloud' },
  { name: 'Vercel', category: 'Deployment', icon: 'Cloud' }
];

// Key skills
const skills = [
  'MERN Stack Development',
  'MongoDB & Mongoose ODM',
  'Express.js & Node.js',
  'React.js & Next.js',
  'TypeScript & ES6+',
  'RESTful API Design',
  'State Management (Redux/Context)',
  'Authentication (JWT/OAuth)',
  'Tailwind CSS & Responsive UI',
  'Git & Version Control',
  'Performance Optimization',
  'SEO Best Practices',
];

// Project milestones
const milestones = [
  { title: 'Concept & Planning', description: 'Ideation, architecture design, and technology stack selection', date: 'Week 1' },
  { title: 'Core Development', description: 'Built authentication, news aggregation, and core features', date: 'Week 2-3' },
  { title: 'Feature Enhancement', description: 'Added bookmarks, categories, search, and user preferences', date: 'Week 3-4' },
  { title: 'Launch & Polish', description: 'Deployed to production, UI refinements, and optimizations', date: 'Week 4' }
];

export const metadata: Metadata = {
  title: 'About the Creator - Gravity Feed',
  description: 'Meet the developer behind Gravity Feed - A solo journey to revolutionize news consumption.',
};

export default function AboutCreator() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About the Creator
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The story behind Gravity Feed
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Hero Section - Creator Profile */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                  {creator.profilePicture ? (
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
                      <Image
                        src={creator.profilePicture}
                        alt={creator.name}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${creator.gradient} rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl`}>
                      {creator.initials}
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {creator.name}
                  </h2>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
                    {creator.title}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6">
                    "{creator.tagline}"
                  </p>

                  {/* Social Links */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                    <a href={creator.socialLinks.github} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                    <a href={creator.socialLinks.linkedin} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                    <a href={creator.socialLinks.twitter} className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </a>
                    <a href={creator.socialLinks.portfolio} className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                      <Globe className="w-4 h-4" />
                      Portfolio
                    </a>
                  </div>

                  {/* Contact Info */}
                  <div className="flex flex-col md:flex-row gap-4 text-gray-600 dark:text-gray-400">
                    <span className="flex items-center justify-center md:justify-start gap-2">
                      <Mail className="w-4 h-4" />
                      {creator.email}
                    </span>
                    <span className="flex items-center justify-center md:justify-start gap-2">
                      <MapPin className="w-4 h-4" />
                      {creator.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bio Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              {creator.bio}
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Core Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-blue-200 dark:border-gray-600 rounded-lg p-4 text-center">
                  <p className="text-gray-800 dark:text-gray-200 font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Gravity Feed is built using modern, cutting-edge technologies to ensure performance,
              scalability, and an exceptional user experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((tech, index) => {
                const IconComponent = tech.icon === 'Code2' ? Code2 : tech.icon === 'Palette' ? Palette : tech.icon === 'Database' ? Database : tech.icon === 'Lock' ? Lock : Cloud;
                return (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-lg transition-shadow">
                    <IconComponent className="w-8 h-8 mb-3 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">{tech.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tech.category}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Project Journey */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Project Journey</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              Building Gravity Feed has been an incredible solo journey. Here's how it evolved from
              concept to reality:
            </p>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {milestone.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {milestone.date}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Development Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What Drives Me</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>User-first design and experience</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Clean, maintainable code</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Continuous learning and improvement</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Performance and accessibility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Innovation and experimentation</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Development Approach</h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start space-x-3">
                    <Circle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 fill-current" />
                    <span>Iterative development and testing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Circle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 fill-current" />
                    <span>Mobile-first responsive design</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Circle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 fill-current" />
                    <span>Modern best practices and patterns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Circle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 fill-current" />
                    <span>Security and data privacy focused</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Circle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5 fill-current" />
                    <span>Scalable architecture from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100%</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Solo Development</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Designed, developed, and deployed entirely by myself
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-lg border border-purple-200 dark:border-purple-700">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Features Implemented</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  From authentication to real-time news aggregation
                </p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">∞</div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">Learning & Growing</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  Continuously improving and adding new features
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-l-4 border-blue-500 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm always open to discussing new opportunities, collaborations, or just chatting
                about technology and development. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`mailto:${creator.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Send Email
                </a>
                <a
                  href={creator.socialLinks.linkedin}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  Connect on LinkedIn
                </a>
                <a
                  href={creator.socialLinks.github}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
