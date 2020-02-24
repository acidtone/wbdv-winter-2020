function b() {
	var myVar;
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1;
a();