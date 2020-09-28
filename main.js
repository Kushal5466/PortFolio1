const name = document.getElementById('name');
const email = document.getElementById('email');
const number = document.getElementById('Number');
const submit = document.getElementById('submit');
function clicked(e)
{
    e.preventDefault();
    const key = name.value;
    const value = email.value;
    const num = number.value;
    console.log(key);
    console.log(value);
    console.log(num);
    

if(key && value)
{
    localStorage.setItem(key,value);
}
 window.location.href="/s.html";
   return false;
};
