import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'Menu',
        isTitle: true
    },
    {
        id: 2,
        label: 'Tableaux de bord',
        icon: "ph-paint-brush-broad",
        link: '/admin/dashbaord/dash'
    },
    {
        id: 3,
        label: 'Modules',
        isTitle: true
    },
    {
        id: 4,
        label: 'Produit',
        icon: 'ph-chats',
        subItems: [
            {
                id: 1,
                label: 'Produit',
                link: '/product',
                parentId: 4
            },
            {
                id: 2,
                label: 'Type',
                link: '/product/type',
                parentId: 4
            },
            {
                id: 3,
                label: 'State',
                link: '/product/state',
                parentId: 4
            },
            {
                id: 4,
                label: 'Rarity',
                link: '/product/rarity',
                parentId: 4
            }
        ]
    } ,
    {
        id: 5,
        label: 'Paramètres',
        isTitle: true
    },
    {
        id: 6,
        label: 'Utilisateurs',
        icon: 'ph-graduation-cap',
        link: '/admin/parametre/users',     
        parentId: 5,  
    },
    {
        id: 7,
        label: 'Configuration',
        icon: 'ph-chats',
        subItems: [
            {
                id: 1,
                label: 'Pays',
                link: '/parametre/pays',
                parentId: 7
            },
            {
                id: 1,
                label: 'Ville',
                link: '/parametre/ville',
                parentId: 8
            },
            {
                id: 1,
                label: 'Catégorie',
                link: '/parametre/categorie',
                parentId: 9
            },
            {
                id: 1,
                label: 'Sous catégorie',
                link: '/parametre/sous-categorie',
                parentId: 10
            },
            {
                id: 1,
                label: 'Couleur',
                link: '/parametre/couleur',
                parentId: 10
            }
        ]
    }  
]