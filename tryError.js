// error in func

function testErrorFunc(a, func) {         
    try {
  func(a);
} catch (e) {
  x = e.name;
}
   

    return x;
}