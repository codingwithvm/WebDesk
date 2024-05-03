import { useRef, useState } from 'react'
import { apps, createaNewFolder, favoritesFiles, folders, localFiles } from '../../data/folders'
import './style.css'
import Icon from '../Icon/Icon'


export default ({ title }) => {
    // Encontrando pasta na lista atraves do titulo
    const folder = folders.find(folder => folder.label === title)
    // Identificando as subpastas dessa pasta
    const subfolders = folder.subfolders

    // Localizando as subpastas atraves do label da pasta
    const datas = []
    for (const label of subfolders) {
        const file = folders.find(file => file.label === label)
        datas.push(file)
    }

    const explorerRef = useRef(null)
    const [explorerTitle, setExplorerTitle] = useState(title)
    const [contentToShow, setContentToShow] = useState(datas)
    const [isZoomed, setIsZoomed] = useState(false)
    const [isClosed, setIsClosed] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 })

    const handleMinimizeClick = () => {
        explorerRef.current.style.height = '50px'
        explorerRef.current.style.opacity = '20%'
        explorerRef.current.style.top = '100%'
        setTimeout(() => {
            setIsClosed(true)
        }, 100)  // Ajustado aos mesmos 100ms da animação
    }

    const handleZoomClick = () => {
        if (isZoomed) {
            explorerRef.current.style.width = '800px'
            explorerRef.current.style.height = '500px'
        } else {
            explorerRef.current.style.width = '1080px'
            explorerRef.current.style.height = '600px'
        }

        setIsZoomed(!isZoomed)
    }

    const handleCloseClick = () => {
        explorerRef.current.style.width = '400px'
        explorerRef.current.style.height = '250px'
        explorerRef.current.style.opacity = '0'
        setTimeout(() => {
            setIsClosed(true)
        }, 200)  // Ajustado aos mesmos 200ms da animação
    }

    const handleIconClick = label => {
        // Resultado da busca pela pasta clicada
        const result = folders.find(folder => folder.label === label)
        const subfolderData = []

        // Listando todas as pastas da subpasta
        for (const data of result.subfolders) {
            const folder = folders.find(folder => folder.label === data)
            subfolderData.push(folder)
        }

        // Listando todos os arquivos da subpasta
        for (const data of result.files) {
            const file = apps.find(app => app.label === data)
            subfolderData.push(file)
        }

        // Alterando o titulo do explorer
        const currentTitle = explorerTitle
        // Raiz dos arquivos
        if (result.label !== "Meu Computador") {
            setExplorerTitle(currentTitle + '/' + result.label)
        } else {
            setExplorerTitle(result.label)
        }

        // console.log(prevFolder)
        setContentToShow(subfolderData)
    }

    const backFolderMiddlePath = title => {
        // Localiza último caractérer / do título do explorer
        const lastBar = title.lastIndexOf('/')
        // Cria o caminho selecionando o texto antes da /
        const path = title.substring(0, lastBar)

        setExplorerTitle(path)
    }

    // Cria o camino
    const backFolderPath = title => {
        // Localiza último caractérer / do título do explorer
        const lastBar = title.lastIndexOf('/')
        // Cria o caminho selecionando o texto antes da /
        const path = title.substring(0, lastBar)

        // Se o caminho não for a raiz
        if (path.lastIndexOf('/') !== -1) {
            // Repete o processo
            // Localiza último caractérer /
            const middleBar = path.lastIndexOf('/')
            // Cria o caminho selecionando o texto antes da / e soma 1 para não incluir
            const middlePath = title.substring(middleBar + 1, lastBar)

            return middlePath
        } else {
            return path
        }
    }

    const backFolder = title => {
        // Pesquisando pasta 
        const result = folders.find(folder => folder.label === backFolderPath(title))
        // Listando subfolders
        const subfoldersData = []

        backFolderMiddlePath(title)

        // Listando todas as pastas
        for (const label of result.subfolders) {
            const file = folders.find(file => file.label === label)
            subfoldersData.push(file)
        }

        // Listando todos os aplicativos
        for (const label of result.files) {
            const file = apps.find(file => file.label === label)
            subfoldersData.push(file)
        }

        // Alternado body
        setContentToShow(subfoldersData)
    }

    const handleContextMenu = e => {
        e.preventDefault()
        // Mostra o menu
        setShowMenu(true)
        // Altera a posição do menu
        setMenuPosition({ x: e.screenX, y: e.screenY })
    }

    const handleMenuClick = () => {
        setShowMenu(false)
    }

    // Criar nova pasta
    const handleNewFolderClick = (label) => {
        const lastBar = label.lastIndexOf('/')
        // retorna o label da pasta atual
        const path = label.substring(lastBar + 1)

        createaNewFolder(path, 'nova pasta')
        const folderToRender = folders.find(folder => folder.label === path)

        // Listando subfolders
        const subfoldersData = []

        // Listando todas as pastas
        for (const label of folderToRender.subfolders) {
            const file = folders.find(file => file.label === label)
            subfoldersData.push(file)
        }

        // Listando todos os aplicativos
        for (const label of folderToRender.files) {
            const file = apps.find(file => file.label === label)
            subfoldersData.push(file)
        }

        // Alternado body
        setContentToShow(subfoldersData)
    }

    if (isClosed) return null

    return (
        <div ref={explorerRef} className="explorer">
            <div className="header">
                <div className="title">{explorerTitle}</div>
                <div className="buttons">
                    <div className="minimize-button" onClick={handleMinimizeClick}></div>
                    <div className="zoom-button" onClick={handleZoomClick}></div>
                    <div className="close-button" onClick={handleCloseClick}></div>
                </div>
            </div>
            <div className="header-options">
                <div className="opt-buttons">
                    <div className="prev-button">
                        <img src="./src/assets/back.png" alt="back" onClick={() => {
                            backFolder(explorerTitle)
                        }} />
                    </div>
                    <div className="next-button">
                        <img src="./src/assets/foward.png" alt="foward" />
                    </div>
                </div>
                <div className="search-item">
                    <input type="text" name="searh" placeholder='Buscar' />
                </div>
            </div>
            <div className="explorer-body">
                <div className="explorer-aside">
                    <h1>Favoritos</h1>
                    <ul>
                        {
                            favoritesFiles.map((file, index) => (
                                <li key={index}>
                                    <img src={file.icon.src} alt={file.icon.alt} />
                                    {file.label}
                                </li>
                            ))
                        }
                    </ul>
                    <h1>Locais</h1>
                    <ul>
                        {
                            localFiles.map((file, index) => (
                                <li key={index}>
                                    <img src={file.icon.src} alt={file.icon.alt} />
                                    {file.label}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div onContextMenu={handleContextMenu} className="explorer-content">
                    {
                        contentToShow.map(({ label, icon }) => (
                            <Icon key={label} text={label} imageSrc={icon.src} handleIconClick={() => handleIconClick(label)} />
                        ))
                    }
                </div>
            </div>
            {
                showMenu && (
                    <div className="custom-menu" style={{ top: menuPosition.y - 155, left: menuPosition.x - 280 }} onClick={handleMenuClick}>
                        <div onClick={() => handleNewFolderClick(explorerTitle)}>Nova Pasta</div>
                        <div>Novo Texto</div>
                    </div>
                )
            }
        </div>
    )
}
