import { Link } from "react-router-dom";
const Footer = () => {
  return (
  <>
     <div className="mobile_footer">
     <Link to="/home">   <span className="material-symbols-outlined mobile_footer_icon">
          explore
        </span></Link>
    
        <span className="material-symbols-outlined mobile_footer_icon">
          forum
        </span>
    

        <span className="material-symbols-outlined mobile_footer_icon">
          settings
        </span>
      </div>
  </>
  )
}

export default Footer