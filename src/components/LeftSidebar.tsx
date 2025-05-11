import React, { useState } from 'react';


const LeftSidebar = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [hoveredBottom, setHoveredBottom] = useState<number | null>(null);

  const sidebarItems = [
    { label: 'Tổng quan về tài khoản', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-175px -221px', width: 24, height: 24 },
    { label: 'Chiến dịch', active: true, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-100px -246px', width: 24, height: 24 },
    { label: 'Báo cáo quảng cáo', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '0px -271px', width: 24, height: 24 },
    { label: 'Đối tượng', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-275px -246px', width: 24, height: 24 },
    { label: 'Cài đặt quảng cáo', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-75px -221px', width: 24, height: 24 },
    { label: 'Lập hóa đơn và thanh toán', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-25px -246px', width: 24, height: 24 },
    { label: 'Trình quản lý sự kiện', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-100px -271px', width: 24, height: 24 },
    { label: 'Tất cả công cụ', active: false, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-357px -296px', width: 20, height: 20 },
  ];

  const sidebarBottomItems = [
    { label: 'Trợ giúp', color: '#3ab6a7', bg: '#e6f4f1', maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png)', maskPosition: '-42px -339px', width: 20, height: 20 },
    { label: 'Tin tức', color: undefined, bg: undefined, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-105px -296px', width: 20, height: 20 },
    { label: 'Cài đặt', color: undefined, bg: undefined, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-420px -296px', width: 20, height: 20 },
    { label: 'Thông báo', color: undefined, bg: undefined, badge: 4, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-189px -296px', width: 20, height: 20 },
    { label: 'Tìm kiếm', color: undefined, bg: undefined, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-336px -296px', width: 20, height: 20 },
    { label: 'Báo lỗi', color: undefined, bg: undefined, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-252px -296px', width: 20, height: 20 },
  ];

  return (
    <aside className="w-[56px] bg-white border-r border-gray-300 flex flex-col items-center py-5 h-screen justify-between">
      <div className="flex flex-col items-center gap-4">
        <div className="mb-2">
          <img alt="Meta" className="img" height="28" width="28" src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg" />
        </div>
        <div className="bg-gray-400 text-xs text-[#bdbdbd] font-bold rounded w-6 h-6 flex items-center justify-center mb-4">M</div>
        <div className="flex flex-col gap-2 items-center mt-1">
          {sidebarItems.map((item, idx) => {
            return (
              <div
                key={item.label}
                className={`w-8 h-8 flex items-center justify-center relative cursor-pointer ${item.active ? '' : ''} ${hovered === idx ? 'bg-gray-100' : ''}`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                aria-label={item.label}
              >
                <div
                  className="xtwfq29"
                  style={{
                    width: item.width,
                    height: item.height,
                    maskImage: item.maskImage,
                    maskPosition: item.maskPosition,
                    background: item.active ? '#1877f2' : 'currentColor'
                  }}
                />
                {hovered === idx && (
                  <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg z-10">
                    {item.label}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-1">
        {sidebarBottomItems.map((item, idx) => {
          const isBell = item.label === 'Thông báo';
          return (
            <div
              key={item.label}
              className={`relative flex items-center justify-center cursor-pointer ${isBell ? 'w-8 h-8' : 'w-6 h-6'} ${hoveredBottom === idx ? 'bg-gray-100' : ''}`}
              onMouseEnter={() => setHoveredBottom(idx)}
              onMouseLeave={() => setHoveredBottom(null)}
              aria-label={item.label}
            >
              <div
                className="xtwfq29"
                style={{
                  width: item.width,
                  height: item.height,
                  maskImage: item.maskImage,
                  maskPosition: item.maskPosition,
                  background: item.color ? item.color : 'currentColor'
                }}
              />
              {isBell && item.badge && (
                <span className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                  {item.badge}
                </span>
              )}
              {!isBell && item.badge && (
                <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white">
                  {item.badge}
                </span>
              )}
              {hoveredBottom === idx && (
                <span className="absolute left-12 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg z-10">
                  {item.label}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default LeftSidebar; 