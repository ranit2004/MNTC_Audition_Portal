type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="grid w-full min-h-screen place-items-center bg-[url('/pattern.svg')] bg-fixed bg-cover bg-no-repeat">
      <div
        className={
          "max-w-3xl bg-white bg-opacity-70 w-full backdrop-blur-md rounded border border-black px-2" +
          " " +
          className
        }
      >
        {children}
      </div>
    </div>
  );
}
