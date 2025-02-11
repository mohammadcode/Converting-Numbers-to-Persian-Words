function copyToClipboardAndShowPopup() {
      const textToCopy = document.getElementById('result-txt').innerHTML;
      navigator.clipboard.writeText(textToCopy).then(() => {
          showPopup();
      }).catch(err => {
          console.error('Error copying text: ', err);
      });
  }
  
  function showPopup() {
      document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
      document.getElementById('popup').style.display = 'none';
  }
  