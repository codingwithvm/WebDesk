const folders = [
    {
        label: "Meu Computador",
        explorer: true,
        files: [],
        subfolders: [],
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
        icon: {
            src: 'src/assets/images.png',
            alt: 'images',
        }
    }
]

const workspaceFiles = [
    folders[0],
    folders[1]
]

export { folders, workspaceFiles }