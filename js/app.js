shownotes();


let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    shownotes();
})
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">Note${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deletenotes(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
        </div>
        `
    });
    let notesElm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML=`Nothing to show`
    }
}


function deletenotes(index){
    let notes =localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}

let search=document.getElementById('searchtxt');
search.addEventListener("input",function(){
    let inpval=search.value.toLowerCase();
    let notecart=document.getElementsByClassName('notecard');
    Array.from(notecart).forEach(function(element){
        let carttxt=element.getElementsByTagName('p')[0].innerText;
        if(carttxt.includes(inpval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})
