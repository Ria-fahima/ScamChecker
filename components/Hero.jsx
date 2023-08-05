import { useState } from "react";

const Hero = ({ heading, message }) => {
  const [url, setUrl] = useState("");
  const [pageLink, setPageLink] = useState("")

  async function submitHandler(event){
    event.preventDefault()
    const response = await fetch(`/api/url?url=${url}`)
    const data = await response.json()

    setPageLink(data.pageLink)
  }


  return (
    <div className="flex justify-center items-center bg-no-repeat bg-center bg-cover custom-img px-6">
      {/* overlay starts */}
      <div className="py-16 my-16">
        <div className="py-14 my-14 text-bossanova ">
          <h1 className="text-6xl font-bold pt-16 capitalize tracking-wider">
            {heading}
          </h1>
          <p className="text-3xl pt-7 pb-12 font-semibold">{message}</p>
          {/* Search Button */}
          <form onSubmit={submitHandler}>
            <div className="flex">
              <input
                type="search"
                className="placeholder-bossanova  first:border-2 border-solid rounded-l border-bossanova  px-4 py-2 outline-none transition-200 ease-in-out focus:border-fedora"
                aria-label="Search"
                aria-describedby="search-button"
                placeholder="Enter URL or Website here"
                value={url}
                onChange={(event) => setUrl(event.target.value)} //executes and function runs
              />

              {/* Search Button */}
              <button
                type="submit"
                className=" border-2 border-bossanova rounded-r font-bold bg-bossanova text-white-lilac px-4 py-2 capitalize transition duration-300 ease-in-out hover:bg-silver-rust hover:text-bossanova focus:outline-none"
                id="search-button"
              >
                search
              </button>
            </div>
          </form>
          {pageLink && (<a href={pageLink} target="_blank" > {pageLink} </a>)}
        </div>
      </div>
    </div>
  );
};

export default Hero;