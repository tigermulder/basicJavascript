function main(){
  console.log(this)
}

const object1 = {
  name : 'park',
  main : main
}
const object2 = {
  name : 'kim',
  main : main
}
object1.main()