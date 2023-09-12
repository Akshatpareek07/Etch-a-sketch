const header=document.querySelector('.header');
function create_grid(size){
for(let i=1;i<=size;i++){
    console.log(`${i}`);
    let new_cdiv=document.createElement('div');
    new_cdiv.classList.add('new_column');
    for(let j=1;j<=size;j++){
        let new_div=document.createElement('div');
        new_div.classList.add('new');
        new_cdiv.append(new_div);
    }
    header.appendChild(new_cdiv);
}
}
create_grid(10);
const cell=document.querySelectorAll('.new');

cell.forEach(cell => {cell.addEventListener('click',function(e){
    e.target.style.backgroundColor="black";
});
});