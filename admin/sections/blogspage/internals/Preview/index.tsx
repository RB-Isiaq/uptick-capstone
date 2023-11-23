import Story from './internals/Story';
import Button from '@/components/Button';

const Preview = () => {
  return (
    <div className="bg-[#FAFAFA] w-full min-h-[502px] px-8 pt-[75px] pb-[21px] font-raleway flex flex-col gap-[77px]">
      <Story />
      <Button text="Publish" />
    </div>
  );
};

export default Preview;
