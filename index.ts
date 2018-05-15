interface Matrix {
    data: Array<Array<number>>
}
interface Matrix43 extends Matrix {
    data:   [[number, number, number]
            ,[number, number, number]
            ,[number, number, number]
            ,[number, number, number]]
}
interface Matrix44 extends Matrix {
    data:   [[number, number, number, number]
            ,[number, number, number, number]
            ,[number, number, number, number]
            ,[number, number, number, number]]
}

class Matrix implements Matrix {
    data: Array<Array<number>>
    constructor (data: Array<Array<number>>) {
        this.data = data
    }
}
function mutiple (m1: Matrix, m2: Matrix) : Matrix {
    const rowNumber = m1.data.length
    const columnNumber = m2.data[0].length
    const result:Array<Array<number>> = []
    for (let i = 0; i < rowNumber; i++) {
        for (let j = 0; j < columnNumber; j++) {
            if (j == 0) result.push([0])
            let a = 0
            m1.data[i].forEach((item, row) => {
                // i行 * j列
                a += item * m2.data[row][j]
            })
            result[i][j] = a
        }
    }
    return new Matrix(result)
}

const m1 = new Matrix([ [1, 2],
                        [1, -1]])
const m2 = new Matrix([ [1,2,-3],
                        [-1,1,2]])
