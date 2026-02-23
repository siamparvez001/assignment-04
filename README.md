1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans:
getElementById → always returns one element
getElementsByClassName → returns a live HTMLCollection (auto updates if DOM changes)
querySelector → always returns one element (first match)
querySelectorAll → returns a static NodeList (does NOT auto update if DOM changes)

The big difference is live vs static —
getElementsByClassName is live, meaning if you add a new element to the DOM, the list automatically updates.
querySelectorAll is static, meaning the list stays the same even if you add new elements later.


2.How do you create and insert a new element into the DOM?
Ans:
Two steps — create it, then insert it.
Step 1 — Create the element
const newDiv = document.createElement('div');
newDiv.innerText = 'Hello!';
Step 2 — Insert it
parent.appendChild(newDiv);
parent.prepend(newDiv);
parent.insertBefore(newDiv, specificElement);

3.What is Event Bubbling? And how does it work?
Ans: When you click on an element, the event travels upward to every 
parent element automatically.
So if you click a button inside a div, the click event fires on the button 
first, then the div, then the body, then the html — all the way up.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans:
Instead of adding event listeners to each child element, you add one 
listener on the parent and catch all events from children there.
It's useful because, If you have 100 list items, you don't need 100 
listeners. Just one on the parent. And , f you dynamically add new 
elements later, they automatically work too without adding a new listener.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:
The difference is about what each one stops.
preventDefault()==stops the browser’s default action (like submitting a form or following a link), but the event still propagates.
stopPropagation()==stops the event from bubbling or capturing through the DOM, but the default browser action still happens.

So basically: preventDefault = stops default action, stopPropagation = stops event propagation.

