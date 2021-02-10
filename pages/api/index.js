// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function getFeed(username) {
  const res = await fetch(`https://www.instagram.com/lucasmmaidana/?__a=1`)
  console.log(res.text())
  const data = await res.text()
  console.log(data)
  // this.data = data;
  return data
}
