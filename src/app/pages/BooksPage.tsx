import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star } from 'lucide-react';

const books = [
  { title: 'Atomic Habits', author: 'James Clear', year: '2018', category: 'Self-Help', rating: 5, amazonLink: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299' },
  { title: 'The Psychology of Money', author: 'Morgan Housel', year: '2020', category: 'Finance', rating: 5, amazonLink: 'https://www.amazon.com/Psychology-Money-Timeless-lessons-happiness/dp/0857197681' },
  { title: 'Think and Grow Rich', author: 'Napoleon Hill', year: '1937', category: 'Business', rating: 4, amazonLink: 'https://www.amazon.com/Think-Grow-Rich-Landmark-Bestseller/dp/1585424331' },
  { title: 'The Lean Startup', author: 'Eric Ries', year: '2011', category: 'Business', rating: 4, amazonLink: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898' },
  { title: 'The Immortals of Meluha', author: 'Amish Tripathi', year: '2010', category: 'Fiction', rating: 4, amazonLink: 'https://www.amazon.com/Immortals-Meluha-Shiva-Trilogy-Book/dp/9350295180' },
  { title: 'The Secret of the Nagas', author: 'Amish Tripathi', year: '2011', category: 'Fiction', rating: 4, amazonLink: 'https://www.amazon.com/Secret-Nagas-Shiva-Trilogy-Book/dp/9350295199' },
  { title: 'The Oath of the Vayuputras', author: 'Amish Tripathi', year: '2013', category: 'Fiction', rating: 4, amazonLink: 'https://www.amazon.com/Oath-Vayuputras-Shiva-Trilogy-Book/dp/9350295202' },
  { title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', year: '2011', category: 'Psychology', rating: 5, amazonLink: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555' },
  { title: 'The Power of Your Subconscious Mind', author: 'Joseph Murphy', year: '1963', category: 'Psychology', rating: 4, amazonLink: 'https://www.amazon.com/Power-Your-Subconscious-Mind/dp/1604591706' },
  { title: 'The Social Animal', author: 'David Brooks', year: '2011', category: 'Psychology', rating: 4, amazonLink: 'https://www.amazon.com/Social-Animal-Sources-Character-Achievement/dp/0812979370' },
];

export default function BooksPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <h1 className="font-serif text-3xl md:text-4xl text-[#211D18] mb-3">Reading List</h1>
      <p className="text-[#6E6255] mb-10 max-w-xl">
        Books that have shaped how I think about strategy, psychology, and business.
      </p>

      <div className="divide-y divide-[#E4DCCC]">
        {books.map((book) => (
          <a
            key={book.title}
            href={book.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-4 py-5 hover:bg-white/50 -mx-2 px-2 rounded-md transition-colors"
          >
            <div>
              <p className="text-xs text-[#B3452A] mb-1">{book.category} · {book.year}</p>
              <h3 className="font-serif text-lg text-[#211D18] group-hover:text-[#B3452A] transition-colors">
                {book.title}
              </h3>
              <p className="text-sm text-[#6E6255]">{book.author}</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0 pt-1">
              <div className="flex">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < book.rating ? 'text-[#B3452A] fill-current' : 'text-[#E4DCCC]'}
                  />
                ))}
              </div>
              <ExternalLink size={14} className="text-[#6E6255] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-[#E4DCCC] text-center">
        <p className="text-[#6E6255] mb-4">Have a book I should read next?</p>
        <Link
          to="/contact"
          className="inline-flex px-5 py-2.5 bg-[#211D18] text-[#F7F3EC] rounded-full text-sm hover:bg-[#3A3229] transition-colors"
        >
          Send a recommendation
        </Link>
      </div>
    </div>
  );
}
