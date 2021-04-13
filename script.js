'use strict';

const inputName = document.getElementsByName('name')[0]
const inputEmail = document.getElementsByName('email')[0]
const inputTitle = document.getElementsByName('subject')[0]
const inputMessage = document.getElementsByName('message')[0]
const form = document.getElementById('form')
const error = document.getElementById('error')
const successMessage = document.getElementById('success-message')


form.addEventListener('submit', e => {
   let errors = []
   if(inputName.value === '' || inputName.value == null){
      errors.push('Name is required')

   }
   if(inputEmail.value === ''){
      errors.push('Email is required')
   }
   if(inputTitle.value === ''){
      errors.push('Subject is required')
   }
   if(inputMessage.value === ''){
      errors.push('Message is required')
   }
      
   if(errors.length > 0){
      e.preventDefault()
      error.innerText = errors.join(', ')
      error.style.display = 'block'
   }else{
      successMessage.style.display = 'block'
   }
      
})

