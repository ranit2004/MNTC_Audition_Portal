type SubmitButtonProps = {
  label: string;
  className?: string;
};

export default function PageBox({ label, className }: SubmitButtonProps) {
  return (
    <button
      disabled
      type="submit"
      className={
        "bg-[#F7B801] text-black 	 flex justify-center capitalize font-extrabold w-40  drop-shadow-2xl  text-xl my-6 py-2 hoverEffect" +
        " " +
        className
      }
    >
      <p>{label}</p>
    </button>
  );
}
