function funcParamDest({ ...obj }) {
  const { name, age } = obj;
  console.log(name);
  console.log(age);
}
