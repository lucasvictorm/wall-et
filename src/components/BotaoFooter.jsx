function BotaoFooter({icon, texto}){
    return (
        <div className="flex text-gray-600 hover:text-black cursor-pointer flex-col items-center">
            {icon}
            <p className="text-sm">{texto}</p>

        </div>

    )

}

export default BotaoFooter