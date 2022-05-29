function funcs() {
  let a = parseFloat(document.getElementById('ComparativeScore').value)
  let b = parseFloat(document.getElementById('Plot').value)
  let c = parseFloat(document.getElementById('Acting').value)
  let d = parseFloat(document.getElementById('Impact').value)
  let e = parseFloat(document.getElementById('CharacterDevelopment').value)
  let f = parseFloat(document.getElementById('Cinematography').value)
  let g = parseFloat(document.getElementById('Pacing').value)
  let h = parseFloat(document.getElementById('O/C/A').value)
  let i = parseFloat(document.getElementById('Dialogue').value)
  let j = parseFloat(document.getElementById('EditingAndEffects').value)
  let k = parseFloat(document.getElementById('SoundAndMusic').value)
  let l = ((b*0.155)+(c*0.15)+(d*0.12)+(e*0.13)+(f*0.125)+(g*0.11)+(h*0.03)+(i*0.06)+(j*0.06)+(k*0.06))
  let m = ((l*0.8)+(a*0.2))
  let n = (Math.round(l*100))/100
  let o = (Math.round(m*100))/100
  document.getElementById("comparativeScoreOutput").innerHTML = "Comparative Score: "+a+"/100";
  document.getElementById("technicalScoreOutput").innerHTML = "Technical Score: "+n+"/100";
  document.getElementById("totalScoreOutput").innerHTML = "Total Score: "+o+"/100";
}

