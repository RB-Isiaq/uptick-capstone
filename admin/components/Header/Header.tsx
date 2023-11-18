export const Header = ({ title, color }: { title: string; color?: string }) => {
  return (
    <h1
      className={`font-raleway text-[32px] md:text-[48px] leading-normal ${
        color ? color : 'text-white'
      } font-medium text-center`}
    >
      {title}
    </h1>
  );
};
