import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { spacebg } from "../assets";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_86ibt1i
    // service_q53dow8
    // -56HRoAbnwl7N9T21

    emailjs
      .send(
        'service_q53dow8',
        'template_86ibt1i',
        {
          from_name: form.name,
          to_name: "Aish Mishra",
          from_email: form.email,
          to_email: "aishlunatic001@gmail.com",
          message: form.message,
        },
        '-56HRoAbnwl7N9T21'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex gap-10 sm:gap-15 md:gap-25 lg:gap-40 ">

          {/* github  */}

          <div className="flex mt-10">
             <a href="https://github.com/AishMishra001/">
             <FaGithub className="w-8 h-8 sm:w-10 sm:h-10"/>
             </a>
          </div>

          {/* linkedin  */}

          <div className="flex mt-10">
             <a href="https://www.linkedin.com/in/aish-mishra-b24a52237/">
             <FaLinkedin className="w-8 h-8 sm:w-10 sm:h-10"/>
             </a>
          </div>

        
          {/* Twitter  */}
          <div className="flex mt-10">
             <a href="https://x.com/AishMishra17">
             <FaSquareXTwitter className="w-8 h-8 sm:w-10 sm:h-10"/>
             </a>
          </div>
         
         {/* gmail  */}
          <div className="flex mt-10">
          <a href="mailto:aish.work008@gmail.com?subject=Contact%20me%20.%20&body=Hi%20Aish%20">
             <IoMdMail className="w-8 h-8 sm:w-10 sm:h-10"/>
            </a>
          </div>
          
        </div>
      </motion.div>

    
    </div>
  );
};

export default SectionWrapper(Contact, "contact");