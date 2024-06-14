import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { styles } from "../styles"

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        formRef.current, 
        'YOUR_USER_ID'
      );
      setLoading(false);
      alert("Message sent successfully!");
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setLoading(false);
      console.error("Failed to send the message", error);
      alert("Failed to send the message, please try again later.");
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#280e39] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-[#F7F7F7] font-medium mb-4">Your Name</span>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="What's your name?"
              className="bg-[#1a0926] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-[#F7F7F7] font-medium mb-4">Your Email</span>
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="What's your email?"
              className="bg-[#1a0926] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium" />
          </label>
          <label className="flex flex-col">
            <span className="text-[#F7F7F7] font-medium mb-4">Your Message</span>
            <textarea rows='7' name="message" value={form.message} onChange={handleChange} placeholder="What do you want to say ?"
              className="bg-[#1a0926] py-4 px-6 placeholder:text-gray-300 text-white rounded-lg outlined-none border-none font-medium" />
          </label>

          <button type="submit" className="bg-[#1a0926] py-3 px-8 outline-none w-fit font-bold shadow-md text-white shadow-black rounded-xl">
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[150px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
