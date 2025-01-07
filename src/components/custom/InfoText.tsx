type InfoTextProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export default function InfoText({ title, children }: InfoTextProps) {
  return (
    <div className='flex flex-col'>
      <div className='font-bold'>{title}</div>
      <div className='font-semibold text-sm text-stone-500'>{children}</div>
    </div>
  );
}
