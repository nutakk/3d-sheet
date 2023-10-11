var input = []//input 2d position
var vertexFont = []
var vertexBack = []
var vertexData = []
var z=-0.1
for(let i=0;i<input.length;i++){
    if((i+1)%9==0){
        //same
        vertexFont.push(input[i-8])//1
        vertexFont.push(input[i-7])
        vertexFont.push(input[i-6])

        vertexFont.push(input[i-5])//2
        vertexFont.push(input[i-4])
        vertexFont.push(input[i-3])

        vertexFont.push(input[i-2])//3
        vertexFont.push(input[i-1])
        vertexFont.push(input[i])

        //invert
        vertexFont.push(input[i-8])//4
        vertexFont.push(input[i-7])
        vertexFont.push(input[i-6]-z)

        vertexFont.push(input[i-5])//5
        vertexFont.push(input[i-4])
        vertexFont.push(input[i-3]-z)

        vertexFont.push(input[i-2])//6
        vertexFont.push(input[i-1])
        vertexFont.push(input[i]-z)

        //re1
        vertexBack.push(input[i-8])//1
        vertexBack.push(input[i-7])
        vertexBack.push(input[i-6])

        vertexBack.push(input[i-5])//2
        vertexBack.push(input[i-4])
        vertexBack.push(input[i-3])

        vertexBack.push(input[i-8])//4
        vertexBack.push(input[i-7])
        vertexBack.push(input[i-6]-z)

        vertexBack.push(input[i-8])//4
        vertexBack.push(input[i-7])
        vertexBack.push(input[i-6]-z)

        vertexBack.push(input[i-5])//5
        vertexBack.push(input[i-4])
        vertexBack.push(input[i-3]-z)

        vertexBack.push(input[i-5])//2
        vertexBack.push(input[i-4])
        vertexBack.push(input[i-3])

        //re2
        vertexBack.push(input[i-5])//2
        vertexBack.push(input[i-4])
        vertexBack.push(input[i-3])

        vertexBack.push(input[i-2])//3
        vertexBack.push(input[i-1])
        vertexBack.push(input[i])

        vertexBack.push(input[i-5])//5
        vertexBack.push(input[i-4])
        vertexBack.push(input[i-3]-z)

        vertexBack.push(input[i-5])//5
        vertexBack.push(input[i-4])
        vertexBack.push(input[i-3]-z)

        vertexBack.push(input[i-2])//6
        vertexBack.push(input[i-1])
        vertexBack.push(input[i]-z)

        vertexBack.push(input[i-2])//3
        vertexBack.push(input[i-1])
        vertexBack.push(input[i])

        //re3
        vertexBack.push(input[i-8])//1
        vertexBack.push(input[i-7])
        vertexBack.push(input[i-6])

        vertexBack.push(input[i-2])//3
        vertexBack.push(input[i-1])
        vertexBack.push(input[i])

        vertexBack.push(input[i-8])//4
        vertexBack.push(input[i-7])
        vertexBack.push(input[i-6]-z)

        vertexBack.push(input[i-8])//4
        vertexBack.push(input[i-7])
        vertexBack.push(input[i-6]-z)

        vertexBack.push(input[i-2])//6
        vertexBack.push(input[i-1])
        vertexBack.push(input[i]-z)

        vertexBack.push(input[i-2])//3
        vertexBack.push(input[i-1])
        vertexBack.push(input[i])
    }
}
vertexData=vertexFont.concat(vertexBack)// output 3d position
