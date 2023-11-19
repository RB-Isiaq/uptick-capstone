export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={`w-full max-w-[1440px] mx-auto`}>{children}</section>
  );
};
