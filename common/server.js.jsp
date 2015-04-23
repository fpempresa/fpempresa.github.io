//El usuario que está loggeado en el servidor
var user=null;


//El context Path de la aplicación
function getContextPath() {
    return window.location.pathname.substring(0, window.location.pathname.indexOf("/",2));
}