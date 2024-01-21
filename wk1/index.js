console.log("Buffer is a global object in Node.js")
console.log(__dirname)
console.log(__filename)

//buffer
const buffer = Buffer.from("Hey!") 
//var b = new Buffer("Hey!")

console.log(buffer)
console.log(buffer.toString())
console.log(buffer.toJSON())


console.log(buffer[0])
console.log(buffer[1])
console.log(buffer[12])
console.log(buffer[13])

const buff1 = Buffer.alloc(8)// can keep garbage value
const buff2 = Buffer.allocUnsafe(8)///can not keep garbage value
console.log(buff1)
console.log(buff2)

console.log(buffer.toString('utf8', 2, 5))

const str ="HHH"
const buff3 = Buffer.from(str)
console.log(buff3)
console.log(buff3.length)
console.log(buff3.toString())
console.log(buffer.toString('utf8', 0, 4))
console.log(buffer.toString('utf8', 8, 12))

for(c of buffer.entries()){
    console.log(c)
}

const buf4 = Buffer.alloc(5,'A')
console.log(buf4.toString())
console.log(buff3.toString())
console.log(buff2.toString())

const buf5 = Buffer.from('AAAAA')
console.log(buf5.compare(buf4))
console.log(buf5.equals(buf4))

const a = [buf5,buf4]

console.log(a)