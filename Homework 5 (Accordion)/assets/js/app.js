const accordionContent = document.querySelectorAll('.accordion-content');

accordionContent.forEach((item, index) => {
  let header = item.querySelector('.header');
  header.addEventListener('click', () => {
    item.classList.toggle('open');

    let description = item.querySelector('.description');
    if (item.classList.contains('open')) {
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
    } else {
      description.style.height = '0px';
      item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    }
    removeOpen(index);
  });
});

function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove('open');
      let descr = item2.querySelector('.description');
      descr.style.height = '0px';
      item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
    }
  });
}






function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}


function findElementsInString(str, arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (str.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

const str = "En yaxsi tapsiriqlari Maqsud yazir . Etiraz eden varsa cixsin bura";
const arr = ["yaxsi", "Maqsud", "Etiraz", "varsa", "bura"];
const result = findElementsInString(str, arr);
console.log(result); 




