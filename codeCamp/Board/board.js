/**
 * totalPage : 총 게시글 수
 * page_num  : 한 페이지 당 출력되는 게시글 갯수
 * block_num : 한번에 출력될 수 있는 최대 블록 수
 * total_block : 블럭의 총 수
 * current_block : 현재 블록 위치
 * data : 게시글 데이터를 담고 있는 객체 배열
 * post_data_print(block) : 게시글 데이터 출력하기 / 매개변수 : 선택 블럭
 * block_print(front_block) : 블럭 출력하기 / 매개변수 : 가장 앞에 오는 블럭 
 */

//  총 게시글 수
let totalPage = 1000;
//  한 페이지당 출력되는 게시글 갯수
let page_num =20;
//  한번에 출력될 수 있는 최대 블록 수
// ex) [1][2][3][4][5] -> 블록
let block_num = 10;
// 블록의 총 수를 계산한다
let total_block = totalPage%20 == 0 ? totalPage/20 : totalPage/20+1;