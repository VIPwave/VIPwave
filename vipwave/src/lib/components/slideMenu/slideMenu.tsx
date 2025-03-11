import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { navItems } from '../navigation/Header';

const SlideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <button onClick={handleIsOpen}>
        <Menu size={24} color="white" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
          onClick={handleIsOpen}
        />
      )}

      <aside
        className={`absolute top-0 left-0 h-full w-[250px] bg-black shadow-lg p-5 transition-transform duration-500 ease-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="absolute top-4 right-4" onClick={handleIsOpen}>
          <X size={24} color="white" />
        </button>
        {/* <nav className="flex gap-6">
        {navItems.map(
          (item, index) =>
            item &&
            item.name !== 'home' && (
              <Link
                href={item.href}
                key={index}
                className={cn(
                  'py-4 px-1 border-b-2 -mb-px',
                  index === activeTab
                    ? 'bold'
                    : 'border-transparent text-gray-500'
                )}
                onClick={() => setActiveTab(index)}
              >
                {item.name}
              </Link>
            )
        )}
      </nav> */}
        <nav className="mt-10 space-y-4">
          {navItems.map(
            (item, index) =>
              item &&
              item.name !== 'home' && (
                <Link
                  href={item.href}
                  key={index}
                  onClick={handleIsOpen}
                  className="block text-lg text-white font-bold"
                >
                  {item.name}
                </Link>
              )
          )}
          {/* <Link
            href="/"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            <div className="mb-10">VIPWAVE</div>
          </Link>
          <Link
            href="/guide/streaming"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            스트리밍 가이드
          </Link>
          <Link
            href="/guide/musicDownload"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            음원 다운 가이드
          </Link>
          <Link
            href="/guide/mvDownload"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            뮤비 다운 가이드
          </Link>
          <Link
            href="/guide/musicGift"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            선물 가이드
          </Link>
          <Link
            href="/guide/musicShare"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            음악 나누기 가이드
          </Link>
          <Link
            href="/guide/broadcast"
            className="block text-lg text-white font-bold"
            onClick={handleIsOpen}
          >
            음악방송 가이드
          </Link> */}
        </nav>
      </aside>
    </>
  );
};

export default SlideMenu;
