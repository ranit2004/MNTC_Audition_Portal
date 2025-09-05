import Spinner from "./Spinner";

type SubmitButtonProps = {
  loading: boolean;
  label: string;
  className?: string;
};
export default function SubmitButton({
  loading,
  label,
  className,
}: SubmitButtonProps) {
  return (
    <button
      disabled={loading}
      type="submit"
      className={
        "px-8 py-2 bg-[#F7B801] inline-block laptop:self-start font-bold text-lg border-black border laptop:ml-2 hover:shadow-[4px_4px_0px_0px_#F18701] transition-shadow rounded" +
        " " +
        className
      }
    >
      {loading && Spinner({ size: "w-8 h-8" })}
      {!loading && <p>{label} &gt;</p>}
    </button>
  );
}
