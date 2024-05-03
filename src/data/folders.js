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
        subfolders: ["Área de Trabalho", "Documentos", "Downloads", "Imagens"],
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
        files: ["Terminal"],
        subfolders: ["Meu Computador", "Lixeira"],
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
        subfolders: ["Imagens"],
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
        subfolders: ["Área de Trabalho", "Documentos", "Downloads", "Imagens"],
        tag: "",
        icon: {
            src: 'src/assets/folder.png',
            alt: 'folder',
        }
    }
]

// Configurando itens ao subarray de pastas da área de trabalho
const workspaceFiles = []

// Encontrado itens a partir do label
for(const label of folders[2].subfolders) {
    const folder = folders.find(folder => folder.label === label)

    workspaceFiles.push(folder)
}

// Encontrando itens a partir do label
for(const label of folders[2].files) {
    const file = apps.find(file => file.label === label)

    workspaceFiles.push(file)
}

const taskbarFiles = [
    folders[6],
    apps[1],
    apps[2]
]

const favoritesFiles = folders.filter(folder => folder.tag === "Favoritos")
const localFiles = folders.filter(folder => folder.tag === "Locais")

// Adicionando icones a pasta da area de trabalho

export { folders, workspaceFiles, taskbarFiles, favoritesFiles, localFiles, apps }