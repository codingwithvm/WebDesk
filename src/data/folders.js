const apps = [
    {
        label: "Terminal",
        explorer: false,
        icon: {
            src: './assets/terminal.png',
            alt: 'terminal',
        },
        body: ''
    },
    {
        label: "Configurações",
        explorer: false,
        icon: {
            src: './assets/settings.png',
            alt: 'settings',
        },
        body: ''
    },
    {
        label: "Calculadora",
        explorer: false,
        icon: {
            src: './assets/calculator.png',
            alt: 'calculator',
        },
        body: ''
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
            src: './assets/computer.png',
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
            src: './assets/trash.png',
            alt: 'trash',
        }
    },
    {
        label: "Área de Trabalho",
        explorer: true,
        files: [],
        subfolders: ["Meu Computador", "Lixeira"],
        tag: "Favoritos",
        icon: {
            src: './assets/desktop.png',
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
            src: './assets/download-folder.png',
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
            src: './assets/documents.png',
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
            src: './assets/images.png',
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
            src: './assets/folder.png',
            alt: 'folder',
        }
    }
]

const createaNewFolder = (path, name) => {
    folders.push({
        label: name,
        explorer: true,
        files: [],
        subfolders: [],
        tag: "",
        icon: {
            src: './assets/folder.png',
            alt: 'folder',
        }
    })

    // console.log(folders)

    const folder = folders.find(folder => folder.label === path)
    folder.subfolders.push(name)
}

const createNewFile = file => {
    const { label, body, type, path } = file

    if (type === "text") {
        const newFile = {
            label,
            explorer: false,
            icon: {
                src: './assets/documents.png',
                alt: 'documents',
            },
            body
        }

        apps.push(newFile)
        const folder = folders.find(folder => folder.label === path)
        folder.files.push(label+'.txt')

        console.log(apps)
        console.log(folder)
    }
}

// Configurando itens ao subarray de pastas da área de trabalho
const workspaceFiles = []

// Encontrado itens a partir do label
for (const label of folders[2].subfolders) {
    const folder = folders.find(folder => folder.label === label)

    workspaceFiles.push(folder)
}

// Encontrando itens a partir do label
for (const label of folders[2].files) {
    const file = apps.find(file => file.label === label)

    workspaceFiles.push(file)
}

const taskbarFiles = [
    folders[6],
    apps[1],
    apps[2],
    apps[0]
]

const favoritesFiles = folders.filter(folder => folder.tag === "Favoritos")
const localFiles = folders.filter(folder => folder.tag === "Locais")


const getSubfoldersData = (folderToRender, folders, apps) => {
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

    return subfoldersData
}

export {
    folders,
    workspaceFiles,
    taskbarFiles,
    favoritesFiles,
    localFiles,
    apps,
    createaNewFolder,
    getSubfoldersData,
    createNewFile
}