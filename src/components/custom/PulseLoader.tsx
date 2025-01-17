import { cn } from '@/lib/utils';

const VARIANT_DATA_STYLE = {
  error: 'bg-red-500',
  success: 'bg-emerald-500',
};

type PulseLoaderProps = {
  variant: keyof typeof VARIANT_DATA_STYLE;
  size: number;
};

export default function PulseLoader({ variant, size }: PulseLoaderProps) {
  return (
    <div className='flex justify-center items-center'>
      <div className='relative inline-flex'>
        <div
          className={cn(
            'rounded-full',
            VARIANT_DATA_STYLE[variant],
            `h-${size} w-${size}`,
          )}
        ></div>
        <div
          className={cn(
            'rounded-full absolute top-0 left-0 animate-ping',
            VARIANT_DATA_STYLE[variant],
            `h-${size} w-${size}`,
          )}
        ></div>
        <div
          className={cn(
            'rounded-full absolute top-0 left-0 animate-pulse',
            VARIANT_DATA_STYLE[variant],
            `h-${size} w-${size}`,
          )}
        ></div>
      </div>
    </div>
  );
}
