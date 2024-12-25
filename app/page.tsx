'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react"
import { useRouter } from "next/navigation";
export default function Home() {
  const rout = useRouter();
  useEffect(()=>{
    rout.push('/home')
  },[rout])
  return null
}
