import React from 'react';

const rightSidebarItems = [
  { label: 'Biểu đồ', maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-393px -317px', width: 16, height: 16 },
  { label: 'Chỉnh sửa', maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-221px -355px', width: 16, height: 16 },
  { label: 'Đồng hồ', maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png)', maskPosition: '-21px -194px', width: 16, height: 16 },
];

const RightSidebar = () => {
  return (
    <aside className="w-[44px] bg-[#1e2a31] flex flex-col items-center py-3 h-screen border-l border-gray-800">
      <div className="flex flex-col gap-4 text-white">
        {rightSidebarItems.map((item, idx) => (
          <div key={item.label} className="w-7 h-7 flex items-center justify-center">
            <div
              className="xtwfq29"
              style={{
                width: item.width,
                height: item.height,
                maskImage: item.maskImage,
                maskPosition: item.maskPosition,
                background: 'white'
              }}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar; 