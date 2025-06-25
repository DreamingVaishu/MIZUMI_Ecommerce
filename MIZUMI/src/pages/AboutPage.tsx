import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5885811/pexels-photo-5885811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
            alt="Japanese landscape" 
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl font-medium text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-2xl text-lg text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Embracing the beauty of simplicity and mindful craftsmanship
          </motion.p>
        </div>
      </section>
      
      {/* Origin Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-medium text-neutral-900 mb-6">Our Origins</h2>
              <p className="text-neutral-600 mb-4">
                MIZUMI was founded in 2025 by designer Vaishnav , who sought to create a clothing brand that reflected her Japanese heritage and love for minimalist design.
              </p>
              <p className="text-neutral-600 mb-4">
                After studying fashion design and working for several major fashion houses, team mizumi wanted to create pieces that embodied the principles of Japanese aesthetics: simplicity, asymmetry, appreciation for natural materials, and finding beauty in imperfection.
              </p>
              <p className="text-neutral-600">
                The name "MIZUMI" means "beautiful lake" in Japanese, reflecting our commitment to tranquility, depth, and reflection in our designs. Just as a lake mirrors its surroundings while having its own essence, our clothing reflects contemporary trends while maintaining a timeless Japanese-inspired core.
              </p>
            </motion.div>
            <motion.div 
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/5699665/pexels-photo-5699665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Design studio" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section id="philosophy" className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium text-neutral-900 mb-4">Our Philosophy</h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              We embrace several key Japanese aesthetic principles in our design approach
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Wabi-Sabi</h3>
              <p className="text-neutral-600">
                The acceptance of transience and imperfection. We embrace natural textures, asymmetrical designs, and subtle variations that make each garment uniquely beautiful.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Ma (間)</h3>
              <p className="text-neutral-600">
                The concept of negative space. Our designs incorporate intentional simplicity and restraint, allowing the wearer's personality to fill the space and complete the aesthetic.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-medium text-neutral-900 mb-4">Shizen (自然)</h3>
              <p className="text-neutral-600">
                The naturalness or absence of pretense. We use natural materials and avoid excessive processing, allowing fabrics to retain their inherent character and beauty.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="order-2 md:order-1 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.pexels.com/photos/4394806/pexels-photo-4394806.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Sustainable materials" 
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div 
              className="order-1 md:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-medium text-neutral-900 mb-6">Sustainability Commitment</h2>
              <p className="text-neutral-600 mb-4">
                At MIZUMI, we believe that true beauty cannot come at the expense of our planet. Our commitment to sustainability is inspired by the Japanese concept of "mottainai" (もったいない) — a sense that it is a shame for something to go to waste without having made use of its potential.
              </p>
              <p className="text-neutral-600 mb-4">
                We prioritize natural, organic, and recycled materials in our collections. Our production process minimizes waste through careful pattern cutting and reuse of fabric scraps.
              </p>
              <p className="text-neutral-600">
                We work with small-scale, ethical manufacturers who share our values and provide fair wages and safe working conditions. By producing in limited quantities, we ensure quality craftsmanship while reducing overproduction and waste.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium text-neutral-900 mb-4">Our Team</h2>
            <p className="mx-auto max-w-2xl text-neutral-600">
              A small, dedicated team of designers and craftspeople bringing our vision to life
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Hana Takahashi" 
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium text-neutral-900">Hana Takahashi</h3>
              <p className="text-neutral-600">Founder & Creative Director</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Kai Yamamoto" 
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium text-neutral-900">Kai Yamamoto</h3>
              <p className="text-neutral-600">Head of Design</p>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full">
                <img 
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                  alt="Mei Chen" 
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-xl font-medium text-neutral-900">Mei Chen</h3>
              <p className="text-neutral-600">Sustainability Director</p>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      {/* Visit Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div 
            className="mx-auto max-w-3xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-medium text-neutral-900 mb-6">Visit Our Studio</h2>
            <p className="text-neutral-600 mb-8">
              We welcome visitors to our studio by appointment. Experience our collections in person and learn more about our design process.
            </p>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="MIZUMI studio" 
                className="w-full h-auto"
              />
            </div>
            <p className="mt-6 text-neutral-600">
              Maharashtra Mumbai , 8435 <br />
              Open Monday-Friday, 10am-6pm
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;