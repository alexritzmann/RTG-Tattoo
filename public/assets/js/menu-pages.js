
const menuDiv = document.createElement('div');
menuDiv.className = 'menu';

const menuItems = 
[
    { type: 'link', text: 'Sobre', page: 'about.html' },
    { type: 'link', text: 'Equipe', page: 'team.html' },
    { type: 'link', text: 'Galeria', page: 'gallery.html' },
    { type: 'image', src: '../assets/images/logo.png', alt: 'Logo da RTG Tattoo' },
    { type: 'link', text: 'Orçamento', page: 'orcamento.html' },
    { type: 'link', text: 'Endereço', page: 'address.html' },
    { type: 'link', text: 'Contato', page: 'contact.html' }
];

menuItems.forEach(item => 
{
    const itemContainer = document.createElement('div');
    
    if (item.type === 'link') {
        const link = document.createElement('a');
        link.className = 'menu-item';
        link.href = item.page;
        link.textContent = item.text;
        itemContainer.appendChild(link);
    } 
    else if (item.type === 'image') {
        const logo = document.createElement('img');
        logo.id = 'img-logo';
        logo.src = item.src;
        logo.alt = item.alt;
        itemContainer.appendChild(logo);
    }
    
    menuDiv.appendChild(itemContainer);
});

document.getElementById('header-menu').appendChild(menuDiv);


const imgLogo = document.getElementById('img-logo');
imgLogo.addEventListener('click', () => 
{
    window.location.href = '../index.html';
});
