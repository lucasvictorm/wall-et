function BotaoFooter({icon, texto, onClick}){
    return (
        <button onClick={onClick} className="flex text-gray-600 hover:text-black cursor-pointer flex-col items-center">
            {icon}
            <p className="text-sm">{texto}</p>

        </button>

    )

}

export default BotaoFooter