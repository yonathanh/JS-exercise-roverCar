// Rover Object Goes Here
// ======================
var row = 10; //size of the y axile
var column = 10; //size of the x axile
var grid = [], b;
var travelLog =([]);

//fill in the grid (row * culumn) with null
for (i = 0; i < row; i++) {
  for (j = 0, b = []; j < column; j++) {
    b.push(null);
  }
  grid.push(b);
}

//console.log(grid);
/*
//prints the grid in txt format
var gridText='';
        for ( y = 0; y < grid.length; y++) {
            for ( x = 0; x < grid[y].length; x++) {
                gridText+=grid[y][x]+' ';
            }
            console.log(gridText);
            gridText='';
        }
*/

//default start position of the Rover with a direction symble of "N", "S", "E", or "W".
var roverDirection = ["N", "E", "S", "W"];
var rover = "N";
grid[0][0] = rover;
travelLog.push(checkRoverPosition (grid)); //log of initial positon

// ======================
function turnLeft(car){
  var index = 0;

  // check need to restart index, if last number 
  if (roverDirection.indexOf(car) === 0){
   index = roverDirection.length-1;
  }
  else{
    index = roverDirection.indexOf(car)-1;
  }

  console.log("turnLeft was called!");
  console.log("Previus direction ",car);
  rover = roverDirection[index];
  console.log("New Direction ",rover);

    var coordinates = checkRoverPosition (grid);
    var xCoordinat = coordinates[0];
    var yCoordinat = coordinates[1];
    grid[yCoordinat][xCoordinat]=rover;
    
}

function turnRight(car){
  var index = 0;

  // check need to restart index, if last number 
  if (roverDirection.indexOf(car) === (roverDirection.length-1)){
   index = 0;
  }
  else{
    index = roverDirection.indexOf(car)+1;
  }
  
  console.log("turnRight was called!");
  console.log("Previus direction ",car);
  rover = roverDirection[index];
  console.log("New Direction ",rover);

    var coordinates = checkRoverPosition (grid);
    var xCoordinat = coordinates[0];
    var yCoordinat = coordinates[1];
    grid[yCoordinat][xCoordinat]=rover;

 
}


// function returns the coordinates of the rover
function checkRoverPosition (grid){

  var xCoordinat = 0;
  var yCoordinat = 0;

  for ( y = 0; y < grid.length; y++) {
      for ( x = 0; x < grid[y].length; x++) {
        
        if (grid[y][x] != null){
          xCoordinat = x ;
          yCoordinat = y ;
         }
     }  
 }
      //console.log(xCoordinat);
      //console.log(yCoordinat);
      return [xCoordinat, yCoordinat];

}

//function that checkes if rover postions is on grid
function testIfRoverleavesGrid(testie){

  if((testie < 0)||(testie >= column)||(testie >= row)){
    false;
  }
  else{return true;}
  
  }
  
  function moveForward(rover){
  
    console.log("moveForward was called");
  
    console.log("old position ", checkRoverPosition (grid));
  
    var coordinates = checkRoverPosition (grid);
    var xCoordinat = coordinates[0];
    var yCoordinat = coordinates[1];
  
    switch(rover) {
      case "N":
         if(testIfRoverleavesGrid(yCoordinat-1)){
            grid[yCoordinat-1][xCoordinat]=rover;
            grid[yCoordinat][xCoordinat]=null;
            console.log("new posetion ", checkRoverPosition (grid));
            travelLog.push(checkRoverPosition (grid));
            }
        else {
            console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
          }
          break;
      case "S":
          if(testIfRoverleavesGrid(yCoordinat+1)){
            grid[yCoordinat+1][xCoordinat]=rover;
            grid[yCoordinat][xCoordinat]=null;
            console.log("new posetion ", checkRoverPosition (grid));
            travelLog.push(checkRoverPosition (grid));
            }
          else {
              console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
            }
            break;
      case "E":
          if(testIfRoverleavesGrid(xCoordinat+1)){
            grid[yCoordinat][xCoordinat+1]=rover;
            grid[yCoordinat][xCoordinat]=null;
            console.log("new posetion ", checkRoverPosition (grid));
            travelLog.push(checkRoverPosition (grid));
            }
          else {
              console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
            }
          break;
      case "W":
          if(testIfRoverleavesGrid(xCoordinat-1)){
            grid[yCoordinat][xCoordinat-1]=rover;
            grid[yCoordinat][xCoordinat]=null;
            console.log("new posetion ", checkRoverPosition (grid));
            travelLog.push(checkRoverPosition (grid));
            }
          else {
              console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
            }
          break;
        } 
      
      }

function moveBackward(rover){
  
    console.log("moveBackward was called");
  
    console.log("old position ", checkRoverPosition (grid));
  
    var coordinates = checkRoverPosition (grid);
    var xCoordinat = coordinates[0];
    var yCoordinat = coordinates[1];
  
  switch(rover) {
    case "N":
        if(testIfRoverleavesGrid(yCoordinat+1)){
        grid[yCoordinat+1][xCoordinat]=rover;
        grid[yCoordinat][xCoordinat]=null;
        console.log("new posetion ", checkRoverPosition (grid));
        travelLog.push(checkRoverPosition (grid));
        }
        else {
          console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
        }
        break;
    case "S":
        if(testIfRoverleavesGrid(yCoordinat-1)){
        grid[yCoordinat-1][xCoordinat]=rover;
        grid[yCoordinat][xCoordinat]=null;
        console.log("new posetion ", checkRoverPosition (grid));
        travelLog.push(checkRoverPosition (grid));
        }
        else {
          console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
        }
        break;
    case "E":
        if(testIfRoverleavesGrid(xCoordinat-1)){
        grid[yCoordinat][xCoordinat-1]=rover;
        grid[yCoordinat][xCoordinat]=null;
        console.log("new posetion ", checkRoverPosition (grid));
        travelLog.push(checkRoverPosition (grid));
        }
        else {
          console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
        }
        break;
    case "W":
        if(testIfRoverleavesGrid(xCoordinat+1)){
        grid[yCoordinat][xCoordinat+1]=rover;
        grid[yCoordinat][xCoordinat]=null;
        console.log("new posetion ", checkRoverPosition (grid));
        travelLog.push(checkRoverPosition (grid));
        }
        else {
          console.log("sorry this direction is off the grid, Please add to grid size or change Direction");
        }
        break;
      } 
    
    }
  
function exe(commands){

  for (i = 0; i < commands.length; i++) {
        console.log(commands[i]);

if (commands[i] === "l") {
    turnLeft(rover);
} else if (commands[i] === "r") {
    turnRight(rover);
} else if (commands[i] === "b") {
    moveBackward(rover);
} 
else if (commands[i] === "f") {
    moveForward(rover);
}
else {
    console.log("worng input");
}

  }
}

var theCommands ="rfffbbffsjllb";
console.log(theCommands.length,"Commands");
exe(theCommands);

console.log("new grid ")
  //prints the grid in txt format
  var gridText='';
          for ( y = 0; y < grid.length; y++) {
              for ( x = 0; x < grid[y].length; x++) {
                  gridText+=grid[y][x]+' ';
              }
              console.log(gridText);
              gridText='';
          }

          console.log(" this is the travel log ", travelLog);


