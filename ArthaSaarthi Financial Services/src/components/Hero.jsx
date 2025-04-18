import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <MotionDiv
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Welcome to{' '}
            <span className="text-blue-600">
              ArthaSaa₹thi Financial Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Financial planning is not just about numbers—it's about living a
            life of clarity, purpose, and confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }>
              Book a Consultation
            </MotionButton>
            <MotionButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-blue-50 transition-colors"
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }>
              Join Our Webinars
            </MotionButton>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}

export default Hero;
