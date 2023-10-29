import { useEffect, useState } from 'react';
import { ArrowUpCircleIcon } from '@heroicons/react/24/outline'

export default function ScorllToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="fixed bottom-2 right-2 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100' : 'opacity-0',
          'bg-gray-900 hover:bg-white inline-flex items-center rounded-full p-3 text-white shadow-sm focus:outline-none focus:ring-0 hover:text-gray-900 transition-all duration-300',
        )}
      >
        <ArrowUpCircleIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}
