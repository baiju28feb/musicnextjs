"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
            <Image
              src="/data/images/jam.jpg"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/data/images/playguitar.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Discover Your Sound with Us: A Personal Journey in Music Mastery',
      description:
        'Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/data/images/mix.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Live Feedback & Engagement',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/data/images/room.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/data/images/vocals.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
    {
      title: 'Limitless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.',
        content: (
            <div className="flex h-full w-full items-center justify-center text-white">
              <Image
                src="/data/images/notes.jpg"
                width={300}
                height={300}
                className="h-full w-full object-cover"
                alt="linear board demo"
              />
            </div>
          ),
    },
  ];

function AboutUs() {
  return (
    <div>
     <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl text-center py-12 bg-gray-900">About Us</p>
    <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default AboutUs