document.addEventListener('DOMContentLoaded', function() {

    var h1 = document.querySelector('h1');

    if(h1) {
      h1.classList.add('heading');
    }

  });



  document.addEventListener('DOMContentLoaded', function() {

    document.body.addEventListener('dblclick', function() {
      const currentTime = new Date(); 
      const timeString = currentTime.toLocaleTimeString();
  

      alert('The current time is: ' + timeString);
    });
  });
  









  
  document.addEventListener('DOMContentLoaded', function() {
 
    const toggleCheckbox = document.getElementById('toggle');

    toggleCheckbox.addEventListener('change', function() {

      const emailBox = document.getElementById('emailBox');
  

      if (toggleCheckbox.checked) {

        emailBox.classList.remove('hidden');
      } else {

        emailBox.classList.add('hidden');
      }
    });
  });
  
  