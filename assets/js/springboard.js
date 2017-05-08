var formGroup = document.getElementsByClassName('form-container');
var jobseeker = document.getElementById('jobseeker');
var business = document.getElementById('business');
var one = document.querySelector('.one');
var two = document.querySelector('.two');

jobseeker.addEventListener("click", function(){
  one.classList.remove('hidden');
  one.classList.add('fadeIn');
  jobseeker.classList.add('-outline');
  two.classList.add('hidden');
  business.classList.remove('-outline');
  business.classList.add('-none');
});

business.addEventListener("click", function(){
  two.classList.remove('hidden');
  two.classList.add('fadeIn');
  business.classList.add('-outline');
  one.classList.add('hidden');
  jobseeker.classList.remove('-outline');
  jobseeker.classList.add('-none');
});
