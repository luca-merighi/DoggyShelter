const body = document.querySelector('body')
const sidebar = document.querySelector('#sidebar')
const sidebarLinks = document.querySelectorAll('#sidebar .sidebar-links li a')

const toggleSidebarIcons = document.querySelector('.toggle-sidebar-icons')
const menuIcon = document.querySelector('.toggle-sidebar-icons .menu-icon')
const closeIcon = document.querySelector('.toggle-sidebar-icons .close-icon')

function openOrCloseSidebar() {
    body.classList.toggle('lock-scroll')
    sidebar.classList.toggle('show')

    menuIcon.classList.toggle('hide')
    closeIcon.classList.toggle('hide')
}

toggleSidebarIcons.addEventListener('click', () => {
    openOrCloseSidebar()
})

toggleSidebarIcons.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        openOrCloseSidebar()
    }
})

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        openOrCloseSidebar()
    })

    link.addEventListener('keypress', (event) => {
        if(event.keyCode === 13) {
            openOrCloseSidebar()
        }
    })
})