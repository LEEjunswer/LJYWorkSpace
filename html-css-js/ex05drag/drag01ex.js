// 처음 드래그 요소가 위치하고 있는 좌측 박스 영역
const container = document.querySelector(".container");

container.addEventListener("dragenter", (e) => {
  e.preventDefault();
  //console.log(e);
  console("드래그 요소가 '첫' 번째 박스 영역에 최초로 진입했을 때");
});
container.addEventListener("dragleave", (e) => {
  e.preventDefault();
  //console.log(e);
  console("드래그 요소가 '첫' 번째 박스 영역을 떠나면 발생하는 이벤트");
});

// 드래그 요소가 이동하여 위치할 우측 박스 영역
const container2 = document.querySelector(".container2");

container2.addEventListener("dragenter", (e) => {
  e.preventDefault();
  //console.log(e);
  console("드래그 요소가 '두' 번째 박스 영역에 최초로 진입했을 때");
});
container2.addEventListener("dragleave", (e) => {
  e.preventDefault();
  //console.log(e);
  console("드래그 요소가 '두' 번째 박스 영역을 떠나면 발생하는 이벤트");
});