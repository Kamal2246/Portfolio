let randomize_array = document.querySelector("#randomize_array");
let sort_btn = document.querySelector("#sort_btn");
let bars_container = document.querySelector(".bars_container");
let select_algo = document.querySelector("#algo");
let speed = document.querySelector("#speed");
let slider = document.querySelector("#slider");
let minRange = 1;
let maxRange = slider.value;
let numOfBars = slider.value;
let heightFactor = 4;
let speedFactor = 100;
let unsorted_array = new Array(numOfBars);


document.addEventListener("DOMContentLoaded", function () {
  unsorted_array = createRandomArray();
  renderBars(unsorted_array);
});

slider.addEventListener("input", function () {
  numOfBars = slider.value;
  maxRange = slider.value;
  bars_container.innerHTML = "";
  //console.log(slider.value);
  unsorted_array = createRandomArray();
  renderBars(unsorted_array);
});

function createRandomArray() {
  let array = new Array(numOfBars);
  for (let i = 0; i < numOfBars; i++) {
    array[i] = randomNum(minRange, maxRange);
  }
	//console.log(array);
  return array;
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function renderBars(array) {
  for (let i = 0; i < numOfBars; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * heightFactor + "px";
    bars_container.appendChild(bar);
  }
}

speed.addEventListener("change", (e) => {
  speedFactor = parseInt(e.target.value);
});

let algotouse = "";

select_algo.addEventListener("change", function () {
  algotouse = select_algo.value;
});

randomize_array.addEventListener("click", function () {
  unsorted_array = createRandomArray();
  bars_container.innerHTML = "";
  renderBars(unsorted_array);
});


sort_btn.addEventListener("click", function () {
  switch (algotouse) {
    case "bubble":
      bubbleSort(unsorted_array);
      break;
    case "merge":
      mergesort(unsorted_array,0,unsorted_array.length-1).then(console.log);
      break;
    case "heap":
      HeapSort(unsorted_array);
      break;
    case "insertion":
      insertSort(unsorted_array);
      break;
    case "quick":
      console.log(unsorted_array.length);

      quicksort(unsorted_array, 0, unsorted_array.length - 1);
      break;
    default:
      bubbleSort(unsorted_array);
      break;
  }
});


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        for (let k = 0; k < bars.length; k++) {
          if (k !== j && k !== j + 1) {
            bars[k].style.backgroundColor = "lightsalmon";
          }
        }
        let temp = array[j];
        
        array[j] = array[j + 1];
        array[j + 1] = temp;

        bars[j].style.height = array[j] * heightFactor + "px";
        bars[j].style.backgroundColor = "lightgreen";

        bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";

        await sleep(speedFactor);
      }
    }
    await sleep(speedFactor);
  }
  return array;
}

async function insertSort(array) {
	let bars = document.getElementsByClassName("bar");
	for(let j =1;j<array.length;j++){
		for(let k =0;k<j;k++){
			if(array[j]<array[k]){

				temp = array[k]
				array[k]=array[j]

				bars[k].style.height = array[k] * heightFactor + "px";

				for(let p = j-1; p > k;p--){
						array[p+1]=array[p]


						for (let d = 0; d < bars.length; d++) {
						          if (d !== p && d !== p + 1) {
						            bars[d].style.backgroundColor = "lightsalmon";
						          }
						        }

        		bars[p ].style.height = array[p ] * heightFactor + "px";
        		bars[p ].style.backgroundColor = "lightgreen";
        		bars[p + 1].style.height = array[p + 1] * heightFactor + "px";
        		bars[p + 1].style.backgroundColor = "lightblue";
        		bars[j].style.backgroundColor = "red";
        		await sleep(speedFactor);
				}
				array[k+1] = temp
				bars[k+1].style.height = array[k+1] * heightFactor + "px";
        await sleep(speedFactor);
			}
		}
	}
}

async function quicksort(array, left, right) {
  let bars = document.getElementsByClassName("bar");

  if (left >= right) {
    return;
  }
  let index = await partition(array, left, right, bars);
  
  await quicksort(array, left, index - 1);
  await quicksort(array, index, right);
  return array;
}

async function partition(array, left, right, bars) {
  let piviotIndex = Math.floor((left + right) / 2);
  //console.log("array after piviot :"+array.slice(left, right));

  bars[piviotIndex].style.backgroundColor = "red";
  await sleep(speedFactor);

  let piviot = array[piviotIndex];
  while (left <= right) {
    while (array[left] < piviot) {
      left++;
    }
    while (array[right] > piviot) {
      right--;
    }
    if (left <= right) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;

      bars[left].style.backgroundColor = "lightgreen";
      bars[right].style.backgroundColor = "lightblue";
      await sleep(speedFactor);

      for (let k = 0; k < bars.length; k++) {
          if (k !== left && k !== right && k !== piviotIndex) {
            bars[k].style.backgroundColor = "lightsalmon";
          }
        }

      bars[left].style.height = array[left] * heightFactor + "px";
      bars[right].style.height = array[right] * heightFactor + "px";
      await sleep(speedFactor);
      left++;
      right--;
    }
  }
  return left;
}






async function mergesort(array, start, end){
  
  if(start >= end){ return "Hello"}

    let mid = Math.floor((start + end)/2);
    await sleep(10);
    await mergesort(array, start, mid);
    await mergesort(array, mid+1, end);
    await merge(array, start,mid, end);
  
    return array
}


async function merge(array, start,mid, end){
  let i = start;
  let j = mid+1;
  let k = 0;
  let temp = [];
  let bars = document.getElementsByClassName("bar");
  while(i <= mid && j <= end){
    if(array[i]<=array[j]){
      temp[k] = array[i];
      k++;
      i++; 

    }
    else {
      temp[k] = array[j];
      k++;
      j++; 
    }    
  }
  while(i<=mid){
      temp[k] = array[i];
      k++;
      i++; 

  }
  while(j<=end){
      temp[k] = array[j];
      k++;
      j++; 

  }
  let old_array = array.slice(start,end+1);

  for(i=start;i<=end;i++){

  //  if(i>48){console.log(bars.length)}
    
    
    bars[i].style.backgroundColor = "lightgreen";

    array[i] = temp[i-start];

    let d = old_array.indexOf(temp[i-start])+ start;
    //console.log("d "+d+" i "+i+","+start+ ","+end+"  temp"+temp[i-start]+"  array :"+array.slice(start,end+1));
    bars[d].style.backgroundColor = "lightblue";

    for (let k = 0; k < bars.length; k++) {
          if (k !== i && k !== d) {
            bars[k].style.backgroundColor = "lightsalmon";
          }
        }

    await sleep(speedFactor);


    bars[i].style.height = array[i] * heightFactor + "px";
  
    await sleep(speedFactor);
    for (let k = 0; k < bars.length; k++) {
          { if (k !== d) {
            bars[k].style.backgroundColor = "lightsalmon"; 
          }

          }
        }

    

    

    
  }
  return 
}

