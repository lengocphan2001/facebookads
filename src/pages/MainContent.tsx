import React, { useState } from 'react';
import {
  InformationCircleIcon,
  PlusIcon,
  DocumentDuplicateIcon,
  PencilSquareIcon,
  BeakerIcon,
  EllipsisHorizontalIcon,
  AdjustmentsHorizontalIcon,
  ChartBarIcon,
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';


const tabConfigs = [
  {
    key: 'chien-dich',
    label: 'Chiến dịch',
    columns: [
      'Tắt/Bật', 'Chiến dịch', 'Phân phối', 'Chiến lược giá thầu', 'Ngân sách', 'Cài đặt phân bổ', 'Kết quả', 'Người tiếp cận', 'Lượt hiển thị', 'Chi phí trên mỗi kết quả', 'Số tiền đã chi tiêu'
    ],
    rows: [
      [true, 'Mess_Viện Nhân Lực Thịnh Vượng', 'Đang tắt', 'Sử dụng chiến lược...', 'Sử dụng ngân sách...', 'Lượt click tron...', '115', '20.066', '23.539', '1.831 đ', '210'],
      [false, 'Mess_Tin Nóng Thanh Hóa', 'Đang tắt', 'Sử dụng chiến lược...', 'Sử dụng ngân sách...', 'Lượt click tron...', '1.103', '12.181', '16.227', '445 đ', '490'],
      [false, 'Mess_Bất Động Sản', 'Đang tắt', 'Sử dụng chiến lược...', 'Sử dụng ngân sách...', 'Lượt click tron...', '77', '28.796', '65.573', '64.086 đ', '4.934'],
    ],
    summary: 'Kết quả từ 3 chiến dịch (Loại trừ các mục đã xóa)'
  },
  {
    key: 'nhom-quang-cao',
    label: 'Nhóm quảng cáo',
    columns: [
      'Tắt/Bật', 'Nhóm quảng cáo', 'Phân phối', 'Chiến lược giá thầu', 'Ngân sách', 'Chỉnh sửa quan trọng gần đây nhất', 'Cài đặt phân bổ', 'Kết quả', 'Người tiếp cận', 'Lượt hiển thị'
    ],
    rows: [
      [true, 'Viện Nhân Lực Thịnh Vượng', 'Chiến dịch: Tắt', 'Mức cao nhất', '200.000 đ\nHàng ngày', '', 'Lượt click tron...', '115', '20.066', '23.539'],
      [true, 'Mess_Tin Nóng Thanh Hóa', 'Chiến dịch: Tắt', 'Mức cao nhất', '200.000 đ\nHàng ngày', '', 'Lượt click tron...', '1.103', '12.181', '16.227'],
      [true, 'Mess_Huy Nhà Đất 36', 'Chiến dịch: Tắt', 'Mức cao nhất', '500.000 đ\nHàng ngày', '', 'Lượt click tron...', '30', '15.839', '33.100'],
      [false, 'Mess_Khánh An', 'Đang tắt', 'Mức cao nhất', '500.000 đ\nHàng ngày', '', 'Lượt click tron...', '39', '13.809', '20.244'],
      [false, 'Mess_Long Nhà - Đất Ngon 36', 'Đang tắt', 'Mức cao nhất', '500.000 đ\nHàng ngày', '', 'Lượt click tron...', '8', '6.473', '12.202'],
    ],
    summary: 'Kết quả từ 5 nhóm quảng cáo (Loại trừ các mục đã xóa)'
  },
  {
    key: 'quang-cao',
    label: 'Quảng cáo',
    columns: [
      'Tắt/Bật', 'Quảng cáo', 'Phân phối', 'Chiến lược giá thầu', 'Ngân sách', 'Cài đặt phân bổ', 'Kết quả', 'Người tiếp cận', 'Lượt hiển thị', 'Chi phí trên mỗi kết quả', 'Số tiền đã chi tiêu'
    ],
    rows: [
      [true, 'QC 1', 'Đang tắt', 'Sử dụng chiến lược...', 'Sử dụng ngân sách...', 'Lượt click tron...', '10', '1.000', '2.000', '100 đ', '200'],
      [false, 'QC 2', 'Đang tắt', 'Sử dụng chiến lược...', 'Sử dụng ngân sách...', 'Lượt click tron...', '20', '2.000', '4.000', '200 đ', '400'],
    ],
    summary: 'Kết quả từ 2 quảng cáo (Loại trừ các mục đã xóa)'
  },
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('chien-dich');
  const tabConfig = tabConfigs.find(tab => tab.key === activeTab) || tabConfigs[0];
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  // Helper for select all
  const allSelected = selectedRows.length === tabConfig.rows.length && tabConfig.rows.length > 0;
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < tabConfig.rows.length;

  const handleSelectAll = () => {
    if (allSelected) {
      setSelectedRows([]);
    } else {
      setSelectedRows(tabConfig.rows.map((_, idx) => idx));
    }
  };

  const handleSelectRow = (idx: number) => {
    setSelectedRows(selectedRows.includes(idx)
      ? selectedRows.filter(i => i !== idx)
      : [...selectedRows, idx]);
  };

  // Custom Checkbox
  const FBCheckbox = ({ checked, indeterminate, onChange }: { checked: boolean, indeterminate?: boolean, onChange: () => void }) => (
    <button
      type="button"
      aria-checked={checked}
      onClick={onChange}
      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors duration-150 ${checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-400'} ${indeterminate ? 'bg-blue-100 border-blue-400' : ''}`}
      style={{ minWidth: 20 }}
    >
      {checked && !indeterminate && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 8.5L7 11.5L12 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {indeterminate && (
        <span className="w-3 h-0.5 bg-blue-600 rounded" />
      )}
    </button>
  );

  return (
    <main className="m-0.5 flex-1 bg-white py-2 px-3 overflow-auto border border-gray-300 rounded-lg text-sm leading-8 ">
      {/* Top filter bar */}
      <div className="flex items-center gap-2 mb-4 bg-transparent px-0 py-0 rounded-none border-none">
        {/* Search button */}
        <button className="w-10 h-9 flex items-center justify-center text-gray-800 border border-gray-300 bg-white rounded p-0 hover:bg-blue-200">
          <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png)', maskPosition: '0px -331px', background: 'currentColor' }} />
        </button>
        <div className="w-px h-5 bg-gray-300" />
        {/* Tất cả quảng cáo (active) */}
        <button className="flex items-center gap-1 border border-blue-600 text-blue-600 px-3 h-9 rounded bg-white border-gray-300 hover:bg-blue-200">
          <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)', maskPosition: '-17px -355px', background: 'currentColor' }} />
          Tất cả quảng cáo
        </button>
        {/* Có phân phối */}
        <button className="flex items-center gap-1 border border-gray-300 text-gray-700 px-3 h-9 rounded bg-white border-gray-300 hover:bg-blue-200">
          <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/wrEKnvZlWxt.png)', maskPosition: '-34px -817px', background: 'currentColor' }} />
          Có phân phối
        </button>
        {/* Quảng cáo đang hoạt động */}
        <button className="flex items-center gap-1 border border-gray-300 text-gray-700 px-3 h-9 rounded bg-white border-gray-300 hover:bg-blue-200">
          <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/y1/r/wrEKnvZlWxt.png)', maskPosition: '-17px -834px', background: 'currentColor' }} />
          Quảng cáo đang hoạt động
        </button>
        {/* Xem thêm */}
        <button className="flex items-center gap-1 border-none text-gray-700 px-2 h-9 rounded bg-transparent border-gray-300 hover:bg-gray-200">
          <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/jg3IY981y5G.png)', maskPosition: '-34px -169px', background: 'currentColor' }} />
          Xem thêm
        </button>
        <div className="flex-1" />
        {/* Tạo chế độ xem */}
        <button className="flex items-center gap-1 border border-gray-300 text-black px-3 h-9 rounded bg-white">
          Tạo chế độ xem
        </button>
        <button className="w-10 h-9 flex items-center justify-center border border-gray-300 bg-white rounded">
          <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/COoUFFPY0QK.png)', maskPosition: '-0px -694px', background: 'currentColor' }} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2">
        {tabConfigs.map(tab => {
          let iconProps: Record<string, string> = { maskImage: '', maskPosition: '' };
          if (tab.key === 'chien-dich') {
            return (
              <div key={tab.key} className="flex items-center gap-2">
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-t-md ${tab.key === activeTab ? 'text-blue-700' : 'text-gray-600'}`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ minWidth: 120 }}
                >
                  <svg viewBox="0 0 48 48" width="1em" height="1em" fill="currentColor" className="x1qsmy5i xxk0z11 xvy4d1p">
                    <path d="M40.5 10H23.74c-1.08 0-2.03-.69-2.37-1.71s-.18-.53-.18-.53A5.496 5.496 0 0 0 15.97 4H6.5C4.02 4 2 6.02 2 8.5v30C2 41.53 4.47 44 7.5 44h33c3.03 0 5.5-2.47 5.5-5.5v-23c0-3.03-2.47-5.5-5.5-5.5zm-9.83 23.73c-.2.18-.46.27-.72.27-.17 0-.35-.04-.51-.13L24 30.98l-5.44 2.89c-.4.21-.89.15-1.23-.14a.98.98 0 0 1-.23-1.16l5.95-12c.17-.35.54-.57.95-.57s.77.22.95.57l5.95 12c.19.39.1.86-.23 1.16z" />
                  </svg>
                  <span className="font-semibold text-sm">{tab.label}</span>
                </button>
                {activeTab === tab.key && selectedRows.length > 0 && (
                  <span className="flex items-center gap-1 bg-[#1781d6] text-white rounded-full px-3 py-1 text-sm font-medium">
                    Đã chọn {selectedRows.length} mục
                    <button
                      className="ml-1 hover:bg-blue-700 rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => setSelectedRows([])}
                      tabIndex={-1}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6m0-6l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                    </button>
                  </span>
                )}
              </div>
            );
          } else if (tab.key === 'nhom-quang-cao') {
            iconProps = {
              maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)',
              maskPosition: '-357px -296px',
            };
            return (
              <div key={tab.key} className="flex items-center gap-2">
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-t-md ${tab.key === activeTab ? 'text-blue-700' : 'text-gray-600'}`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ minWidth: 120 }}
                >
                  <div
                    className="xtwfq29"
                    style={{
                      width: 16,
                      height: 16,
                      maskImage: iconProps.maskImage,
                      maskPosition: iconProps.maskPosition,
                      background: tab.key === activeTab ? '#2196f3' : '#222',
                      display: 'inline-block',
                      marginRight: 4,
                    }}
                  />
                  <span className="font-semibold text-sm">{tab.label}</span>
                </button>
                {selectedRows.length > 0 && (
                  <span className="flex items-center border border-gray-300 bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-medium ml-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mr-1"><rect x="3" y="3" width="4" height="4" rx="1" fill="#666"/><rect x="3" y="9" width="4" height="4" rx="1" fill="#666"/><rect x="9" y="3" width="4" height="4" rx="1" fill="#666"/><rect x="9" y="9" width="4" height="4" rx="1" fill="#666"/></svg>
                    Nhóm quảng cáo đối với <span className="font-bold mx-1">{selectedRows.length}</span> <span className="font-bold">Chiến dịch</span>
                  </span>
                )}
              </div>
            );
          } else if (tab.key === 'quang-cao') {
            iconProps = {
              maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yU/r/loypeVkMFSa.png)',
              maskPosition: '-252px -296px',
            };
            return (
              <div key={tab.key} className="flex items-center gap-2">
                <button
                  className={`flex items-center gap-1 px-3 py-1 rounded-t-md ${tab.key === activeTab ? 'text-blue-700' : 'text-gray-600'}`}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ minWidth: 120 }}
                >
                  <div
                    className="xtwfq29"
                    style={{
                      width: 16,
                      height: 16,
                      maskImage: iconProps.maskImage,
                      maskPosition: iconProps.maskPosition,
                      background: tab.key === activeTab ? '#2196f3' : '#222',
                      display: 'inline-block',
                      marginRight: 4,
                    }}
                  />
                  <span className="font-semibold text-sm">{tab.label}</span>
                </button>
                {selectedRows.length > 0 && (
                  <span className="flex items-center border border-gray-300 bg-white text-gray-800 rounded-full px-3 py-1 text-sm font-medium ml-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="mr-1"><rect x="3" y="7" width="14" height="6" rx="1" fill="#666"/></svg>
                    Quảng cáo đối với <span className="font-bold mx-1">{selectedRows.length}</span> <span className="font-bold">Chiến dịch</span>
                  </span>
                )}
              </div>
            );
          }
          return null;
        })}
        <div className="flex-1" />
        <div className="flex items-center justify-between mb-2">

          <button className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-md font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150 min-w-[320px] justify-between">
            <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png)', maskPosition: '-305px -965px', background: 'currentColor' }} />
            <span className="flex-1 text-left">Tháng này: 1 Tháng 5, 2025 – 11 Tháng 5, 2025</span>
            <div className="xtwfq29" style={{ width: 16, height: 16, maskImage: 'url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png)', maskPosition: '-221px -1118px', background: 'currentColor' }} />
          </button>
        </div>
      </div>
      {/* Date select in the same row as tabs */}

      {/* Table controls */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 bg-green-600 text-white px-4 h-9 rounded-sm border-gray-300 shadow-sm border border-green-700 hover:bg-green-700 hover:shadow-md hover:border-green-800 transition-colors transition-shadow duration-150">
            <PlusIcon className="w-4 h-4" /> Tạo
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <DocumentDuplicateIcon className="w-4 h-4" /> Sao chép
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <PencilSquareIcon className="w-4 h-4" /> Chỉnh sửa
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <BeakerIcon className="w-4 h-4" /> Thử nghiệm A/B
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <EllipsisHorizontalIcon className="w-4 h-4" /> Xem thêm
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <ChartBarIcon className="w-4 h-4" /> Cột: Hiệu quả
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <AdjustmentsHorizontalIcon className="w-4 h-4" /> Số liệu chia nhỏ
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <BeakerIcon className="w-4 h-4" /> Báo cáo
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <ArrowDownTrayIcon className="w-4 h-4" /> Xuất
          </button>
          <button className="flex items-center gap-1 bg-white border border-gray-300 text-gray-800 px-3 h-9 rounded-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-colors duration-150">
            <ChartBarIcon className="w-4 h-4" /> Biểu đồ
          </button>
        </div>
      </div>
      {/* Table */}
      <div className="overflow-x-auto rounded border border-gray-200 bg-white">
        <table className="min-w-full text-xs text-left">
          <thead className="sticky top-0 z-10 bg-white shadow-sm">
            <tr>
              <th className="p-2 px-3 py-2 font-bold text-gray-700 border-b border-gray-200 text-[13px] w-8">
                <FBCheckbox checked={allSelected} indeterminate={isIndeterminate} onChange={handleSelectAll} />
              </th>
              {tabConfig.columns.map((col, idx) => (
                <th key={idx} className="p-2 px-3 py-2 font-bold text-gray-700 border-b border-gray-200 whitespace-pre-line text-[13px]">
                  {col === 'Kết quả' ? (
                    <span className="flex items-center gap-1">Kết quả <InformationCircleIcon className="w-3 h-3 text-blue-400" /></span>
                  ) : col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tabConfig.rows.map((row, rIdx) => (
              <tr key={rIdx} className={rIdx % 2 === 1 ? 'bg-[#f5f6fa] border-t' : 'bg-white border-t'}>
                <td className="p-2 px-3 py-2 w-8">
                  <FBCheckbox checked={selectedRows.includes(rIdx)} onChange={() => handleSelectRow(rIdx)} />
                </td>
                {row.map((cell, cIdx) => {
                  const colName = tabConfig.columns[cIdx];
                  // Toggle switch for Tắt/Bật
                  if (colName === 'Tắt/Bật') {
                    return (
                      <td key={cIdx} className="p-2 px-3 py-2">
                        <button
                          className={`w-9 h-5 flex items-center rounded-full transition-colors duration-200 ${cell ? 'bg-blue-600' : 'bg-gray-300'}`}
                          aria-pressed={!!cell}
                        >
                          <span
                            className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${cell ? 'translate-x-4' : ''}`}
                          />
                        </button>
                      </td>
                    );
                  }
                  // Blue link for names
                  if (colName.includes('Nhóm quảng cáo') || colName === 'Chiến dịch' || colName === 'Quảng cáo') {
                    return (
                      <td key={cIdx} className="p-2 px-3 py-2">
                        <span className="text-blue-700 underline cursor-pointer text-[13px]">{cell}</span>
                      </td>
                    );
                  }
                  // Gray dot for status
                  if (colName === 'Phân phối') {
                    return (
                      <td key={cIdx} className="p-2 px-3 py-2">
                        {typeof cell === 'string' && cell.includes('Tắt') ? (
                          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300 inline-block" /> {cell}</span>
                        ) : cell}
                      </td>
                    );
                  }
                  // Multi-line for budget
                  if (colName === 'Ngân sách' && typeof cell === 'string' && cell.includes('\n')) {
                    return (
                      <td key={cIdx} className="p-2 px-3 py-2">
                        {cell.split('\n').map((line, i) => <div key={i}>{line}</div>)}
                      </td>
                    );
                  }
                  // Subtext for Kết quả
                  if (colName === 'Kết quả' && typeof cell === 'string' && cell.includes('\n')) {
                    const [main, sub] = cell.split('\n');
                    return (
                      <td key={cIdx} className="p-2 px-3 py-2">
                        <div>{main}</div>
                        <div className="text-gray-400 text-[11px] leading-tight">{sub}</div>
                      </td>
                    );
                  }
                  // Subtext for other multi-line
                  if (typeof cell === 'string' && cell.includes('\n')) {
                    return (
                      <td key={cIdx} className="p-2 px-3 py-2">
                        {cell.split('\n').map((line, i) => <div key={i} className={i === 1 ? 'text-gray-400 text-[11px] leading-tight' : ''}>{line}</div>)}
                      </td>
                    );
                  }
                  // Default
                  return <td key={cIdx} className="p-2 px-3 py-2 text-[13px]">{cell}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Summary */}
      <div className="mt-2 text-xs text-gray-500 bg-[#f5f6fa] px-3 py-2 rounded-b">{tabConfig.summary}</div>
    </main>
  );
};

export default MainContent; 
