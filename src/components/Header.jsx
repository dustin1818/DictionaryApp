import ToggleFont from "./ToggleFont";
import LightDarkMode from "./LightDarkMode";

const Header = () => {
  const reloadPage = () => {
    window.location.reload();
  };
  return (
    <div className="flex">
      <div className="left-container mr-auto">
        <svg
          onClick={reloadPage}
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 38"
          className="h-11 w-11"
          width="34"
          height="38"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#838383"
            strokeLinecap="round"
            strokeWidth="1.5px"
          >
            <path
              d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28"
              stroke="#838383"
              fill="none"
              strokeWidth="1.5px"
            ></path>
            <path
              strokeLinejoin="round"
              d="M5 37a4 4 0 1 1 0-8"
              stroke="#838383"
              fill="none"
              strokeWidth="1.5px"
            ></path>
            <path
              d="M11 9h12"
              stroke="#838383"
              fill="none"
              strokeWidth="1.5px"
            ></path>
          </g>
        </svg>
      </div>

      <div className="right-container flex items-center">
        <ToggleFont />

        <span className="mx-4 text-2xl md:text-3xl"> | </span>

        <LightDarkMode />
      </div>
    </div>
  );
};

export default Header;
