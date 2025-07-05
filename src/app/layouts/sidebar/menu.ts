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
        icon: "ph-gauge",
        link: '/admin/dashbaord/dash'
    },
    {
        id: 3,
        label: 'CRM',
        isTitle: true
    },
    {
        id: 4,
        label: 'Crm',
        icon: 'ph-bandaids',
        subItems: [
            {
                id: 1,
                label: 'Voyageurs',
                link: '/product/voyageurs',
                parentId: 4
            },
            {
                id: 2,
                label: 'Expediteurs',
                link: '/product/type',
                parentId: 4
            },
            {
                id: 3,
                label: 'Transporteurs',
                link: '/product/state',
                parentId: 4
            },
          
        ]
    } ,
     {
        id: 5,
        label: 'Marchands',
        icon: 'ph-graduation-cap',
        link: '/admin',     
        parentId: 5,  
    },
 
    {
        id: 5,
        label: 'Expeditions',
        icon: 'ph-stack-simple',
        link: '/admin',     
        parentId: 5,  
    },
    {
        id: 51,
        label: 'Voyages',
        icon: 'bx bx-car',
        link: '/admin',     
        parentId: 5,  
    },
    {
        id: 6,
        label: 'Utilisateurs',
        icon: 'ph-user-circle',
        link: '/admin/parametre/users',     
        parentId: 5,  
    },
    {
        id: 67,
        label: 'Discuter',
        icon: 'bx icon nav-icon ph-chats ng-star-inserted',
        link: '/admin',     
        parentId: 5,  
    },
    {   
        id: 68,
        label: 'Tresorerie',
        icon: ' bx bx-money',
        link: '/admin',     
        parentId: 5,  
    },
{   
        id: 4,
        label: 'Ticket',
        icon: ' bx bx-blanket',
        subItems: [
            {
                id: 1,
                label: 'Ticket',
                link: '/product/voyageurs',
                parentId: 4
            },
            {
                id: 2,
                label: 'Parametre',
                link: '/product/type',
                parentId: 4
            }
          
          
        ]
    } ,
    {
        id: 7,
        label: 'Parametres',
        icon: 'ph-wrench',
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