import React from 'react';

const headerIcons = {
  RectangleStack: {
    maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)',
    maskPosition: '-357px -296px',
    width: 20,
    height: 20,
  },
  ArrowPath: {
    maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)',
    maskPosition: '-252px -296px',
    width: 20,
    height: 20,
  },
  EllipsisHorizontal: {
    maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yh/r/-mpd5-YMO3O.png)',
    maskPosition: '0px -169px',
    width: 16,
    height: 16,
  },
};

const Header = () => {
  return (
    <header className="flex items-center conten justify-between px-3 py-7 bg-gradient-to-r from-[#f8f6fa] to-[#eef2fa] border-gray-300 h-[48px] w-full">
      <div className="flex items-center gap-3 min-w-[220px]">
        <span className="font-bold text-lg">Chiến dịch</span>
        {/* Account Switcher */}
        <div className="ml-1 flex items-center bg-white border border-gray-300 rounded-md px-3 h-10 min-w-[300px] hover:border-gray-400 transition-colors cursor-pointer">
          <div className="bg-gray-400 text-xs text-black font-bold rounded w-6 h-6 flex items-center justify-center">M</div>
          <span className="mx-2 w-px h-5 bg-gray-200" />
          <div
            className="xtwfq29 mr-2"
            style={{
              width: 16,
              height: 16,
              maskImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/COoUFFPY0QK.png")',
              maskPosition: '0px -524px', // screen icon
              background: 'black',
            }}
          />
          <span className="text-sm truncate max-w-[110px]">Livestream22 - 37Agency</span>
          <div
            className="xtwfq29 ml-2"
            style={{
              width: 16,
              height: 16,
              maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png)',
              maskPosition: '-221px -1118px',
              background: 'black',
            }}
          />
          <select className="absolute opacity-0 w-0 h-0" tabIndex={-1} aria-label="Chọn tài khoản">
            <option>Livestream22 - 37Agency</option>
          </select>
        </div>

      </div>
      <div className="flex items-center gap-1 min-w-[320px] justify-end">
        <span className="text-xs text-black">Thời gian cập nhật: 7 phút trước</span>
        <button className="ml-2 flex items-center justify-center w-10 h-9 border border-gray-300 rounded hover:border-gray-400 bg-white transition-colors">
          <div
            className="xtwfq29"
            style={{
              width: 16,
              height: 16,
              maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)',
              maskPosition: '-257px -317px',
              background: 'black',
            }}
          />
        </button>
        <button className="ml-2 px-4 h-9 text-sm text-gray-800 flex items-center border border-gray-300 rounded hover:border-gray-400 bg-white transition-colors">
          Xem lại và đăng
        </button>
        <button className="ml-2 flex items-center justify-center w-10 h-9 border border-gray-300 rounded hover:border-gray-400 bg-white transition-colors">
          <div
            className="xtwfq29"
            style={{
              width: headerIcons.EllipsisHorizontal.width,
              height: headerIcons.EllipsisHorizontal.height,
              maskImage: headerIcons.EllipsisHorizontal.maskImage,
              maskPosition: headerIcons.EllipsisHorizontal.maskPosition,
              background: 'black',
            }}
          />
        </button>
      </div>
    </header>
  );
};

export default Header; 