import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Hello Aman</h1>
    
        <Link href="/register">
          <a>Register</a>
        </Link>
    </div>
    )
}
