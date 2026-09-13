import React, { useState, useEffect } from 'react';
import { Linkedin, Download, MapPin } from 'lucide-react';

const RESUME_FILE = `${import.meta.env.BASE_URL}Malav-Akhani-Resume.pdf`;

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'your website'}`);
    const body = encodeURIComponent(
      `Hi Malav,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:malav.akhani8@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-[#211D18] mb-3">Contact</h1>
      <p className="text-[#6E6255] mb-10 max-w-xl">
        Open to full-time marketing roles, collaborations, or just a conversation.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="space-y-4">
          <a
            href="mailto:malav.akhani8@gmail.com"
            className="block font-serif text-xl text-[#211D18] hover:text-[#B3452A] transition-colors"
          >
            malav.akhani8@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/malavakhani6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#6E6255] hover:text-[#B3452A] transition-colors w-fit"
          >
            <Linkedin size={16} />
            linkedin.com/in/malavakhani6
          </a>
          <a
            href="https://maps.app.goo.gl/cMQdmjbPgPBTB4Rn7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#6E6255] hover:text-[#B3452A] transition-colors w-fit"
          >
            <MapPin size={16} />
            New York, USA
          </a>
          <a
            href={RESUME_FILE}
            download
            className="flex items-center gap-2 text-[#6E6255] hover:text-[#B3452A] transition-colors w-fit"
          >
            <Download size={16} />
            Download resume (PDF)
          </a>
        </div>

        <div className="text-sm text-[#6E6255] leading-relaxed">
          <p className="mb-2">Currently:</p>
          <ul className="space-y-1">
            <li>MBA candidate at Hofstra University (Dec 2026)</li>
            <li>F-1 status, STEM OPT eligible</li>
            <li>Open to full-time opportunities</li>
          </ul>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 border-t border-[#E4DCCC] pt-10">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm text-[#211D18] mb-1.5">Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white border border-[#E4DCCC] rounded-md px-3.5 py-2.5 text-[#211D18] focus:border-[#B3452A] focus:outline-none transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-[#211D18] mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white border border-[#E4DCCC] rounded-md px-3.5 py-2.5 text-[#211D18] focus:border-[#B3452A] focus:outline-none transition-colors"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-[#211D18] mb-1.5">Message</label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white border border-[#E4DCCC] rounded-md px-3.5 py-2.5 text-[#211D18] focus:border-[#B3452A] focus:outline-none resize-none transition-colors"
            required
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 bg-[#211D18] text-[#F7F3EC] rounded-full text-sm hover:bg-[#3A3229] transition-colors"
        >
          Send
        </button>
        <p className="text-xs text-[#6E6255]">
          Opens your email client with this pre-filled — or email me directly above.
        </p>
      </form>
    </div>
  );
}
