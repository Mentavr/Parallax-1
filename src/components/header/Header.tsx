import clsx from "clsx";
import cls from "./styles.module.css";
import { useWindowScroll, useMouse } from "@uidotdev/usehooks";

export const Header = () => {
  const [{ y }] = useWindowScroll();
  const [mouse] = useMouse();
  const xIntersecting = mouse.x;
  const yIntersecting = mouse.y;
  Object.assign(document.documentElement, {
    style: `
    --scrollTop: ${y}px;
    --move-x:${(xIntersecting - window.innerWidth / 2) * -.005}deg;
    --move-y:${(yIntersecting - window.innerHeight / 2) * -.002}deg;
    `,
  });

  return (
    <div className={cls.mainHeader}>
      <div className={cls.layers}>
        <div className={cls.layerHeader}>
          <h1 className={cls.layersCapture}>Welcome to parallax</h1>
          <h2 className={cls.layerTitle}>Сказочный лес</h2>
        </div>
        <div
          className={clsx(cls.layer, cls.layerBase)}
          style={{ backgroundImage: "url(./images/layer-base.png)" }}
        ></div>
        <div
          className={clsx(cls.layer, cls.layerMiddle)}
          style={{ backgroundImage: "url(./images/layer-middle.png)" }}
        ></div>
        <div
          className={clsx(cls.layer, cls.layerFront)}
          style={{ backgroundImage: "url(./images/layer-front.png)" }}
        ></div>
      </div>
    </div>
  );
};
