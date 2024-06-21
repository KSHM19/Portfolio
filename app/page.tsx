import Image from "next/image";
import navBar from '@/app/components/nav/NavBar';
import NavBar from "@/app/components/nav/NavBar";


export default function Home() {
  return (
   <div className="flex justify-center items-center h-screen bg-gray-100">
    <NavBar/>
   </div>
  );
}
