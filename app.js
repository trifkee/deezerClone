const menuBtn = document.querySelector('.hamburger')
const closeMenuBtn = document.querySelector('.close-menu')
const sideMenu = document.querySelector('aside')
// --SEKCIJE U HTML
let playlistSection = document.querySelector('.playlists')
let categoriesSection = document.querySelector('.categories')
let artistsSection = document.querySelector('.artists')

// SIDE MENU
menuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

function openMenu() {
    sideMenu.classList.add('active')
}
function closeMenu() {
    sideMenu.classList.remove('active')
}
// -----
// FETCH DATA FROM DEEZER
document.addEventListener('DOMContentLoaded', () =>{
    fetch('link...')
    .then(response => response.json())
    .then(data => {
        // console.log(data.data);
        const playlists = data.data
        playlists.forEach(playlist =>{
            console.log(playlist);

          /*  // playlistSection.innerHTML += 
            // `
            // <div class="playlist" style="background-image: url(); height:30px;">
            //     <div class="playlist-actions">
            //         <button class="playlist-actions-play"> <ion-icon name="play-circle"></ion-icon></button>
            //         <button class="playlist-actions-fav"> <ion-icon name="heart-circle"></ion-icon></button>
            //         <button class="playlist-actions-share"> <ion-icon
            //                 name="share-social"></ion-icon></button>
            //     </div>
            //     <p>${playlist.title}</p>
            // </div>
            // `
            // const playlistItem = document.createElement('div').classList.add('playlist')
            // const playlistActions = document.createElement('div').classList.add('playlist-actions')

            // playlistSection.append(playlistItem)
            // playlistItem.appendChild(playlistActions) */

        })
    })
})