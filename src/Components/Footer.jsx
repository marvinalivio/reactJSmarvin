import react from '../assets/react.svg'
const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="colClass">
                    <p style={{fontSize:"16px"}}>Copyright © 2025 Marvin Alivio | All right reserved.<br/><span className="flex">Powered by ReactJS <img src={react} className='reactLogoFooter' /> </span></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;