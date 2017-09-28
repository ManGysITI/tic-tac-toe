'use strict';
class TicTacToe {
    constructor() {
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
        this.value = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.value;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] == null)
        {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if(this.value === 'x'){
                this.value = 'o';
            }else{
                this.value = 'x';
            }
        }
    }

    isFinished() {
        if(this.getWinner() !== null || this.isDraw() == true)
            return true;
        return false;
    }

    getWinner() {
        if(this.matrix[0][0] !== null && this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][0] == this.matrix[0][2])
            return this.matrix[0][0];

        else if(this.matrix[1][0] !== null && this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][0] == this.matrix[1][2])
            return this.matrix[1][0];

        else if(this.matrix[2][0] !== null && this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][0] == this.matrix[2][2])
            return this.matrix[2][0];

        else if(this.matrix[0][0] !== null && this.matrix[0][0] == this.matrix[1][0] && this.matrix[0][0] == this.matrix[2][0])
            return this.matrix[0][0];

        else if(this.matrix[0][1] !== null && this.matrix[0][1] == this.matrix[1][1] && this.matrix[0][1] == this.matrix[2][1])
            return this.matrix[0][1];

        else if(this.matrix[0][2] !== null && this.matrix[0][2] == this.matrix[1][2] && this.matrix[0][2] == this.matrix[2][2])
            return this.matrix[0][2];

        else if(this.matrix[0][0] !== null && this.matrix[0][0] == this.matrix[1][1] && this.matrix[0][0] == this.matrix[2][2])
            return this.matrix[0][0];

        else if(this.matrix[0][2] !== null && this.matrix[0][2] == this.matrix[1][1] && this.matrix[0][2] == this.matrix[2][0])
            return this.matrix[0][2];

        else return null;
    }

    noMoreTurns() {
        for(let i = 0; i < 3; i++)
            for(let j = 0; j < 3; j++){
                if(this.matrix[i][j] === null){
                    return false;
                }
            }
        return true;
    }

    isDraw() {
        if( this.getWinner() == null && this.noMoreTurns() == true){
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
