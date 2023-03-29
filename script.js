const botonExperiencia = document.getElementById('expButton');
const botonEducacion = document.getElementById('edButton');
const botonHobbies = document.getElementById('hoButton');
let datos1 = document.querySelector('.tarjetaDatosExp');
let datos2 = document.querySelector('.tarjetaDatosEdu');
let datos3 = document.querySelector('.tarjetaDatosHob');
let estaMostrandoexp = false;
let estaMostrandoedu = false;
let estaMostrandohob = false;

botonExperiencia.addEventListener("click", () => {

    if(!estaMostrandoexp){
        datos1.style.display = 'block';
        estaMostrandoexp = true;

    }else{
        datos1.style.display = 'none';
        estaMostrandoexp = false;
    }

});

botonEducacion.addEventListener("click", () => {
    
    if(!estaMostrandoedu){
        datos2.style.display = 'block';
        estaMostrandoedu = true;

    }else{
        datos2.style.display = 'none';
        estaMostrandoedu = false;
    }
});

botonHobbies.addEventListener("click", () => {
    if(!estaMostrandohob){
        datos3.style.display = 'block';
        estaMostrandohob = true;
    
    }else{
        datos3.style.display = 'none';
        estaMostrandohob = false;
    }
    
    
})








