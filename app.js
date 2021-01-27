if (confirm("Shall I show to you our product?")) {
    document.write("we have the following product:" ,"TV","phones","laptop");
} else {
    document.write("OK, you won't to show our product");
}

var verOfYourTv=prompt("which page  do you want to show?","tv,phones,laptop")
//console.log(verOfYourTv)
if (verOfYourTv=='tv')
{

alert('you choose a TVs page')
} 
else if(verOfYourTv=='phones')
{
    
    alert('you want to show phone page')
}
else if (verOfYourTv=='laptop')
{

alert('you want to show laptop page')
}
else
{
    alert('you must choose again!!!')
}
document.write('<h2>','last modified today by hala','</h2>');