document.getElementById('sosButton').addEventListener('click', () => {
  fetch('/send-alert', { method: 'POST' });
  alert('SOS sent!');
});

document.getElementById('startLocation').addEventListener('click', () => {
  if (navigator.geolocation) {
    setInterval(() => {
      navigator.geolocation.getCurrentPosition(position => {
        fetch('/update-location', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          })
        });
      });
    }, 10000); // Every 10 seconds
  } else {
    alert('Geolocation not supported');
  }
});

function addContact() {
  const input = document.getElementById('contactInput');
  const number = input.value;
  if (number) {
    fetch('/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ number })
    });
    const list = document.getElementById('contactList');
    const item = document.createElement('li');
    item.textContent = number;
    list.appendChild(item);
    input.value = '';
  }
}
