const byteSize = (str) => {
  // write your code here
	const encoder = new TextEncoder();
const byteArray = encoder.encode(str);
const sizeInBytes = byteArray.length;
	return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
