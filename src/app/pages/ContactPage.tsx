import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  Mail,
  Linkedin,
  ExternalLink,
  MapPin,
  Phone,
  FileText,
  Send,
  User,
  MessageSquare
} from 'lucide-react';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

export default function ContactPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Inquiry from your website');
    const body = encodeURIComponent(`Hi Malav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:malav.akhani8@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const theme = {
    bg: 'bg-green-gradient',
    cardBg: 'bg-[#1A2A1A]',
    accent: '#1DB954',
    accentHover: '#1ED760'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className={`min-h-[calc(100vh-60px)] ${theme.bg}`}>
      {/* Header */}
      <motion.div 
        className="bg-[#121212] border-b border-[#282828] px-4 md:px-6 py-4 flex items-center gap-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button 
          onClick={() => navigate('/about')}
          className="p-2 rounded-full bg-[#090909] text-white hover:bg-[#1a1a1a] transition-all duration-300 hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={16} />
        </motion.button>
        <div className="flex items-center gap-3">
          <Mail className="text-[#1DB954]" size={24} />
          <h1 className="text-xl md:text-2xl font-bold text-white">Get In Touch</h1>
        </div>
      </motion.div>

      <motion.div 
        className="p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Let's Connect</h2>
          <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a great conversation about technology and marketing.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            {/* Contact Cards */}
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              <motion.div 
                className={`${theme.cardBg} rounded-xl p-6 hover:bg-[#2a2a2a] transition-all duration-300`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#ea4335] rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Email</h4>
                    <p className="text-[#B3B3B3] text-sm">Primary contact method</p>
                  </div>
                </div>
                <a 
                  href="mailto:malav.akhani8@gmail.com?subject=Inquiry%20from%20your%20website&body=Hi%20Malav%2C%0A%0AI'd%20like%20to%20ask%20about..."
                  className="text-[#1DB954] hover:text-[#1ed760] transition-colors flex items-center gap-2"
                >
                  malav.akhani8@gmail.com
                  <ExternalLink size={16} />
                </a>
              </motion.div>

              <motion.div 
                onClick={() => window.open('https://www.linkedin.com/in/malavakhani6/', '_blank')}
                className={`${theme.cardBg} rounded-xl p-6 hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#0077b5] rounded-lg flex items-center justify-center">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">LinkedIn</h4>
                    <p className="text-[#B3B3B3] text-sm">Professional networking</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1DB954] group-hover:text-[#1ed760] transition-colors">
                    @malavakhani6
                  </span>
                  <ExternalLink size={16} className="text-[#B3B3B3] group-hover:text-[#1DB954]" />
                </div>
              </motion.div>

              <motion.div 
                onClick={() => { const a = document.createElement('a'); a.href = RESUME_FILE; a.download = ''; a.click(); }}
                className={`${theme.cardBg} rounded-xl p-6 hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#1DB954] rounded-lg flex items-center justify-center">
                    <FileText size={24} className="text-black" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Resume</h4>
                    <p className="text-[#B3B3B3] text-sm">Download my CV</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1DB954] group-hover:text-[#1ed760] transition-colors">
                    View Resume PDF
                  </span>
                  <ExternalLink size={16} className="text-[#B3B3B3] group-hover:text-[#1DB954]" />
                </div>
              </motion.div>

              <motion.div 
                onClick={() => window.open('https://maps.app.goo.gl/cMQdmjbPgPBTB4Rn7', '_blank')}
                className={`${theme.cardBg} rounded-xl p-6 hover:bg-[#2a2a2a] transition-all duration-300 cursor-pointer group`}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                    <MapPin size={24} className="text-[#1DB954]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Location</h4>
                    <p className="text-[#B3B3B3] text-sm">Currently based in</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#B3B3B3] group-hover:text-white transition-colors">New York, USA</p>
                    <p className="text-[#B3B3B3] text-sm">Hofstra University Student</p>
                  </div>
                  <ExternalLink size={16} className="text-[#B3B3B3] group-hover:text-[#1DB954]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div 
              className={`${theme.cardBg} rounded-xl p-6 mt-8`}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h4 className="text-xl font-bold text-white mb-4">Quick Facts</h4>
              <div className="space-y-3">
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                  <span className="text-[#B3B3B3]">STEM Graduate Student at Hofstra University</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                  <span className="text-[#B3B3B3]">F-1 Student Visa Status</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                  <span className="text-[#B3B3B3]">STEM OPT Eligible</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 bg-[#1DB954] rounded-full"></div>
                  <span className="text-[#B3B3B3]">Available for Full-time Opportunities</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className={`${theme.cardBg} rounded-xl p-6 md:p-8`}
            variants={itemVariants}
            whileHover={{ scale: 1.01, y: -5 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="text-[#1DB954]" size={24} />
              Send a Message
            </h3>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              variants={containerVariants}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3]" size={16} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="w-full bg-[#2a2a2a] border border-[#404040] rounded-lg pl-10 pr-4 py-3 text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B3B3B3]" size={16} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full bg-[#2a2a2a] border border-[#404040] rounded-lg pl-10 pr-4 py-3 text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-all duration-300"
                      required
                    />
                  </div>
                </motion.div>
              </div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="w-full bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none transition-all duration-300"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me more about your project or how I can help..."
                  className="w-full bg-[#2a2a2a] border border-[#404040] rounded-lg px-4 py-3 text-white placeholder-[#B3B3B3] focus:border-[#1DB954] focus:outline-none resize-none transition-all duration-300"
                  required
                />
              </motion.div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={16} />
                Send Email
              </motion.button>
            </motion.form>

            <motion.div 
              className="mt-6 p-4 bg-[#2a2a2a] rounded-lg"
              variants={itemVariants}
            >
              <p className="text-[#B3B3B3] text-sm">
                <strong className="text-white">Note:</strong> Clicking "Send Email" will open your default email client with the message pre-filled. You can also email me directly at <a href="mailto:malav.akhani8@gmail.com?subject=Inquiry%20from%20your%20website&body=Hi%20Malav%2C%0A%0AI'd%20like%20to%20ask%20about..." className="text-[#1DB954] hover:text-[#1ed760] transition-colors">malav.akhani8@gmail.com</a>
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className={`mt-12 md:mt-16 text-center ${theme.cardBg} rounded-xl p-8 max-w-4xl mx-auto`}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-[#B3B3B3] mb-6 max-w-2xl mx-auto">
            Whether you're looking for a marketing professional, a collaborator on an exciting project, or just want to connect, I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button 
              onClick={() => window.open('https://www.linkedin.com/in/malavakhani6/', '_blank')}
              className="bg-[#0077b5] hover:bg-[#0088cc] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </motion.button>
            <motion.button 
              onClick={() => { const a = document.createElement('a'); a.href = RESUME_FILE; a.download = ''; a.click(); }}
              className="bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText size={16} />
              Download Resume
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}