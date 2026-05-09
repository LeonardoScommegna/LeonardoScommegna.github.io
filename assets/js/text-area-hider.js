$(document).ready(function () {
  console.log("this is a ping")
  $('.content-item').hide();

  $('.btn').click(function () {
    var uniqueID = $(this).data('unique-id');
    var target = '#' + $(this).attr('id') + '-content-' + uniqueID;
    $('.content-item').not(target).hide();
    console.log(target)
    $(target).toggle();
  });
});

function copyToClipboard(elementId, buttonElem) {
    // 1. Recupera il testo dall'elemento target
    const textElement = document.getElementById(elementId);
    const text = textElement.innerText || textElement.textContent;

    // 2. Usa l'API moderna Clipboard per copiare
    navigator.clipboard.writeText(text).then(() => {
        // 3. Feedback visivo: salva l'HTML originale del bottone
        const originalHTML = buttonElem.innerHTML;
        
        // Cambia l'icona e il testo per far capire che è stato copiato
        buttonElem.innerHTML = '<i class="fas fa-check" style="color: green;"></i> Copied!';
        buttonElem.style.borderColor = "green";
        
        // 4. Ripristina il bottone originale dopo 2 secondi
        setTimeout(() => {
            buttonElem.innerHTML = originalHTML;
            buttonElem.style.borderColor = "#ccc";
        }, 2000);
    }).catch(err => {
        console.error('Error while copying to clipboard: ', err);
        alert("Cannot copy to clipboard.");
    });
}