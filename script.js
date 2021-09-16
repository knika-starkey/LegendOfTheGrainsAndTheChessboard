let seed = 1;
let sum = 1;
for(let i = 1; i < 64; i++){
    seed *= 2;
    sum += seed;
}
let weight = sum*0.065;
alert(sum + " зерен составляла награда и " + weight + " килограмм зерна мудрец должен был получить");