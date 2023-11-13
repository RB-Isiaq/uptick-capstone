export const Header = ({ title }: { title: string }) => {
  return (
    <h1 className="font-poppins text-[32px] md:text-[38px] leading-[140%] text-uptickBlack font-semibold text-center">
      {title}
    </h1>
  );
};
