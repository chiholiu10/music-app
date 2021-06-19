import { FC, useRef, useEffect } from "react";
import { LazyLoaderProps } from '../../Types/Types';
import { Image } from './LazyLoader.styles';

export const LazyLoader: FC<LazyLoaderProps> = ({ src, alt }) => {
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) {
      let observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio > 0.1) {
              ref?.current?.setAttribute('src', src);
              ref?.current?.setAttribute('alt', alt);
              ref?.current?.setAttribute('loading', 'lazy');
              observer.unobserve(ref.current!);
            }
          });
        },
        {
          rootMargin: '200px 0px 400px 0px',
          threshold: [0, 0.0, 0.5]
        }
      );

      observer.observe(ref.current!);
    }
  }, [ref]);

  return <Image ref={ref} />;
};