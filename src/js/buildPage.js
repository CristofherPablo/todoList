// import icon image
import note from '../assets/note.png';

//get the icon image and render in the page
function renderIcon () {
    const iconLink = document.querySelector(`link[rel~='icon']`);

    iconLink.href = note;
}

export default renderIcon;