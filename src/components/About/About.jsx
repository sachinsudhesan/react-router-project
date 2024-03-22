import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          About me
                      </h2>
                      <p className="mt-6 text-gray-600">
                      I'm Sachin S., an AI enthusiast with a BTech in Information Technology and currently pursuing an MTech in Artificial Intelligence. 
                      Passionate about leveraging technology to solve real-world problems, my journey encompasses exploring the frontiers of AI, machine learning, and data science
                      </p>
                      <p className="mt-4 text-gray-600">
                      With a blend of academic rigor and practical experience, I aspire to contribute meaningfully to the ever-evolving 
                      landscape of intelligent systems. Join me as we unravel the infinite possibilities of AI together!
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}