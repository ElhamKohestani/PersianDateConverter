

const converter = require('jalaali-js');
const Pristine = require('pristinejs');

let btnShamsiConvert = document.getElementById("btnShamsiConvert");
let btnGregorianConvert = document.getElementById("btnGregorianConvert");



let tbxJalaliYear = document.getElementById("tbxJalaaliYear");
let ddlJalaaliMonth = document.getElementById("ddlJalaaliMonth");
let tbxJalaaliDay = document.getElementById("tbxJalaaliDay");

const formJalaaliConvert = document.getElementById("jalaaliForm");
const formGregorianConvert = document.getElementById("gregorianForm");


const prestineShamsiValidator = new Pristine(formJalaaliConvert);
const prestineGregorianValidator = new Pristine(formGregorianConvert);



btnShamsiConvert.addEventListener("click", function () {

  if(prestineShamsiValidator.validate())
  {
    let date = converter.toGregorian(parseInt(tbxJalaliYear.value), parseInt(ddlJalaaliMonth.value), parseInt(tbxJalaaliDay.value));

    if(converter.isValidJalaaliDate(date.gy, date.gm, date.jd)){
      document.getElementById("tbxGregorianYear").value = date.gy;
      document.getElementById("ddlGregorianMonth").value = date.gm.toString();
      document.getElementById("tbxGregorianDay").value = date.gd;
    }
    else{
      alert("ورودی های فرم نادرست می باشد");
    }
  }
  else{
    alert("ورودی های فرم نادرست می باشد");
  }
  
});

btnGregorianConvert.addEventListener("click", function(){
  
  if(prestineGregorianValidator.validate()){
    let tbxGregorianYear = document.getElementById("tbxGregorianYear").value;
    let ddlGregorianMonth = document.getElementById("ddlGregorianMonth").value;
    let tbxGregorianDay = document.getElementById("tbxGregorianDay").value;


    let date = converter.toJalaali(parseInt(tbxGregorianYear), parseInt(ddlGregorianMonth), parseInt(tbxGregorianDay))

    document.getElementById("tbxJalaaliYear").value = date.jy;
    document.getElementById("ddlJalaaliMonth").value = date.jm.toString();
    document.getElementById("tbxJalaaliDay").value = date.jd;
  }
  else{
    alert("Form inputs are invalid");
  }
  
});

