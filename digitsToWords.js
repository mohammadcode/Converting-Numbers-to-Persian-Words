jQuery('input.number').on('keyup', function (event) {
  if (event.which >= 37 && event.which <= 40){
    convertDigitsToWords(jQuery('#numbers').val().split(',').join(''));
    return;
  }
  this.value = translateToEng(this.value.split(',').join('')).replace(/\D/g,'').replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  if ( this.value.length > 0 ){
    jQuery(this).removeClass('is-invalid').next().html('');
  }else {
    jQuery(this).addClass('is-invalid').next().html(errorMessageNumber);
  }
  convertDigitsToWords(jQuery('#numbers').val().split(',').join(''));

});

jQuery('#digits-to-words-form').on('submit',function(event) {
  if (jQuery('#numbers').val() == '') {
    jQuery('#numbers').addClass('is-invalid').next().html(errorMessageNumber);
    event.preventDefault();
    window.location.hash = '#input-content';
    jQuery('#result').addClass('d-none');
  }
  else {
    jQuery('#numbers').removeClass('is-invalid');
    convertDigitsToWords(jQuery('#numbers').val().split(',').join(''));
    window.location.hash = '#result';
    event.preventDefault();
  }
});

function convertDigitsToWords( numbers ) {
  var result;
  if (numbers.toString().length > 0) {
    // if (numbers.toString().length <= 23) {
    //   result = persianJs(numbers).digitsToWords().toString();
    // } else {
    // }
      result = NumToPersian(numbers);
    jQuery('#result-txt').html(result);
    jQuery('#result').removeClass('d-none');
  }else {
    jQuery('#result').addClass('d-none');
  }
}



function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}