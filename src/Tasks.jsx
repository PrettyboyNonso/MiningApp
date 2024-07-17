import { Footer } from "./Footer";

export const Task = ({ setActiveNav, activeNav }) => {
  return (
    <div className="mine-part">
      <p>Coming Soon</p>
      <Footer setActiveNav={setActiveNav} activeNav={activeNav} />
    </div>
  );
};
