
function spacer(exNum) {
      console.log(`\nExercise: ${exNum}`);

}

//1. Makin Bacon
/*Create a function named `moreContent` that will initiate the button after clicking on it.

The function will add the following content inside the paragraph with the id of `more`.
*/

var button = document.getElementById('one');
var pElem = document.getElementById('more');

var bacon = "Shoulder turducken brisket, kevin swine andouille tri-tip salami tail ham sausage pork loin. Ribeye short loin rump kielbasa pork. Capicola short loin turducken corned beef tongue, chuck leberkas salami frankfurter. Kielbasa fatback pancetta, ground round meatball turducken jowl ribeye alcatra sirloin bacon corned beef beef ribs short loin. Pork belly spare ribs biltong corned beef meatball short ribs tongue alcatra swine drumstick. Biltong shankle kevin, cupim sirloin bresaola brisket. Tail pork belly biltong ball tip tri-tip, pig jerky cow pastrami prosciutto ;ground round bacon capicola tongue meatball.";

var contentShowing = false;

function moreContent() {
      if (contentShowing === false) {
            contentShowing = true;
            button.innerHTML = 'Read Less';
            pElem.innerHTML = bacon;

      }else if (contentShowing === true) {
            contentShowing = false;
            button.innerHTML = 'Read More';
            pElem.innerHTML = '';

      }

}

//2. HTTP
/*Create a function named `lessContent` that will initiate the `Show Less` link after clicking on it.

The function will hide the contents in the pargraph with the id of `less` after clicking on the `Show Less` link.*/

var description = 'VHS wayfarers brooklyn church-key edison bulb, cred helvetica heirloom chillwave lomo ennui. Lomo heirloom fap jianbing, selfies gastropub you probably haven\'t heard of them. Austin godard ugh, portland stumptown kale chips taxidermy four dollar toast gastropub gochujang bicycle rights fanny pack microdosing. Kinfolk tousled 8-bit, keytar portland 3 wolf moon typewriter.';

buttonLess = document.getElementById('noMore');
pLess = document.getElementById('less');
contentShowingLess = true;

function lessContent() {
      if (contentShowingLess === false) {
            contentShowingLess = true;
            buttonLess.innerHTML = 'Show Less';
            pLess.innerHTML = description;

      } else if (contentShowingLess === true) {
            contentShowingLess = false;
            buttonLess.innerHTML = 'Show More'
            pLess.innerHTML = '';

      }

}


//3. Tacocat, The Original Palindrome King
/*Create a function named `zoom` that will increase the font size of the paragraph with the id of `biggie` after hovering your mouse over it. Increase the font size to 150%*/

var pBiggie = document.getElementById('biggie');

pBiggie.addEventListener('mouseleave', unZoom);

 function zoom() {
      pBiggie.style.fontSize = '150%';

}

function unZoom() {
      pBiggie.style.fontSize = '20px';
}

//4. McDonalds
/*Create a variable name menuItems and assign it an array of three of your favorite items at McDonald's.

Next, create a function named valueMenu that will display your favorite items in the paragraph the the id of `menu` after clicking on the showMenu paragraph.*/

var pMenu = document.getElementById('menu');
var menuItems = [ 'Quarter-Pounder', 'Large Fries', 'Large Coke' ];

function valueMenu() {
      const joinedMenu = menuItems.join(', ');
      console.log(joinedMenu);

      pMenu.innerHTML = joinedMenu;

}

//5. Gin.
/*Create a function named redFace that will change the paragraph text to red and a font size of 30px after clicking on the text.*/

var pGin = document.getElementById('drink');
var pGinBefore = {
      color: 'black',
      fontSize: '20px',

}
var pGinConfig = {
      color: 'red',
      fontSize: '30px',

}
var colorChangedGin = false;

function redFace() {
      if (colorChangedGin === false) {
            colorChangedGin = true;
            pGin.style.color = pGinConfig.color;
            pGin.style.fontSize = pGinConfig.fontSize;

      } else if (colorChangedGin === true) {
            colorChangedGin = false;
            pGin.style.color = pGinBefore.color;
            pGin.style.fontSize = pGinBefore.fontSize;

      }

}

//6. Peanut Butter Cup Oreos
/*Create a function `showPrice` that will add the price of `$5.55` inside the paragraph with the id `price` after hovering your mouse over the paragraph.*/

var pPrice = document.getElementById('price');
var priceShowing = false;

function showPrice() {
      pPrice.innerHTML = '$ 5.55';

}

function removePrice() {
      pPrice.innerHTML = '';

}

//7. Mr. Buttons
/*Add an Event Listener to the button that will display `myQuote` inside the paragraph with the id of `displayQuote` after the button is clicked.*/

var myQuote = "Our lives are defined by opportunities; even the ones we miss.";
var buttonQuote = document.getElementById('Benjamin');
var pQuote = document.getElementById('displayQuote');

buttonQuote.addEventListener('click', function() {
      if (pQuote.innerHTML === '') {
            pQuote.innerHTML = myQuote;

      } else if (pQuote.innerHTML === myQuote) {
            pQuote.innerHTML = '';

      }

});

//8. Say It again, Randomly
/*Create a function that will generate a random quote from the variable below after clicking on the button.*/

var quotes = ["It's a funny thing about comin' home. Looks the same, smells the same, feels the same. You'll realize what's changed is you.", "Momma? Momma? Some days, I feel different than the day before.", "Some people, were born to sit by a river. Some get struck by lightning. Some have an ear for music. Some are artists. Some swim. Some know buttons. Some know Shakespeare. Some are mothers. And some people, dance.", "For what it's worth, it's never too late to be whoever you want to be."];
var buttonRandom = document.getElementById('random');
var pQuotes = document.getElementById('displayQuotes');

// My attempt at making sure quotes aren't repeated. Doesn't work.
function randomQuote() {
      var lastQuote;
      var chooseNewQuote =  Math.floor( Math.random() * quotes.length );
      // alert(`${chooseNewQuote} ${quotes[chooseNewQuote]}`);
      if (pQuotes.innerHTML !== lastQuote) {
            pQuotes.innerHTML = quotes[chooseNewQuote];
            lastQuote = quotes[chooseNewQuote];
      } else {


      }

}

buttonRandom.addEventListener('click', randomQuote );

//9. Unlock the Secret to Financial Freedom
/*Create an event listener that will show and hide the message when clicking on the button.
*/

var buttonSecret = document.getElementById('showHide');
var pMoney = document.getElementById('showmoney');

buttonSecret.addEventListener('click', function() {
      // After looking at the inspector, the display property for showmoney was crossed out. This must be the missing element.
      if (pMoney.style.display !== 'block') {
            pMoney.style.display = 'block';
      } else {
            pMoney.style.display = 'none';
      }

})
