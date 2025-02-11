function commaSeparator(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

function formatNumbers(t ) {
    var n = parseInt(t.val().replace(/\D/g, ''), 10);
    if (!isNaN(n)) {
        t.val(n.toLocaleString());
    }
    else {
        t.val('');
    }
}

function translateToEng( string ){
    var pn = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var en = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 10; i++) {
        var regex_fa = new RegExp(pn[i], 'g');
        string = string.replace(regex_fa, en[i]);
    }

    return string;
}


function translateToPer( string ){
    var en = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    var pn = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (var i = 0; i < 10; i++) {
        var regex_fa = new RegExp(pn[i], 'g');
        string = string.toString().replace(regex_fa, en[i]);
    }

    return string;
}

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}


function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd('character', selectionEnd);
    range.moveStart('character', selectionStart);
    range.select();
  }
}

function setCaretToPos(input, pos) {
  setSelectionRange(input, pos, pos);
}


function myRange(start, end) {
  var list = [];
  for (var i = start; i <= end; i++) {
    list.push(i);
  }
  return list;
}

function toObject(keys, values) {
  var result = {};
  for (var i = 0; i < keys.length; i++)
    result[keys[i]] = values[i];
  return result;
}

function copyToClipboardMain(str) {
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

function strstr(haystack, needle, bool) {
  var pos = 0;
  haystack += "";
  pos = haystack.indexOf(needle); if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}


function objectSize(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};



function addZeroBeforeNumber(n) {
    n = Number.parseInt(n);
    return (n < 10 ? '0' : '') + n;
}


function numberWithCommasMainFunctions(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}



function arraySearchMain(array,value) {
    for (var i=0; i<array.length; i++)
        if (array[i] === value)
            return i;
    return false;
}

function arraySearchMainArray(array,value) {
    var data = [];
    for (var i=0; i<array.length; i++)
        if (array[i] === value)
            data.push(i);

    if( data.length > 0 ){
        return data;
    }
    return false;
}

function extractObject(data) {
    for (var key in data) {
        this[key] = data[key];
    }
}

function setPrecision( number ) {
    if ( number % 1 !== 0 ) {
        number = number.toFixed(Number.parseInt($("#setDecimal").val()));
        var array = number.split(".");
        if( array.length > 0 ){
            number = Number.parseInt(array[1]) === 0 ? array[0] : number;
        }
    }
    return Number(number);
}
