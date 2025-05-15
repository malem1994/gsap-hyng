import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { useMemo, useRef } from "react";

export const Keyvisual = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const t = `Creative`

  const SplitText = ({ text }: { text: string }) => {
    const characters = useMemo(() => {
      return text.split('');
    }, [text]);

    return (
      <>
        {characters.map((char, index) => (
          <span
            key={index}
            className="character"
            style={{ display: 'inline-block' }} // Cần thiết để animate từng chữ
          >
            {char === ' ' ? '\u00A0' : char} {/* Xử lý khoảng trắng */}
          </span>
        ))}
      </>
    );
  }

  useGSAP(() => {
    if (containerRef.current) {
      const chars = containerRef.current.querySelectorAll('span');

      gsap.from(chars, {
        duration: 0.5,
        y: 50,
        opacity: 0,
        stagger: 0.05, // Hiệu ứng lần lượt cho từng chữ
        ease: 'back.out'
      });
    }
  }, { scope: containerRef });

  return (
    <section
      className="
      min-h-kv p-8
      flex flex-col
      "
    >
      <div className="flex-auto flex items-center justify-between gap-4">
        <p>Creative make it true</p>
        <p className="text-sm">A digital creative and brand agency where creative meets conversions.</p>
      </div>

      <p
        ref={containerRef}
        className="font-black uppercase inline-flex items-center justify-evenly"
        style={{ fontSize: `calc(100vw/${Array.from(t).length}*1.5)` }}
      >
        <SplitText text={t} />
      </p>
    </section>
  )
}
