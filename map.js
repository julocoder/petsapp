
// Función de inicialización del mapa
function initMap() {
    var coord = {lat: -34.6158238, lng: -58.4332985};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: coord,
        disableDefaultUI: true, // Desactiva la interfaz de usuario predeterminada
        styles: [
            {
                featureType: 'poi',
                stylers: [{ visibility: 'off' }] // Oculta puntos de interés (POI)
            },
            {
                featureType: 'transit',
                elementType: 'labels',
                stylers: [{ visibility: 'off' }] // Oculta etiquetas de transporte público
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  { color: '#FFFFFF' } // Cambia el color de las carreteras
                ]
            },
            {
                featureType: 'landscape',
                elementType: 'geometry',
                stylers: [
                  { color: '#C8E7BD' } // Cambia el color del fondo del mapa
                ]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [
                  { visibility: 'on' }, // Asegura que las carreteras sean visibles
                  { weight: 0.5 } // Ajusta el ancho de las carreteras
                ]
            },
            {
                featureType: 'road',
                elementType: 'labels.text',
                stylers: [
                  { visibility: 'on' }, // Asegura que las etiquetas de las calles sean visibles
                  { fontSize: '4px' } // Ajusta el tamaño de fuente de las etiquetas de las calles
                ]
            }
        ]
    });
};

// FAB MENU PRINCIPAL //
function f() {
    document.getElementsByClassName('dropdown')[0].classList.toggle('down');
    document.getElementsByClassName('arrow')[0].classList.toggle('gone');
    if (document.getElementsByClassName('dropdown')[0].classList.contains('down')) {
      setTimeout(function() {
        document.getElementsByClassName('dropdown')[0].style.overflow = 'visible'
      }, 500)
    } else {
      document.getElementsByClassName('dropdown')[0].style.overflow = 'hidden'
    }
  }




