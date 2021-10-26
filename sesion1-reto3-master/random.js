function random(min, max, decimals) {
  let presition = Math.pow(10, decimals);
  min = min * presition;
  max = max * presition;
  return Math.floor(Math.random() * (max - min + 1) + min) / presition;
  //numero = Math.floor(Math.random() * (max - min + 1) + min) / presition;
  //console.log(numero);
}

module.exports = random;
