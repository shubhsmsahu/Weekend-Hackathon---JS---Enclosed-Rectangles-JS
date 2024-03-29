const { Children } = require("react");
function isInside(a, b) {
	let ans = {};
	let child = {};
	let t1 = a.top ? parseInt(a.top) : 0;
	let b1 = a.bottom ? parseInt(a.bottom) : 0;
	let l1 = a.left ? parseInt(a.left) : 0;
	let r1 = a.right ? parseInt(a.right) : 0;
	let h1 = a.height ? parseInt(a.height) : 0;
	let w1 = a.width ? parseInt(a.width) : 0;

	let t2 = b.top ? parseInt(b.top) : 0;
	let b2 = b.bottom ? parseInt(b.bottom) : 0;
	let l2 = b.left ? parseInt(b.left) : 0;
	let r2 = b.right ? parseInt(b.right) : 0;
	let h2 = b.height ? parseInt(b.height) : 0;
	let w2 = b.width ? parseInt(b.width) : 0;

	if (t2 >= t1 && l2 >= l1 && r2 >= r1 && b2 >= b1) 
	{
	   if ((a.height && 
		(t1 + h1 >= t2 + h2 && b1 + h1 >= b2 + h2) &&
		(l1 + w1 >= l2 + w2 && r1 + w1 >= r2 + w2) )||
		(!a.height)) 
	   	{
			if (a.top) {
				child.top = `${t2 - t1}px`;
			}
			if (a.left) {
				child.left = `${l2 - l1}px`;
			}
			if (a.bottom) {
				child.bottom = `${b2 - b1}px`;
			}
			if (a.right) {
				child.right = `${r2 - r1}px`;
			}
			if (a.height) {
				child.height = `${h2}px`;
				child.width = `${w2}px`;
			}
			return ans = { ...a, children: [{ ...child, children: [] }] };
		}

	}
	return -1;
}
function updateStructure(rec1, rec2) {
	let res = isInside(rec1, rec2);
	if (res !== -1) {
		return res;
	}
	res = isInside(rec2, rec1);
	if (res !== -1) {
		return res;
	}
	return rec1;
}

module.exports = updateStructure;

// //rec = {
// //	top: '25px',
// //	left: '96px',
// //	width: '64px',
// //	height: '96px',
// //      children: []
// //}

// function updateStructure(rec1, rec2) {
//   //write your code
//   if (contains(rec1, rec2)) {
//     const relativeDim = relative(rec1, rec2);
//     return { ...rec1, children: [relativeDim] };
//   } else if (contains(rec2, rec1)) {
//     const relativeDim = relative(rec2, rec1);
//     return { ...rec2, children: [relativeDim] };
//   } else {
//     return { ...rec1 };
//   }
// }

// function relative(rec1, rec2) {
//   const rec1n = normalise(rec1);
//   const rec2n = normalise(rec2);

//   const res = {
//     children: rec2.children,
//   };

//   if (rec2.top) {
//     res.top = `${rec2n.x1 - rec1n.x1}px`;
//   }
//   if (rec2.left) {
//     res.left = `${rec2n.y1 - rec1n.y1}px`;
//   }
//   if (rec2.height) {
//     res.height = rec2.height;
//   }
//   if (rec2.width) {
//     res.width = rec2.width;
//   }
//   if (rec2.bottom) {
//     res.bottom = `${rec1n.x2 - rec2n.x2}px`;
//   }
//   if (rec2.right) {
//     res.right = `${rec1n.y - rec2n.y2}px`;
//   }

//   return res;
// }

// function contains(rec1, rec2) {
//   const rec1n = normalise(rec1);
//   const rec2n = normalise(rec2);

//   if (
//     rec1n.x1 <= rec2n.x1 &&
//     rec1n.y1 <= rec2n.y1 &&
//     rec1n.x2 >= rec2n.x2 &&
//     rec1n.y2 >= rec2n.y2
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const T = 0;
// const W = 0;
// function normalise(rec) {
//   return {
//     x1: rec.top
//       ? parseInt(rec.top)
//       : -(parseInt(rec.bottom) + parseInt(rec.height)),
//     y1: rec.left
//       ? parseInt(rec.left)
//       : W - (parseInt(rec.right) + parseInt(rec.width)),
//     x2: rec.bottom
//       ? T - parseInt(rec.bottom)
//       : parseInt(rec.top) + parseInt(rec.height),
//     y2: rec.right
//       ? W - parseInt(rec.right)
//       : parseInt(rec.left) + parseInt(rec.width),
//   };
// }

// module.exports = updateStructure;
