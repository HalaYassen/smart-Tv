if (confirm("Shall I show to you our product?")) {
    document.write("<h2>","we have the following product:"+"<br>"+"TV"+"<br>"+"PHONE"+"<br>"+"LAPTOP","</h2>");
} else {
    document.write("OK, you won't to show our product");
}
document.write("<br>");
/*var verOfYourTv=prompt("which page  do you want to show?","tv,phones,laptop")
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
document.write('<h2>','last modified today by hala','</h2>');*/
function Message() {
    var mess='';
    var itt = prompt('what item you want ?');

    if (itt=='tv') {
        message = 'hello in tv page';

    } else if (itt =='phone') {
        message = 'hello in phone page';
    } else if (itt== 'laptop') {
        message = 'hello in laptop page';
    } else {
        mess = 'you must choose at least one item'
    }
    return document.write('<h3>' + message + '</h3>');
}
Message();

function getItem()
{
    var yourOrder =prompt("what do you want to buy?? please selesct 1-tv 2-phone 3-laptop");
while(yourOrder!=='tv'&& yourOrder!=='phone'&&yourOrder!=='laptop')
{
    yourOrder=prompt("please select tv or phone or laptop only");
}
var yourItem ='';
console.log(yourItem);
if (yourOrder=='tv')
{
    yourItem='<img src="ImageOfItems/tvs.jpg" width="400" height="200"/>';
}
else if (yourOrder=='phone')
{ 
    yourItem='<img src="ImageOfItems/phone.jpg" width="400" height="200"/>';
}
else if (yourOrder=='laptop')
{
    yourItem='<img src="ImageOfItems/laptop.jpg" width="400" height="200"/>';
}

    else {
        yourItem=prompt("you didn\'t select any items");
    }
    var result='';
    //result =yourItem;
   
    var numOfItem=prompt("how many items do you want to buy?!");
    for(var i=0;i<numOfItem;i++)
    {
        document.write(yourItem);
    }
}
getItem();

   