import Achievments from './Achievments';
import Journey from './Journey';

const AchievmentJourney = () => {
  return (
    <div className="achieve-bg min-h-screen bg-upBlack py-20  flex flex-col gap-32">
      <div className="px-3 md:px-14 lg:px-32">
        <Achievments />
      </div>
      <Journey />
    </div>
  );
};

export default AchievmentJourney;
