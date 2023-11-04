import { ContentCard2 } from '@/components/ContentCard/ContentCard2';
import { LEARN } from '@/public';
import { HeadText, SubText } from './constants';

export const Learn = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[white] py-[96px] px-3 xl:px-[100px] md:px-10 ">
      <ContentCard2
        title={HeadText}
        description={SubText}
        image={LEARN}
        reverse
        btn1="Learn More"
        to={'mailto:hey@upticktalent.africa'}
      />
    </div>
  );
};
