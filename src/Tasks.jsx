import { Footer } from "./Footer";

export const Task = ({ setActiveNav, activeNav }) => {
  return (
    <div className="mine-part" style={{ paddingBottom: "4em" }}>
      <p
        style={{
          textAlign: "center",
          marginTop: "10em",
          fontFamily: "Karla, sans-serif",
          textTransform: "capitalize",
          color: "white",
        }}
      >
        Coming Soon
      </p>
      <Footer setActiveNav={setActiveNav} activeNav={activeNav} />
    </div>
  );
};
