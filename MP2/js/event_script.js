function openFullscreen() {
  var imgSrc = event.target.src;
  var fullscreenImg = document.querySelector('.fullscreen-image');
  fullscreenImg.src = imgSrc;
  document.getElementById('fullscreen').style.display = 'block';
  document.documentElement.style.overflow = 'hidden';
}

function closeFullscreen() {
  document.getElementById('fullscreen').style.display = 'none';
  document.documentElement.style.overflow = 'auto';
}

function updateCountdown() {
  var eventDate = new Date("2024-05-22T10:00:00"); // Change this to your event date
  var currentDate = new Date();
  var difference = eventDate.getTime() - currentDate.getTime();

  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML content of the countdown boxes
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function startCountdown() {
  // Call the updateCountdown function to start the countdown immediately
  updateCountdown();

  // Call the updateCountdown function every second to keep it updated
  setInterval(updateCountdown, 1000);
}

// Call the startCountdown function when the page loads
window.onload = startCountdown;