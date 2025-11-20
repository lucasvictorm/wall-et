
import logo from '../assets/logo.png'

function Header({children}){
    return(
        <>
            <div className="w-full p-2">
                <img className='h-10' src={logo} alt="" />

            </div>
            <div className="w-full p-6 border-b border-gray-300">
                
                {children}

            </div>
        </>
    )
}

export default Header