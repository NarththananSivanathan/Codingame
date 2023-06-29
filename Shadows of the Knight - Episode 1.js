/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const W = parseInt(inputs[0]); // width of the building.
 const H = parseInt(inputs[1]); // height of the building.
 const N = parseInt(readline()); // maximum number of turns before game over.
 var inputs = readline().split(' ');
 const X0 = parseInt(inputs[0]);
 const Y0 = parseInt(inputs[1]);
 console.error(W,H,N,X0,Y0)
 var currentX = X0;
 var currentY = Y0;
 var heightMin = 0;
 var heightMax = H;
 var widthMin = 0;
 var widthMax = W;
 
 console.error(currentX, currentY)
 // game loop
 while (true) {
     const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
 
     // Write an action using console.log()
     // To debug: console.error('Debug messages...');
     console.error(isMustVerticalMovedUp(bombDir))
     console.error(isMustVerticalMovedDown(bombDir))
     console.error(isMustHorizontalMovedLeft(bombDir))
     console.error(isMustHorizontalMovedRight(bombDir))
     // the location of the next window Batman should jump to.
 
     if (isMustVerticalMovedUp(bombDir) && isMustHorizontalMovedLeft(bombDir)){
         heightMin = heightMin;
         heightMax = currentY;
         widthMin = widthMin;
         widthMax = currentX;
         currentX = Math.floor(((widthMax-widthMin)/2)+widthMin);
         currentY = Math.floor(((heightMax-heightMin)/2)+heightMin);
     }
     if (isMustVerticalMovedUp(bombDir) && isMustHorizontalMovedRight(bombDir)){
         heightMin = heightMin;
         heightMax = currentY;
         widthMin = currentX;
         widthMax = widthMax;
         currentX = Math.floor(((widthMax-widthMin)/2)+widthMin);
         currentY = Math.floor(((heightMax-heightMin)/2)+heightMin);
     }
     if (isMustVerticalMovedDown(bombDir) && isMustHorizontalMovedLeft(bombDir)){
         heightMin = currentY;
         heightMax = heightMax;
         widthMin = widthMin;
         widthMax = currentX;
         currentX = Math.floor(((widthMax-widthMin)/2)+widthMin);
         currentY = Math.floor(((heightMax-heightMin)/2)+heightMin);
     }
     if (isMustVerticalMovedDown(bombDir) && isMustHorizontalMovedRight(bombDir)){
         heightMin = currentY;
         heightMax = heightMax;
         widthMin = currentX;
         widthMax = widthMax;
         currentX = Math.floor(((widthMax-widthMin)/2)+widthMin);
         currentY = Math.floor(((heightMax-heightMin)/2)+heightMin);
     }
     if (((isMustVerticalMovedUp(bombDir) == false) && (isMustVerticalMovedDown(bombDir) == false)) && (isMustHorizontalMovedLeft(bombDir))){
         heightMin = currentY;
         heightMax = currentY;
         widthMin = widthMin;
         widthMax = currentX;
         currentX = Math.floor(((widthMax-widthMin)/2)+widthMin);
     }
     if (((isMustVerticalMovedUp(bombDir) == false) && (isMustVerticalMovedDown(bombDir) == false)) && (isMustHorizontalMovedRight(bombDir))){
         heightMin = currentY;
         heightMax = currentY;
         widthMin = currentX;
         widthMax = widthMax;
         currentX = Math.floor(((widthMax-widthMin)/2)+widthMin);
     }
     if (((isMustHorizontalMovedLeft(bombDir) == false) && (isMustHorizontalMovedRight(bombDir) == false)) && (isMustVerticalMovedUp(bombDir))){
         widthMin = currentX;
         widthMax = currentX;
         heightMin = heightMin
         heightMax = currentY;
         currentY = Math.floor(((heightMax-heightMin)/2)+heightMin);
     }
     if (((isMustHorizontalMovedLeft(bombDir) == false) && (isMustHorizontalMovedRight(bombDir) == false)) && (isMustVerticalMovedDown(bombDir))){
         widthMin = currentX;
         widthMax = currentX;
         heightMin = currentY;
         heightMax = heightMax;
         currentY = Math.floor(((heightMax-heightMin)/2)+heightMin);
     }
         
     
 
     console.error(currentX.toString()+" "+currentY.toString())
     console.log(currentX.toString()+" "+currentY.toString());
 }
 function isMustVerticalMovedUp(bombDir){
     return bombDir.includes("U")   
 }
 function isMustVerticalMovedDown(bombDir){
     return bombDir.includes("D")    
 }
 function isMustHorizontalMovedLeft(bombDir){
     return bombDir.includes("L")   
 }
 function isMustHorizontalMovedRight(bombDir){
     return bombDir.includes("R")    
 }
