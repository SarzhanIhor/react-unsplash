import { useGlobalContext } from "../context";
import { BsSunFill, BsMoonFill } from "react-icons/bs";


{/* <BsSunFill /> */}
{/* <BsMoonFill /> */}

const ThemeToggle = () => {
  const {isDarkTheme, toggleDarkTheme} = useGlobalContext()
  return (
    <div className="toggle-container">
    <button className='dark-toggle' onClick={toggleDarkTheme}>
      {
        isDarkTheme ? (
          <BsMoonFill className="toggle-icon"/>
        ): (
          <BsSunFill className="toggle-icon"/>
        )
      }
    </button>
    </div>
  )
}

export default ThemeToggle