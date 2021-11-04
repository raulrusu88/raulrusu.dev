interface TipProps {
  text: string;
}

export const Tip = ({ text }: TipProps) => {
  return (
    <div className="px-3 w-auto h-7  border-2 rounded-md flex justify-center items-center">
      {text}
    </div>
  );
};
