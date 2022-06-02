function collatz(seedNum) {
  seed = seedNum;
  nums = [];
  steps = 0;
  while (seed != 1) {
    if (seed%2==0){
      seed = seed/2;
    }else{
      seed = seed * 3 + 1;
    } 
      nums.push(seed)
      steps++;
  }
  return {
    hailstones: nums, 
    steps: steps, 
  }
}

function ePop(seed) {
  val = seed;
  if (val % 2==0) {
    val++;
  }else{
    val--;
  }
  return val
}

function sum(array) {
    res = array[0];
        array.slice(1).forEach((v)=>{
      res+=v;
    })
        return res
  }

function average(array) {
  return sum(array) / array.length
}

class Equation {
  constructor(eq) {
    this.eq = eq;
  }
  calculate() {
    return eval(this.eq.replace("^", "**"))
  }
}

function sqr(n) {
  return n**2
}

function even(n) {
  return n%2==0
}


function median(arr) {
  if (!even(arr.length)) {
    middle = arr[Math.round((arr.length - 1) / 2)];
    return middle
  } else {
    throw new Error("List has an even number of items.")
    return
  }
  
  
}

var mode = a => {
  a.sort((x, y) => x - y);

  var bestStreak = 1;
  var bestElem = a[0];
  var currentStreak = 1;
  var currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i-1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
};

class Dataset {
  constructor(DSArray) {
    this.ds = DSArray;
  }
  Median() {
    return median(this.ds);
  }
  Mean() {
    return average(this.ds);
  }

  Mode() {
    return mode(this.ds);
  }
}


function subArray(a) {
  var longArray = a;
   var smallerArrays = []; // will contain the sub-arrays of 10 elements each
   var arraySize = 2;
   for (var i=0;i<Math.ceil(longArray.length/arraySize);i++) {
       smallerArrays.push(longArray.slice(i*arraySize,i*arraySize+arraySize));
   }
   return smallerArrays
}
function fms(e) {
  eq = e
  eq = eq.replaceAll('f(', '<em>f</em>(')
  eq = eq.replaceAll(' / ', ' &#247; ')
  eq = eq.replaceAll('{', '<sup>')
  eq = eq.replaceAll('}', '</sup>')
  return eq
} 

class AlgebraicEquation {
  constructor(expression) {
    this.eq = expression.split(" = ")[0];
    this.ans=Number(expression.split(" = ")[1]);
  }

  solve(start=0, end="5000", varname="x", increment=1) {
    for ( let i = start; i < end; i+=increment ) {
      if (eval(this.eq.replaceAll(varname,i)) == this.ans) {
        return i
      }
    }
    throw new Error("Equation is unsolvable.")
  }
}

function pythag(a,b) {
  return Math.sqrt((a**2 + b**2));
}

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}

JMath = {
  Number(x) {
    return Number(x.toFixed(12))
  },

  isFloat(x) {
      return parseInt(x) === Number(x)
  },

  etr(x) {
    return x.toLocaleString().replaceAll(",","")
  },
  
  addCommas(x) {
    return x.toLocaleString()
  },

  factorialize: factorialize,
  ftpConfig: {
    def: 0,
    am: 50,
    on: false
  },
  formulas: {
    on: false,
    mechanism: "new Function()"
  },

  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
}

let [sin,cos,tan] = [JMath.sin, JMath.cos, JMath.tan]

let [jm, JM, jmath, JMATH, math] = Array(5).fill(JMath)
function formulaToPoints(f,i) {
  let arr = []
  if (!jm.ftpConfig.on) {
    console.table(jm.ftpConfig)
    console.log("jm.ftpConfig.on = true")
    return
  }
  if (typeof f !== "function") {
    console.log("F->Function")
  }
  typeof i !== "number" && console.log("i->Number()")
  for (let v = jm.ftpConfig.def; v<jm.ftpConfig.am; v+=i) {
    arr.push(`(${v}, ${f(v)})`)
  }
  return arr.join(", ")
}

Num = function () {
    return function () {
        return jmath.Number(+(arguments[0]))
    }
}

function formula(variables, eq) {
  if (!jm.formulas.on) {
    console.table(jm.formulas)
    console.log("jm.formulas.on = true")
    console.log("warning: runs code, so dont let user input get in")
    return 
  }
  return new Function(variables, `return ${eq}`)
  
}

class jRange {
  constructor(min,max,inc=1) {
    this.min=min;
    this.max=max;
    this.in=inc;
  }

  has(num) {
    return num >= this.min && num <= this.max
  }

  bet(num) {
    return num > this.min && num < this.max
  }

  use(f) {
    for (let i = this.min-1; i < this.max; i+=this.in) {
      f(i+1)
    }
  }
}
//Num() `0.300000000000004`
