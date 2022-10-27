"use strict";

let tableTitle = document.querySelector(".table-title");
let sizeTable = document.querySelector(".size-table");

tableTitle.addEventListener("click", (e)=>{
    e.preventDefault();
    if (sizeTable.classList.contains("visibility")) sizeTable.classList.remove("visibility");
    else sizeTable.classList.add("visibility");
})