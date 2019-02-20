const assert=require('assert')
const {sum}=require('../src/sum.js')

it('should return true',()=>{

    let x=sum(1,2)

    assert.equal(x,3)
})