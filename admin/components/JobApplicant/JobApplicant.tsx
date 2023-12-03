interface IApplicationCard {
  name: string;
  status: string;
  date: string;
  resumeUrl: string;
  id: string;
  handleShowDetails: (id: string) => void;
}

const JobApplicantCard = ({
  id,
  name,
  status,
  date,
  resumeUrl,
  handleShowDetails,
}: IApplicationCard) => {
  const handleDownloadResume = () => {
    // Create a temporary link element
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = `resume_${id}.pdf`; // You can set the desired file name
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the DOM
    document.body.removeChild(downloadLink);
  };
  return (
    <div className="flex justify-between items-center gap-2 py-[13px] px-[18px] w-full bg-white">
      <h1 className="text-lg  text-[#111] w-[110px] ">{name}</h1>
      <div className="w-[110px] flex justify-center">
        <h1
          className={`text-lg  text-[#111] px-[10px] py-1 rounded-xl ${
            status === 'Accepted'
              ? 'bg-[#BBF5E7] '
              : status === 'Rejected'
              ? 'bg-[#FF3434] '
              : 'bg-[#E6E6E6] '
          } `}
        >
          {status}
        </h1>
      </div>
      <h1 className="text-lg  text-[#111] w-[110px]">{date}</h1>
      <button
        className="text-lg  text-[#111] w-[110px] flex justify-center items-center bg-[#B5CAFF] px-[10px] py-1 rounded-xl "
        onClick={handleDownloadResume}
      >
        Download
      </button>
      <button
        className="flex justify-center items-center px-[10px] py-[13px]  bg-[#B5CAFF] text-black "
        onClick={() => handleShowDetails(id)}
      >
        View Details
      </button>
    </div>
  );
};

export default JobApplicantCard;
