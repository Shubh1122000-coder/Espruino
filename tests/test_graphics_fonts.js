var font = atob("/4H/AAD/AACPmfEAgZH/APAQ/wDxmY8A/5GfAICA/wD/kf8A8ZH/AA==");
Graphics.prototype.setFontTest = function() {
  this.setFontCustom(font, "0".charCodeAt(0), 4, 8);
}


var g = Graphics.createArrayBuffer(16,16,8);


g.dump = _=>{
  var s = "";
  var b = new Uint8Array(g.buffer);
  var n = 0;
  for (var y=0;y<g.getHeight();y++) {
    s+="\n";
    for (var x=0;x<g.getWidth();x++) 
      s+=b[n++]?"#":".";
  }
  return s;
}
g.print = _=>{
  print("`"+g.dump()+"`");
}
var ok = true;
function SHOULD_BE(a) {
  var b = g.dump();
  if (a!=b) {
    console.log("GOT :"+b+"\nSHOULD BE:"+a+"\n================");
    ok = false;
  }
}


g.clear();
g.setFontVector(15);
g.drawString("4");
SHOULD_BE(`
................
.......##.......
......###.......
.....####.......
....#####.......
....#####.......
...######.......
..###.###.......
..###.###.......
.###..###.......
.##########.....
###########.....
###########.....
......###.......
......###.......
......###.......`);


g.clear();
g.setFont("4x6");
g.drawString("42");
SHOULD_BE(`
.##.##..........
#.#...#.........
#.#..#..........
###.#...........
..#.###.........
................
................
................
................
................
................
................
................
................
................
................`);

g.clear();
g.setFont("4x6",2);
g.drawString("42");
SHOULD_BE(`
..####..####....
..####..####....
##..##......##..
##..##......##..
##..##....##....
##..##....##....
######..##......
######..##......
....##..######..
....##..######..
................
................
................
................
................
................`);

g.clear();
g.setFontCustom(font, "0".charCodeAt(0), 4, 8);
g.drawString("42");
SHOULD_BE(`
#.#.###.........
#.#...#.........
#.#...#.........
###..##.........
..#.##..........
..#.#...........
..#.#...........
..#.###.........
................
................
................
................
................
................
................
................`);

g.clear();
g.setFontCustom(font, "0".charCodeAt(0), 4, 8 + (2<<8));
g.drawString("42");
SHOULD_BE(`
##..##..######..
##..##..######..
##..##......##..
##..##......##..
##..##......##..
##..##......##..
######....####..
######....####..
....##..####....
....##..####....
....##..##......
....##..##......
....##..##......
....##..##......
....##..######..
....##..######..`);

g.clear();
g.setFont("Test",2);
g.drawString("42");
SHOULD_BE(`
##..##..######..
##..##..######..
##..##......##..
##..##......##..
##..##......##..
##..##......##..
######....####..
######....####..
....##..####....
....##..####....
....##..##......
....##..##......
....##..##......
....##..##......
....##..######..
....##..######..`);
//g.print();

result=ok ? 1 : 0;
