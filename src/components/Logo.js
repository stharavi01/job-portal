import logo from "../assets/images/logo.svg"

import subLogo from "../assets/images/subLogo.svg"
const Logo = () => {
    return <img src={logo} alt="jobster logo" className="logo" />
}


const subLogo = () => {
    return <img src={subLogo} alt="jobster logo" className="subLogo" />
}
export default Logo