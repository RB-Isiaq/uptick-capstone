interface IApplicationCard {
  name: string;
  track: string;
  status: string;
  date: string;
  id: string;
  handleShowDetails: (id: string) => void;
}

const ApplicantCard = ({
  id,
  name,
  track,
  status,
  date,
  handleShowDetails,
}: IApplicationCard) => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 py-[13px] px-3 ms:px-[18px] w-full bg-white">
      <h1 className="text-lg  text-[#111] lg:w-[110px] ">{name}</h1>
      <h1 className="text-lg  text-[#111] lg:w-[110px] ">{track}</h1>
      <div className="w-[110px] flex md:justify-center">
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
        className="flex justify-center items-center px-[10px] py-[13px]  bg-[#B5CAFF] text-black "
        onClick={() => handleShowDetails(id)}
      >
        View Details
      </button>
    </div>
  );
};

export default ApplicantCard;
