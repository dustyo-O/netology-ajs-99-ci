export default async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ok');
    }, 1000);
  });
}
