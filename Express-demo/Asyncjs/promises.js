//callback results in callback hell. nested functions call . Inorder to avoid this problem we use the promises

const p = new Promise((resolve, reject) => {
  resolve();
});

p.then((result) => console.log(`result done`));
