const addToCart=document.querySelectorAll('[data-btn-action="add-btn-carrito"]');

const cerrarModal=document.querySelector('.jsModalCerrar');

addToCart.forEach(btn =>{
    btn.addEventListener('click', (event)=>{

        const nameModal=event.target.getAttribute('data-modal');

        const modal=document.querySelector(nameModal);

        //abre el modal
        modal.classList.add('active');
    })
});
//cierra el modal

cerrarModal.addEventListener('click',(event)=>{
    event.target.parentNode.parentNode.classList.remove('active');
})
//cierra modal al hacer click fuera
window.onclick=(event)=>{
    const modal=document.querySelector('.modal .active')
    if(event.target==modal){
        modal.classList.remove('active');
    }
        
}