/* Pseudocode
grid = [ [1, 0, 1], [0, 0, 1], [1, 0, 0] ]
int numIslans(char[][] grid){
  grid is not null, and length > 0
  int rows = grid.length
  int columns = grid[0]
  int num_islands = 0

  for (let cur_row = 0; cur_row < rows; cur_row++) {
    for (let cur_column = 0; cur_column < columns; cur_column++) {
      if(grid[cur_row][cur_column] == 1){, find target
        num_islands++
        cur grid mark it that found, grid[cur_row][cur_column] = 0
        new queue
        enqueue the value that position, value = cur_row * columns + cur_column
        while(queue not empty){
          int position = queue.dequeue
          int column = position % columns
          int row = position / columns

          edge condidtion
                              row-1, column
          row, column-1      row, column       row, column+1
                              row+1, column
          if(row-1 >= 0 && grid[row-1][column] == 1)
            that grid mark as 0, and enqueue to find other 1
          if(row+1 < rows && grid[row+1][column] == 1)
            same as
          if(column-1 >= 0 && grid[row][column-1] == 1)
            smae as
          if(column+1 < columns && grid[row][column+1] == 1)
            same as
        }
      }
    }
    return num_islands
  }
}
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if((grid == null) || (grid.length == 0)){
    return 0;
  }
  let rows = grid.length;
  let columns = grid[0].length;
  let num_islands = 0;

  for (let cur_row = 0; cur_row < rows; cur_row++) {
    for (let cur_column = 0; cur_column < columns; cur_column++) {
      if(grid[cur_row][cur_column] == '1'){
        num_islands++;
        grid[cur_row][cur_column] = 0;
        let queue = [];
        queue.push(cur_row * columns + cur_column);
        while(queue.length > 0){
          let position = queue.shift();
          let row = Number.parseInt(position / columns);
          let column = position % columns;

          if(row-1 >= 0 && grid[row-1][column] == '1'){
            grid[row-1][column] = 0;
            queue.push((row-1) * columns + column);
          }
          if(row+1 < rows && grid[row+1][column] == '1'){
            grid[row+1][column] = 0;
            queue.push((row+1) * columns + column);
          }
          if(column-1 >= 0 && grid[row][column-1] == '1'){
            grid[row][column-1] = 0;
            queue.push(row * columns + column-1);
          }
          if(column+1 < columns && grid[row][column+1] == '1'){
            grid[row][column+1] = 0;
            queue.push(row * columns + column+1);
          }
        }
      } 
    }
  }
  return num_islands;
};


let grid = [ [ '1', '1', '1', '1', '0' ],
[ '1', '1', '0', '1', '0' ],
[ '1', '1', '0', '0', '0' ],
[ '0', '0', '0', '0', '0' ] ];

grid = [["1"]];

let num_islands = numIslands(grid);
console.log(num_islands);
