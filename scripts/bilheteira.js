var modalComprar = document.getElementById('modalComprar');
var cart = null;

$(document).ready(function () {
    cart = {
        ticket: '',
        fullName: '',
        contact: '',
        email: '',
        nif: '',
        paymentMethod: 'refmb',
        price: ''
    }
});

$(window).resize(function () {
   
});

modalComprar.addEventListener('shown.bs.modal', function (e) { // Event fired when modal becomes visible
           
});

modalComprar.addEventListener('hide.bs.modal', function (e) { // Event fired immediately when the hide instance method has been called
    $('.modal-price').html('');
    $(`#${cart.ticket}`).removeClass('active');
});

function updateState (obj) {  
    cart.ticket = obj.ticket ? obj.ticket : cart.ticket;           
    cart.fullName = obj.fullName ? obj.fullName : cart.fullName;           
    cart.contact = obj.contact ? obj.contact : cart.contact;           
    cart.email = obj.email ? obj.email : cart.email;           
    cart.nif = obj.nif ? obj.nif : cart.nif;           
    cart.paymentMethod = obj.paymentMethod ? obj.paymentMethod : cart.paymentMethod;           
    cart.price = obj.price ? obj.price : cart.price;  

    console.log(obj);
      
    updateTicket();      
    updatePaymentMethod();
    updatePrice();
}

function updateTicket () { 
    $('.modal-bilhete').removeClass('active');
    $(`#${cart.ticket}`).addClass('active'); 
}

function updatePaymentMethod () {
    console.log(cart);
    $('.modal-metodo-pagamento').removeClass('active');
    $(`#${cart.paymentMethod}`).addClass('active'); 
}

function updatePrice () {
    $('.modal-price').html(cart.price);  
}

function simularCompra() {
    updateState({
        fullName: $('#nomeCompleto').val(),
        contact: $('#telemovel').val(),
        email: $('#email').val(),
        nif: $('#nif').val(),
    });

    let ticket = cart.ticket === 'ticket16' ? 'Bilhete dia 16' : cart.ticket === 'ticket17' ? 'Bilhete dia 17' : 'Passe Geral';

    if (cart.fullName && cart.contact && cart.email) {
        alert(`RECIBO
        Nome: ${cart.fullName}
        NIF: ${cart.nif}
        Email: ${cart.email}
        Contacto: ${cart.contact}
        Tipo de Bilhete: ${ticket}
        Valor: ${cart.price} IVA incluido
        Método de pagamento: ${cart.paymentMethod}`);
    }    
}