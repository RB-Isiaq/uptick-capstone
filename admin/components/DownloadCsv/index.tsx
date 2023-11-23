import { Csv_Icon } from '@/public';
import Image from 'next/image';
import React from 'react';
import { Details } from '../ProgramApplicants';

interface CSVDownloadButtonProps {
  data: Details[]; // Adjust this type according to your data structure
}

const CSVDownloadButton: React.FC<CSVDownloadButtonProps> = ({ data }) => {
  const downloadCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      data.map((row) => Object.values(row).join(',')).join('\n');
    console.log(csvContent);

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      className="flex justify-center items-center px-[35px] py-[11px] gap-[11px] rounded-lg bg-[#C8D7FF] text-[#15254C] font-bold"
      onClick={downloadCSV}
    >
      Download as CSV
      <Image src={Csv_Icon} alt="download" />
    </button>
  );
};

export default CSVDownloadButton;
