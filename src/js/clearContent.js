const clearContent = (div)=>{
    if (div) {
    while (div.firstChild){
        clearContent(div.firstChild);
        div.removeChild(div.firstChild);

    }
}};

export default clearContent;