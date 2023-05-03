export default function gtag() {
    window.addEventListener('load', function() {

        jQuery('body').on('mousedown', '[href*="tel:"]', function() {
          gtag('event', 'conversion', {
            'send_to': 'AW-10884039659/UQPSCOeRocQDEOuH9cUo'
          });
        })
    
      });
}