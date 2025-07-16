import React from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export function Image({ className, ...props }: ImageProps) {
  return <img className={cn("object-cover", className)} {...props} />;
}
