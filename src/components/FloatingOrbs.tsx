import { useMouseParallax } from "@/hooks/useAnimations";

const FloatingOrbs = () => {
  const mouse = useMouseParallax();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="orb orb-1 top-[10%] left-[15%]"
        style={{ transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)` }}
      />
      <div
        className="orb orb-2 top-[60%] right-[10%]"
        style={{ transform: `translate(${mouse.x * -15}px, ${mouse.y * -15}px)` }}
      />
      <div
        className="orb orb-3 bottom-[20%] left-[40%]"
        style={{ transform: `translate(${mouse.x * 10}px, ${mouse.y * 10}px)` }}
      />
    </div>
  );
};

export default FloatingOrbs;
