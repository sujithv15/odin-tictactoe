const GameBoard = {
    board : [
        [[],[],[]],
        [[],[],[]],
        [[],[],[]]
        ],

};

function createPlayer(name) {
    return {
        name,
        playerId: '',
        score: 0
    }
}

    // checks board for wins and returns X or O if found
function checkWins(board) {
        // all combinations of possible wins
    const wins = [
        [[[0][0]], [[1][0]], [[2][0]]],
        [[[0][1]], [[1][1]], [[2][1]]],
        [[[0][2]], [[1][2]], [[2][2]]],
        [[[0][0]], [[1][1]], [[2][2]]],
        [[[0][2]], [[1][1]], [[2][0]]],
        [[[0][0]], [[0][1]], [[0][2]]],
        [[[1][0]], [[1][1]], [[1][2]]],
        [[[2][0]], [[2][1]], [[2][2]]],
    ]
    let i = 0;
    while (i < wins.length) {
        if (board[wins[i][0]] === board[wins[i][1]] && board[wins[i][1]] === board[wins[i][2]]) {
            return board[wins[i][0]];
        }
    }
    return '';
}