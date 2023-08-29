"use client";
import { useRef, useState, LegacyRef, createRef, Ref } from "react";
import mine from "../../public/mine.jpg";
import joshes from "../../public/IMG_9066.jpg";
import hypnotize from "../../public/hypnotize.jpeg";
import Image from "next/image";
function Main() {
  const [headLine, setHeadLine] = useState("My certifications");
  const [certs, setCerts] = useState(mine);
  const [animeClass, setAnimeClass] = useState("");
  const myRef = useRef();
  let indexVar = 0;
  const element =
    typeof document != "undefined"
      ? document.querySelector("#certElement")
      : ("" as any as Element);
  function clickHandle() {
    indexVar += 1;

    if (indexVar === 1) {
      setTimeout(() => {
        setHeadLine("my opponents");
        setCerts(joshes);
      }, 500);
      setAnimeClass("certs");
      indexVar += 1;
    } else {
      document.querySelector("#ideas")?.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className=" h-[100rem] w-screen overflow-y-scroll bg-blue-900">
      <h1
        className=" font-bold text-[10rem] text-center cursor-pointer mb-[50rem]"
        onClick={(ev) => {
          if (typeof window != "undefined") {
            // window.scrollTo({
            //   top: element.getBoundingClientRect().bottom,

            //   behavior: "smooth",
            // });
            // window.scroll({ top: 100, behavior: "smooth" });
            element?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        Cohen for president 2024
      </h1>

      <div
        className={` cursor-pointer ${animeClass} mb-[100rem] text-center `}
        onClick={clickHandle}
        id="certElement"
      >
        <h1 className=" text-center text-4xl mb-10">{headLine}</h1>

        <Image
          src={certs}
          width={100}
          ref={myRef as any}
          height={100}
          alt=""
          className=" w-80 relative left-[40%]"
        />
      </div>

      {/* <div>
        <h1 className=" text-4xl text-center">
          would my opponents even know what this code does{" "}
        </h1>
        <div className=" flex justify-center">
          <div className=" bg-slate-400 ">
            <code className="">
              section .data
              <br />
              thing: db "jhjjhg",20
              <br />
              len: equ $-thing
              <br />
              section .text
              <br />
              global _start
              <br />
              _start:
              <br />
              mov rax,1
              <br />
              mov rdi,1
              <br />
              mov rsi,hello
              <br />
              mov rdx,length
              <br />
              syscall
              <br />
              mov rax,60
              <br />
              mov rdi,0
              <br />
              syscall
            </code>
          </div>
        </div>
      </div> */}

      <div
        id="ideas"
        className=" mb-[47rem] h-8 cursor-pointer"
        onClick={() => {
          document.querySelector("#swirl")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <h1 className=" text-center text-4xl">
          {" "}
          what I will do for the class{" "}
        </h1>

        <hr className="bg-black outline-black border-black h-1 mb-5" />
        <ul className=" list-disc ml-56 text-2xl ">
          <li>
            carve out time for certification practice so that everyone comes out
            with a stacked resume that no employer can resist
          </li>
          <li>
            I will democratize fun friday by giving you all choices for what we
            do{" "}
          </li>
          <li>adding prizes to fun friday</li>
          <li>I will take suggestions on policies</li>
        </ul>
      </div>

      <h1 className=" text-5xl text-center mb-14">In conclusion</h1>

      <h2 className=" text-4xl text-center mb-28">vote for me</h2>
      <div className=" flex justify-center mb-5">
        <Image
          src={hypnotize}
          width={100}
          height={100}
          alt="vote cohen"
          className=" rounded-full w-96 spinner"
          id="swirl"
        />
      </div>
    </div>
  );
}
export default Main;
