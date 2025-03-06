const { log, error } = require('console');
const fs = require('fs');

// Creaing new file 
// fs.writeFileSync('text.txt', "welcome to Core modules,I am creating file with fs module")

// fs.appendFileSync('text.txt', " \n The appendFileSync method is create, read")

//read to buffer data
// const buffer_data = fs.readFileSync('text.txt');
// console.log(buffer_data.toString())

// change the file name 
// fs.rename('text.tx','readwrite.txt')

// Create a folder anmed it Fsmodule
// fs.mkdirSync('xyz')


//using  mkdir
// const path = require('path')
// fs.mkdir(path.join(__dirname, 'test'),(err)=>{
//     if(err){
//         return console.error(err)
//     }
//     console.log("Directory created successfully!");
// })

//create a file in it named desc.txt and data into it.
// fs.writeFileSync("test/desc.txt", "create a file with writeFileSync method")

//add more data into the file at the end of the exitiing
// fs.appendFileSync('test/desc.txt', "\n update file with using appendFileSync Method")

//Read the data without getting the buffer data at first file encoding
// const withoutBuffer = fs.readFileSync('test/desc.txt', 'utf-8')
// console.log(withoutBuffer)

//now delete both the file and the folder
// fs.unlinkSync('test/desc.txt')  //file delete
// fs.rmdirSync('test')    //Folder delete


// aysnc fs
fs.writeFile('text1.txt',"This method uuse to aysnc way to file create", (err) =>{
    if(err){
        console.error(err)
    }
    console.log("Successfully file created!")
})

//appendFile
fs.appendFile('text1.txt','update data using with asnyc method', (err) =>{
    if(err){
        console.error(err)
    }
    console.log('data is updated successfully!!')
})

//
fs.readFile('text1.txt', 'utf-8',(err, data) => {
    if(err){
        console.error(err)
    }
     console.log(data)
})
