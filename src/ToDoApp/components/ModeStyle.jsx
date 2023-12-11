import "../../sass/components/ModeStyle.sass";

// eslint-disable-next-line react/prop-types
export const ModeStyle = ({ onMode }) => {
  return (
    <>
      <input
        id="mode"
        type="checkbox"
        name="modeStyle"
        className="mode"
        onClick={() => onMode()}
      />
      <label htmlFor="mode" className="modeDark"></label>
      <label htmlFor="mode" className="modeLight"></label>
    </>
  );
};
