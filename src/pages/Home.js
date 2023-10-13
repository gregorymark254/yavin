import React from 'react'
import { FaRocket,FaRegClock,FaRegComments,FaTools,FaChartPie,FaRegChartBar } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      {/* home */}
      <section id="home">
        <div className="container mx-auto p-4">
          <div id="icon" className="absolute -left-60 top-44">
            <img width={400} height={400} src="https://htmlrev.com/preview/yavin/images/decoration-star.svg" alt="" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-20">
            <div className="p-4 space-y-6">
              <div>
                <h1><b>Beautifying</b></h1>
                <h1><b>office spaces</b></h1>
              </div>
              <p>Is education residence conveying and sore. <br /> Suppose shyness say ten behaved morning had. <br /> Any propose assist compliment occasional too reasonably</p>
              <div className="flex space-x-5">
                <button className="px-8 py-2 bg-[#5e87eb]  text-white rounded-full hover:border hover:bg-white hover:border-[#5e87eb] hover:text-[#5e87eb]">More details</button>
                <button className="px-8 py-2 border border-[#cc2973]  text-[#cc2973] rounded-full hover:text-white hover:bg-[#cc2973]">Contact us</button>
              </div>
            </div>
            <div>
              <img src="https://htmlrev.com/preview/yavin/images/header.png" alt="HOME" />
            </div>
          </div>
        </div>
      </section>

      {/* details */}
      <section>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap justify-around gap-10 items-center text-center mt-20 mb-32">
            <div>
              <h1>237</h1>
              <h6>Happy Customers</h6>
            </div>
            <div>
              <h1>382</h1>
              <h6>Issues Solved</h6>
            </div>
            <div>
              <h1>159</h1>
              <h6>Good Reviews</h6>
            </div>
            <div>
              <h1>123</h1>
              <h6>Case Studies</h6>
            </div>
          </div>
          <div className="flex justify-around items-center mb-32">
            <div className="space-y-5">
              <div>
                <h2>Creating office spaces is our passion and you</h2>
                <h2>can see that in our completed projects</h2>
              </div>
              <div>
                <p>
                  Unpleasing has ask acceptance partiality alteration understood two. Worth no tiled my at house added.
                  Married <br /> he hearing am it totally removal. Remove but suffer wanted his lively length. Moonlight two applauded <br /> conveying end direction old principle but. Are expenses distance weddings perceive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about */}
      <section id="details">
        <div className="container mx-auto p-4">
          <div id="icon" className="absolute -left-60">
              <img width={500} height={500} src="https://htmlrev.com/preview/yavin/images/decoration-star.svg" alt="" />
            </div>
          <div className="flex flex-wrap items-center justify-center gap-20">
            <div>
              <img src="https://htmlrev.com/preview/yavin/images/details-1.png" alt="person" />
            </div>
            <div className="space-y-6">
              <div>
                <h2><b>Office spaces should be unique</b></h2>
                <h2><b>they don’t need to look the same</b></h2>
              </div>
              <div>
                <p>At every tiled on ye defer do. No attention suspected oh difficult. Fond his say</p>
                <p>Old meet cold find come whom. The sir park sake bred. Wonder matter now</p>
                <p>Can estate esteem assure fat roused. Am performed on existence as discourse</p>
                <p>existence as discourse is. Pleasure friendly at marriage blessing or should</p>
              </div>
              <div>
                <button className="px-8 py-2 bg-[#5e87eb]  text-white rounded-full hover:border hover:bg-white hover:border-[#5e87eb] hover:text-[#5e87eb]">Get started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* services */}
      <section id="services">
        <div className="container mx-auto p-4 my-32">
          <div className="flex flex-wrap justify-around gap-10">
            <div className="space-y-6">
              <h2><b>Services that we offer</b></h2>
              <p>Greatly hearted has who believe. Drift allow green <br />son walls years for blush. Sir margaret drawings <br />repeated recurred exercise laughing may you</p>
              <p>Do repeated whatever to welcomed absolute no. <br /> Fat surprise although more words outlived</p>
              <div>
                <p>And informed shy dissuade property. Musical by</p>
                <p>He drawing savings an. No we stand avoid</p>
                <p>Announcing of invita mrore wo tion principle</p>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-10 md:grid-cols-3  text-center items-center">
                <div className="space-y-4">
                  <h1 className="flex items-center justify-center text-[#cc2973]"><FaRocket/></h1>
                  <p><b>Space analysis <br /> and planning</b></p>
                </div>
                <div className="space-y-4">
                  <h1 className="flex items-center justify-center text-[#cc2973]"><FaRegClock/></h1>
                  <p><b>Design and color<br /> choosing</b></p>
                </div>
                <div className="space-y-4">
                  <h1 className="flex items-center justify-center text-[#cc2973]"><FaRegComments/></h1>
                  <p><b>Materials and <br />delivery</b></p>
                </div>
                <div className="space-y-4">
                  <h1 className="flex items-center justify-center text-[#cc2973]"><FaTools/></h1>
                  <p><b>Execute the <br />concept</b></p>
                </div>
                <div className="space-y-4">
                  <h1 className="flex items-center justify-center text-[#cc2973]"><FaChartPie/></h1>
                  <p><b>Creating great<br /> atmosphere</b></p>
                </div>
                <div className="space-y-4">
                  <h1 className="flex items-center justify-center text-[#cc2973]"><FaRegChartBar/></h1>
                  <p><b>Evaluation and <br />reporting</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* details */}
      <section id="projects">
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap items-center justify-center gap-20">
            <div className="space-y-6">
              <div>
                <h2><b>A beautiful and well organized</b></h2>
                <h2><b>office space increases productivity</b></h2>
              </div>
              <div>
                <p>On it differed repeated wandered required in. Then girl neat why yet knew rose</p>
                <p>spot. Moreover property we he kindness greatest be oh striking laughter. In me</p>
                <p>he at collecting affronting principles apartments. Has visitor law attacks</p>
                <p>pretend you calling own excited painted. Contented attending</p>
              </div>
              <div>
                <button className="px-8 py-2 bg-[#5e87eb]  text-white rounded-full hover:border hover:bg-white hover:border-[#5e87eb] hover:text-[#5e87eb]">Get started</button>
              </div>
            </div>
            <div>
              <img src="https://htmlrev.com/preview/yavin/images/details-2.png" alt="person" />
            </div>
            {/* <div className="absolute -right-80">
              <img width={500} height={500} src="https://htmlrev.com/preview/yavin/images/decoration-star.svg" alt="" />
            </div> */}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-center text-center my-20">
            <div>
              <h3>Our team of highly skilled designers and interior construction</h3>
              <h3>workers can deliver above your level of expections</h3>
              <br />
              <div>
                <button className="px-8 py-2 bg-[#5e87eb]  text-white rounded-full hover:border hover:bg-white hover:border-[#5e87eb] hover:text-[#5e87eb]">Get quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contacts */}
      <section id="contact">
        <div className="container mx-auto p-4 mb-20">
          <div id="icon" className="absolute -left-60">
            <img width={500} height={500} src="https://htmlrev.com/preview/yavin/images/decoration-star.svg" alt="" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-20">
            <div>
              <img src="https://htmlrev.com/preview/yavin/images/contact.png" alt="person" />
            </div>
            <div className="space-y-6">
              <h3>Contact us for a quote using the following form</h3>
              <form action="">
                <div className="p-2">
                  <input 
                    type="text" 
                    placeholder="Name"
                    required
                    className="px-4 py-3 rounded-full border border-slate-400 w-full focus:outline-none focus:border-[#5e87eb]"
                  />
                </div>
                <div className="p-2">
                  <input 
                    type="email" 
                    placeholder="Email"
                    required
                    className="px-4 py-3 rounded-full border border-slate-400 w-full focus:outline-none focus:border-[#5e87eb]"
                  />
                </div>
                <div className="p-2">
                  <textarea name="" id="" 
                    cols="30" rows="10"
                    required
                    placeholder="Message"
                    className="px-4 py-3 rounded-2xl border border-slate-400 w-full focus:outline-none focus:border-[#5e87eb]"
                  ></textarea>
                </div>
                <div>
                  <button className="px-5 py-2 text-white bg-[#5e87eb] w-full rounded-full hover:border hover:bg-white hover:border-[#5e87eb] hover:text-[#5e87eb]">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
