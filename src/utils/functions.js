 // Script to open and close sidebar
 export const open_menu = () => {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
 
export const close_menu = () => {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

export const fetchData = () => {
  return { type: 'data/fetchData' };  // Adjust the action type to match the reducer
};

export const fetchDataSuccess = (data) => {
  return { type: 'data/fetchDataSuccess', payload: data };  // Adjust the action type to match the reducer
};

export const getCurrentDateTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const day = String(now.getDate()).padStart(2, '0');

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;

    return formattedDateTime;
}
