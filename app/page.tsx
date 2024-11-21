import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      {/* 1st Section */}

      <div className="text-3xl w-1/2 px-16">
        <Image
          src={"/assets/facebook.svg"}
          alt="fb-logo"
          width={300}
          height={100}
        ></Image>
        <p className="ml-7 -mt-2">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* Second Section */}

      <div className="bg-white h-auto flex flex-col w-[400px] shadow-lg rounded-md">
        <input
          className="p-4 border-2 border-gray-200 focus:outline-blue-500 mx-3 mt-4 rounded-lg"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="p-4 border-2 border-gray-200 focus:outline-blue-500 mx-3 my-2 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 p-3 mx-3 my-2 rounded-lg text-white font-bold">
          Log in
        </button>
        <p className="text-center text-blue-600 text-sm mb-2">
          Forgotten password?
        </p>
        <span className="mb-2 mx-3">
          {" "}
          <hr />{" "}
        </span>
        <button className="bg-green-500 w-fit mx-auto p-3 my-2 rounded-lg text-white font-bold">
          Create new account
        </button>
      </div>
    </div>
  );
}
