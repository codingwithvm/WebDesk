const apps = [
    {
        label: "Terminal",
        explorer: false,
        icon: {
            src: 'src/assets/terminal.png',
            alt: 'terminal',
        }
    },
    {
        label: "Configurações",
        explorer: false,
        icon: {
            src: 'src/assets/settings.png',
            alt: 'settings',
        }
    },
    {
        label: "Calculadora",
        explorer: false,
        icon: {
            src: 'src/assets/calculator.png',
            alt: 'calculator',
        }
    }
]

const folders = [
    {
        label: "Meu Computador",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "Locais",
        icon: {
            src: 'src/assets/computer.png',
            alt: 'computer',
        }
    },
    {
        label: "Lixeira",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "",
        icon: {
            src: 'src/assets/trash.png',
            alt: 'trash',
        }
    },
    {
        label: "Área de Trabalho",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "Favoritos",
        icon: {
            src: 'src/assets/desktop.png',
            alt: 'desktop',
        }
    },
    {
        label: "Downloads",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "Favoritos",
        icon: {
            src: 'src/assets/download-folder.png',
            alt: 'download-folder',
        }
    },
    {
        label: "Documentos",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "Favoritos",
        icon: {
            src: 'src/assets/documents.png',
            alt: 'documents',
        }
    },
    {
        label: "Imagens",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "Favoritos",
        icon: {
            src: 'src/assets/images.png',
            alt: 'images',
        }
    },
    {
        label: "Explorador de Arquivos",
        explorer: true,
        files: [],
        subfolders: [],
        tag: "",
        icon: {
            src: 'src/assets/folder.png',
            alt: 'folder',
        }
    }
]

const workspaceFiles = [
    folders[0],
    folders[1],
    apps[0]
]

const taskbarFiles = [
    folders[6],
    apps[1],
    apps[2]
]

export { folders, workspaceFiles, taskbarFiles }