import Link from "next/link"

const page = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2><Link href="/blog">Blog</Link></h2>
      <h2><Link href="/products">Products</Link></h2>
    </div>
  )
}

export default page