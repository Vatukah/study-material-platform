import "./component.css"
import Logo from '../assets/syllabDesk_logo_2.svg'

export default function TitleBar (){

    return(
      
        <header>
            <div className="logo ">
                <img src={Logo} alt="logo" />
                <div className="logo-name">SyllabDesk</div>
            </div>
        </header>
    )
}