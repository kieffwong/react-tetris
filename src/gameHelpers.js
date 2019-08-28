export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
Array.from(Array(STAGE_HEIGHT), () =>
new Array(STAGE_WIDTH).fill([0, 'clear'])
)

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
for (let y = 0; y < player.tetromino.length; y += 1){
    for (let x = 0; x < player.tetromino[y].length; x +=1 ){
        //Check that we're on an actual Tetromino cell
    if (player.tetromino[y][x] !== 0){
        if (
        //Check the move is inside the stage area
        !stage[y + player.pos.y + moveY] ||
        //check is not go through the bottom
        !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
        //check the move inside the width
        stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
        //check the cell we are moving is not set to clean
        ) {
            return true;
        }
    }
    }
} 
}