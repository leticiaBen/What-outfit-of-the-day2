console.log('hello');
let prc1 = document.getElementById('price-1').innerHTML;
let prc2 = document.getElementById('price-2').innerHTML;
let prc3 = document.getElementById('price-3').innerHTML;
let prc4 = document.getElementById('price-4').innerHTML;
let prc5 = document.getElementById('price-5').innerHTML;
let prc6 = document.getElementById('price-6').innerHTML;
let prc7 = document.getElementById('price-7').innerHTML;
let prc8 = document.getElementById('price-8').innerHTML;
let prc9 = document.getElementById('price-9').innerHTML;
const cnst1 = '<li class="cart" id="prd1"><h1 class="np">Bag</h1></li>';
const cnst2 = '<li class="cart" id="prd2"><h1 class="np">Sneakers</h1></li>';
const cnst3 = '<li class="cart" id="prd3"><h1 class="np">Black boots</h1></li>';
const cnst4 = '<li class="cart" id="prd4"><h1 class="np">Belt</h1></li>';
const cnst5 = '<li class="cart" id="prd5"><h1 class="np">Turtlenecks</h1></li>';
const cnst6 = '<li class="cart" id="prd6"><h1 class="np">Kimono</h1></li>';
const cnst7 = '<li class="cart" id="prd7"><h1 class="np">Bag+Mules</h1></li>';
const cnst8 = '<li class="cart" id="prd8"><h1 class="np">Skirt</h1></li>';
const cnst9 = '<li class="cart" id="prd9"><h1 class="np">earring</h1></li>';
const bnt1 = document.querySelector('.bnt1');
const bnt2 = document.querySelector('.bnt2');
const bnt3 = document.querySelector('.bnt3');
const bnt4 = document.querySelector('.bnt4');
const bnt5 = document.querySelector('.bnt5');
const bnt6 = document.querySelector('.bnt6');
const bnt7 = document.querySelector('.bnt7');
const bnt8 = document.querySelector('.bnt8');
const bnt9 = document.querySelector('.bnt9');
const pbtn1 = document.querySelector('.pbtn1');
const pbtn2 = document.querySelector('.pbtn2');
const pbtn3 = document.querySelector('.pbtn3');
const pbtn4 = document.querySelector('.pbtn4');
const pbtn5 = document.querySelector('.pbtn5');
const pbtn6 = document.querySelector('.pbtn6');
const pbtn7 = document.querySelector('.pbtn7');
const pbtn8 = document.querySelector('.pbtn8');
const pbtn9 = document.querySelector('.pbtn9');
var total;

function add(c, p, b, r, i) {
	var pt = 0;
	var addhere = document.querySelector('.add-here');
	var total = document.getElementById('total').innerHTML;
	var pt = Number(total);
	var e = Number(p);
	pt += e;
	ell = document.createElement('div');
	ell.setAttribute('id', i);
	ell.innerHTML = c;
	addhere.append(ell);
	document.getElementById('total').innerHTML = pt;
	b.style.display = 'none';
	r.style.display = 'block';
}

bnt1.addEventListener('click', function() {
	add(cnst1, prc1, bnt1, pbtn1, 1);
});
bnt2.addEventListener('click', function() {
	add(cnst2, prc2, bnt2, pbtn2, 2);
});
bnt3.addEventListener('click', function() {
	add(cnst3, prc3, bnt3, pbtn3, 3);
});
bnt4.addEventListener('click', function() {
	add(cnst4, prc4, bnt4, pbtn4, 4);
});
bnt5.addEventListener('click', function() {
	add(cnst5, prc5, bnt5, pbtn5, 5);
});
bnt6.addEventListener('click', function() {
	add(cnst6, prc6, bnt6, pbtn6, 6);
});
bnt7.addEventListener('click', function() {
	add(cnst7, prc7, bnt7, pbtn7, 7);
});
bnt8.addEventListener('click', function() {
	add(cnst8, prc8, bnt8, pbtn8, 8);
});
bnt9.addEventListener('click', function() {
	add(cnst9, prc9, bnt9, pbtn9, 9);
});

// remove-part
function rev(p, b, r, i) {
	var pt = 0;
	var total = document.getElementById('total').innerHTML;
	var pt = Number(total);
	var e = Number(p);
	pt -= e;
	document.getElementById(i).remove();
	document.getElementById('total').innerHTML = pt;
	b.style.display = 'block';
	r.style.display = 'none';
}
pbtn1.addEventListener('click', function() {
	rev(prc1, bnt1, pbtn1, 1);
});
pbtn2.addEventListener('click', function() {
	rev(prc2, bnt2, pbtn2, 2);
});
pbtn3.addEventListener('click', function() {
	rev(prc3, bnt3, pbtn3, 3);
});
pbtn4.addEventListener('click', function() {
	rev(prc4, bnt4, pbtn4, 4);
});
pbtn5.addEventListener('click', function() {
	rev(prc5, bnt5, pbtn5, 5);
});
pbtn6.addEventListener('click', function() {
	rev(prc6, bnt6, pbtn6, 6);
});
pbtn7.addEventListener('click', function() {
	rev(prc7, bnt7, pbtn7, 7);
});
pbtn8.addEventListener('click', function() {
	rev(prc8, bnt8, pbtn8, 8);
});
pbtn9.addEventListener('click', function() {
	rev(prc9, bnt9, pbtn9, 9);
});
