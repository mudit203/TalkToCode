import React from 'react';
import { Brain, Zap, GitBranch, BarChart, Check, Play, Code, Mic, Github, Twitter} from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';


const teamMembers = [
  {
    profilePhoto: "https://i.ibb.co/yFYBRHLq/d2d37e16-4c95-4905-ac9e-4e2ae77c2ddc.png",
    name: "Vinit Kumar Arora",
    designation: "Tech Lead",
    bio: "Passionate about creating intuitive UI with React and Tailwind CSS. Loves clean code and coffee."
  },
  {
    profilePhoto: "https://i.ibb.co/yFYBRHLq/d2d37e16-4c95-4905-ac9e-4e2ae77c2ddc.png",
    name: "Mudit Sharma",
    designation: "Tech Lead",
    bio: "Experienced in building scalable APIs with Node.js and MongoDB. Advocate for open-source and testing."
  },
  {
    profilePhoto: "https://i.ibb.co/Tq147bBQ/Whats-App-Image-2025-04-14-at-15-46-41-5049279a.jpg",
    name: "Aryan",
    designation: "Tech Lead",
    bio: "Crafts elegant user experiences with a strong focus on accessibility and responsive design."
  },
  {
    profilePhoto: "https://i.ibb.co/DgtpJnp0/IMG-20241001-183854.jpg",
    name: "Samiksha vijayvargiya",
    designation: "Tech Lead",
    bio: "Skilled at coordinating cross-functional teams and delivering projects on time. Agile and Scrum certified."
  }
];

// Define the props interface
interface HomepageProps {
  onGetStarted: () => void;
}

// Feature card component
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Pricing plan card
const PlanCard = ({
  title,
  price,
  features,
  isPopular = false,
  onGetStarted
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  onGetStarted: () => void;
}) => {
  return (
    <div className={`bg-gray-900 rounded-lg p-8 flex flex-col ${isPopular ? 'border border-blue-600 relative' : ''}`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/month</span>
      </div>
      <div className="flex-grow">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
              <span className="text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={onGetStarted}
        className={`mt-8 py-3 px-6 rounded-md font-medium transition ${isPopular
          ? 'bg-blue-600 text-white hover:bg-blue-500'
          : 'bg-gray-800 text-white hover:bg-gray-700'
          }`}
      >
        Get started
      </button>
    </div>
  );
};

// Update the component to use the interface
const Homepage: React.FC<HomepageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Advanced Recognition",
      description: "State-of-the-art voice recognition trained on programming commands"
    },
    {
      icon: <Code size={24} />,
      title: "Multi-Language Support",
      description: "Works with Python, JavaScript, Java, and many more languages"
    },
    {
      icon: <GitBranch size={24} />,
      title: "Custom Commands",
      description: "Create and customize your own voice commands"
    },
    {
      icon: <BarChart size={24} />,
      title: "Performance Analysis",
      description: "Real-time performance insights and optimization recommendations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-300 to-pink-300 text-indigo-950">
      {/* Navbar */}
{/* Navbar */}
<nav className="flex justify-between items-center py-4 px-8 border-b border-gray-800">
  <div className="flex items-center gap-2">
    <img className="w-20 object-contain" src="./Talk.png" alt="VoxIDE Logo" />
    <a href="/" className="text-2xl font-bold text-black">TalkToCode</a>
  </div>
  <div className="flex items-center space-x-6">
    <a href="#features" className="text-black hover:text-white transition">Features</a>
    <a href="#docs" className="text-black hover:text-white transition">Meet</a>
    {/* <button
      onClick={TryforFree}
      className="ml-4 px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
    >
      Try for free
    </button> */}
    <button
                onClick={onGetStarted}
                className="px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-500 transition flex items-center justify-center"
              >
                Try for Free <span className="ml-2">→</span>
              </button>
  </div>
</nav>



      {/* Hero Section */}
<div className="flex items-center justify-between py-20 px-8 lg:px-16">
<div className="flex w-full pr-0 lg:pr-12">
  {/* Animated Text Content */}
  <motion.div
    className="w-1/2"
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 50, damping: 20 }}
  >
    <motion.h1
      className="flex justify-center text-5xl lg:text-6xl font-bold text-black mb-6"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      TalkToCode
    </motion.h1>

    <motion.h6
      className="flex justify-center text-l text-blue-900 font-bold"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      'Code with your voice. Build hands-free. Welcome to TalkToCode.'
    </motion.h6>

    <motion.p
      className="text-xl mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.6 }}
    >
      Effortlessly edit code using your voice with advanced audio commands.
      No need to type—just open a file and start speaking your instructions.
      Code faster, smarter, and hands-free with voice-powered development.
    </motion.p>

    <motion.div
      className="flex flex-col sm:flex-row gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
    >
      <motion.button
        onClick={onGetStarted}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 bg-blue-600 text-white text-center rounded-md hover:bg-blue-500 transition flex items-center justify-center"
      >
        Get Started <span className="ml-2">→</span>
      </motion.button>

      <motion.a
        href="#how"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-6 py-3 border border-gray-700 text-white text-center rounded-md hover:border-gray-500 transition hover:bg-black"
      >
        See how it works
      </motion.a>
    </motion.div>
  </motion.div>

  {/* Animated Lottie Element */}
  <motion.div
    className="w-1/2"
    initial={{ x: 200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: 'spring', stiffness: 50, damping: 20, delay: 0.5 }}
  >
    <DotLottieReact
      className="w-full h-auto"
      src="https://lottie.host/e5317963-0d06-4856-b34a-2bde5a0a3b5e/Yrl3W6vsrQ.lottie"
      loop
      autoplay
    />
  </motion.div>
</div>


  {/* Optional Placeholder Block */}
  <div className="hidden lg:block w-1/2">
    <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
      <img
        src="/api/placeholder/600/400"
        alt="Code editor showing colorful syntax highlighting"
        className="w-full h-auto"
      />
    </div>
  </div>
</div>

      {/* Demo Video Section */}
      {/* filepath: c:\Users\vinit\Downloads\TalkToCode\src\components\homepage\Homepage.tsx */}
      <section id="how" className="container mx-auto px-6 py-20">
  <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl">
    <div className="aspect-video bg-slate-900">
      <iframe
        className="w-full h-full"
        // src="https://www.youtube.com/embed/M7i5YU08m9I"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>

      

      {/* Features Section */}
      <div className="py-16 px-8" id="features">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Supercharge Your Development</h2>
          <p className="text-xl text-gray-900 max-w-2xl mx-auto">
          Powerful Features to Enhance Your Workflow
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      {/* filepath: c:\Users\vinit\Downloads\TalkToCode\src\components\homepage\Homepage.tsx */}
<section id="docs" className="container mx-auto px-6 py-20">
  <h2 className="text-4xl font-bold text-center mb-16">Meet Our Team</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {teamMembers.map((member, index) => (
      <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
        <img
          src={member.profilePhoto}
          alt={member.name}
          className="w-16 h-16 rounded-full mx-auto mb-4"
        />
        <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{member.designation}</p>
        <p className="text-gray-300">{member.bio}</p>
      </div>
    ))}
  </div>
</section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Mic className="w-6 h-6 text-blue-400" />
                <span className="font-bold">TalkToCode</span>
              </div>
              <p className="text-gray-400">Transform your coding experience with the power of voice.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">Features</a></li>
                <li><a href="#" className="hover:text-blue-400">Meet</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400">About</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 TalkToCode. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;