import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaPlay } from 'react-icons/fa';
import { FiBookmark } from 'react-icons/fi';

// Импорт стилей Swiper
import 'swiper/css';
import 'swiper/css/pagination';

// Моковые данные для баннера
const movies = [
  {
    id: 1,
    year: '2022',
    title: 'The Batman',
    duration: '2 hr 56 min',
    genres: ['Action', 'Drama'],
    description:
      'Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.',
    bgImage:
      'https://a-static.besthdwallpaper.com/batman-in-frount-of-good-sunrise-wallpaper-2880x1080-102678_89.jpg', // Замените на нужный кадр
  },
  {
    id: 2,
    year: '2023',
    title: 'Oppenheimer',
    duration: '3 hr 00 min',
    genres: ['Biography', 'Drama', 'History'],
    description:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.',
    bgImage:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 3,
    year: '2021',
    title: 'Dune',
    duration: '2 hr 35 min',
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    description:
      "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
    bgImage:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1920&auto=format&fit=crop',
  },
];
