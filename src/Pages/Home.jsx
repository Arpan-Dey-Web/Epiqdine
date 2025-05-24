import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Marquee from "react-fast-marquee";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useLoaderData } from "react-router";
import Group from "../Component/Group";

const Home = () => {
  const allgroup = useLoaderData();
  const [groups, setGroups] = useState(allgroup);

  const sliderClass =
    "flex items-center justify-center overflow-hidden  h-[400px] rounded-2xl";
  const sliderImageClass = "object-co w-full rounded-2xl  ";

  return (
    <div>
      {/* slider */}
      <div className="mt-5 rounded-2xl mx-auto w-full">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* slider 1 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src="https://i.postimg.cc/R06Vvw5b/e807987e-0f5c-4ec2-abc4-63dc7cab8df8-cali-paragliding-feel-and-live-the-true-flying-sensation.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 2 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src="  https://i.postimg.cc/ZqGYn0JY/pexels-arun-mathew-672148-1486036-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 3 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src=" https://i.postimg.cc/dt606qjn/pexels-mateus-oliveira-2150975619-32112693-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 4*/}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src=" https://i.postimg.cc/P5F5G2cw/pexels-md-rafatul-islam-394880541-30518295-1.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
          {/* slider 5 */}
          <SwiperSlide>
            <div className={sliderClass}>
              <img
                className={sliderImageClass}
                src=" https://i.postimg.cc/W141fQ9V/pexels-photo-6550837.jpg"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-base-100 text-base-content py-16 px-4 md:px-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center logoName leading-tight">
          Latest Group for
          <span className="ml-3 text-primary">
            <Typewriter
              words={["Explore", "Creators", "Thinkers", "Innovators!"]}
              loop={true}
              cursor
              cursorStyle="_"
            />
          </span>
        </h1>

        <p className="mt-6 text-center  dark:text-gray-300 md:text-xl text-black max-w-3xl mx-auto logoName leading-relaxed">
          Discover new ideas, share your voice, and connect with like-minded
          explorers.
          <br className="hidden md:block" />
          This latest group is your gateway to
          <span className="text-primary font-medium"> inspiration</span>,
          <span className="text-secondary font-medium"> collaboration</span>,
          and meaningful journeys.
          <span className="text-primary-content font-medium">Join now</span>
          and start exploring together
          <span className="text-accent ml-1">&rarr;</span>
        </p>
      </div>

      {/* all groups looping here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 rounded-2xl w-full mx-auto py-10">
        {groups.map((group, index) => (
          <Group key={index} group={group}></Group>
        ))}
      </div>

      <section className="">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            How it works
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                What is HobbyHub and who is it for?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  HobbyHub is your digital sanctuary—a place to explore,
                  express, and elevate your hobbies. Whether you're a painter,
                  gamer, gardener, coder, or musician, HobbyHub connects you
                  with like-minded souls and resources to grow your passion.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Can I share my hobby projects or tutorials?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes! You can showcase your creations, post guides, or even
                  start your own hobby blog within the platform. Share your joy,
                  inspire others, and build your own little corner of the
                  creative universe.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I find communities or clubs related to my interests?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Simply search your hobby—whether it’s origami or Arduino—and
                  you’ll find vibrant communities, scheduled events, and
                  discussion forums to join. HobbyHub is built to help your
                  passions find their people.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                Is HobbyHub free to use?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Yes, HobbyHub is free for hobbyists to explore and connect. We
                  also offer premium features like advanced analytics for
                  creators and ad-free browsing, but the heart of the platform
                  is open to all.
                </p>
              </div>
            </details>
            <details>
              <summary className="py-2 outline-none cursor-pointer focus:underline">
                How can I organize local meetups or virtual events?
              </summary>
              <div className="px-4 pb-4">
                <p>
                  Organizing events is simple—use the “Create Event” tool to
                  plan gatherings, workshops, or live streams. From local
                  sketch-and-sip evenings to global coding jams, HobbyHub helps
                  bring your vision to life.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <Marquee>
        <div className="flex ">
          <div className="flex gap-4">
            {/* Review 1 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUSEBAVFRAWFxYVEBUQEBAPFRAVFRIXFhUSFRUYHSggGBolGxUVITEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0fHyUtLS0tKy0tLS0rLS0tLS0tLSstLS0tLS0tKy0tLS0tKy0tLS0tKy0tLS0tLS0tLS0rLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xABGEAACAQICBwQIAwUGBQUBAAABAgADEQQhBQYSMUFRcSJhgbEHEyMycpGhwTNC0RQkUrLwYqKzwuHxQ2NzgpIWJaPS4hX/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAKBEAAgICAgEDAwUBAAAAAAAAAAECEQMhEjEEMkFxBRMiIzNRYZE0/9oADAMBAAIRAxEAPwB9GjZm+I+csaNODKdt/iP2kumsyPsvT0UNbVxxXYgdg5j9Je6L0WFdes0rUQVvI/qINME0M0lgrMDIv7NlJxpk7zfqSYjTykKY7MJiMMzVmstws0GiMUvqypTMd0dSo7Jex3yHRqVFYhbG8vg+ETPJcpAcfXLdlVt4Sw0Ros72GclaP0YWO028zR0MOAJjlJylZpX4xozNahYkSz0FTzMj4xO2ZP0IBcwS2NvRaqk6bcIOpiRmF3jfIei6vYZ3NgCxJOQAEvUSlss6tYKM4CrWW1tpb8ri/wAp4X6RNfq+KdkwztSwi5LsEo9f+2xGYB4KPGYTBFs2BO1xNzmOOcvWNrsjd9HsusFYtX2UcFbZ2N+Mdq/hyMTSP9r/ACmeICoyNdGKnmrFT8xPRfR5rif2ilSxbCxbZSqbLYkEAP1JteRljkn/ACNNUe/icM6IjLaIgyIwiFIgyIqAYRGGFIjCIgsE0YRCkQZEKHYNhGEQjRpioATCNtCGcgA/CL2xHaVHbpdWP92OwY7QndIj2tPox8o0hM8TxabWIxR/5z/zESNUoZycBepiDzr1P8RovV9qXRRBsrDSilgaEUnRGzb1U9o/xfYQ6icxK+1fqPIQizDJbZpvRpcILpGsk7oqptU78IVhL4xtFZH2JwpD7M4RIuA7MfpfHrTcjj1k3VymKo2iJh9a9v8Aa3C8hNz6O6beoBbfc+cx5LbosikkaehRAkpUnQAJAx+lFpqSM+GXWNRBsrsbSO2cofRaWYwOlazerLjJrSFqni6jswc8Ba0aS5UDlotMEvaq9ftMh6SNLmjgvUobNXZla2/1a2Ljxuo6EzZ4L36vX7Txv0saRvifV3ypqq273JdvoV+U0RVNFXZjkwzVOyi3c8Bvlro/VjEAHsZbjxHSbT0V6v7VP17rk3u3AzzzIvN3i8EosAoA+UjlyutGrDij7nz5pTQdVLts3A38x+sqgw/We2af/Y6dxXqKL8ACzHoq5zz/AE1q9Rqg1MJthszsVab0xUA37DEWv3SOPPfq/wBDLgS9P+HqHod1wOKonC12vXogerY76tLcLniy7jzFp6OZ8naoaYfCYujWBIKOu2DcXQm1RT/2k+M+r6VUMoZc1IBB5gi4mkyCIjCIQxpgAIxsIY0xADMGYRowiFADaDMKwgyIUA0ictOmKFDD4Edqcx/4q9yt9o/ADtRmP/F6U2gkJnjmCW/rDzrP/O0P6vOc0QvYJ51GPzYyUKfaMuj0VsjrSikoU52TEafFr7V/DynbQmNHtW6L9407phl2zQjRaIS1Ef1vhWjdFD2Q6R5E0xWisbaKOtFaDQyl0novDsCxUbXE5TmgKqIhFK1gSIfEU/e6GVWqadip/wBRvOY/t/kS5aNLRLNckyqxOHvTI7/80u8IuXhINROyev3lnAi2B0insrd0g6pUrO3QS0x6+z8JD1aWzt0i4fkmO9FjhEs9Tr9p89+kpidIVV4mrb6Kon0Phx26n9cJ84+kSrbSdY33VMvoZYJHqWn3WhTp4dHqC1MClToVBQFgt2eo5zJ35A9LmRdQcc9V3Dmqbpe1R2fZN7D3hcGarRZXFYenVB95FPjbMHxBi0OaKl1XZWzAMbAAsRkO8zHKVqmdKMa2jz/S+HIruwTtWNmC7TA2ytfmfl37pE0RhsUp26jsVsQwe5uc92QsN00+mmQViEO04Oa7Jtv3bW4RzYmiyG2R3W5HlKfufjTResacrPHda8MKeKe25rN/5DOfQ/ot0wcTo+kze+g9W/VMr+Nr+M8K14wxNQ1QDbsqct2XH6fOegegHSGWIw5PFai+I2Wy/wCxfnOhidwRy80eM2exGNMfaNMtKgZjDCERhgANowwhEY0ABtBkQhjTCgBmcjjOQoCXo/eZH0k1nc8qZ+8k6PG+QdMtb1x5Uj5GCQmeW6FHsUPMkyfSS95E0KLUKfSWFEb5YiDGBIoa07CwNBjx7U9F+8Ed0kaRHtT8I8zAGZpdsuRo9DfgjpDGA0GfZfPzkkiaV0VjLTtp206BACqrb2HWVuqYyq/9RvtLSt7zeMqdVW/G7qh8hI8dkbNVhRlIRPZPX7yZhGylfWayOe/7woVj8f7khauntt0ELpesVw5YbwDK3UisX7TbyAYKIN7RfYdvaVB08p80a/ttY6u3Oo30NvsJ9KLUCtWJ3AXPQLPmXWKrtuz8WZm+bRMnA9k9H2M2sAKSPtVEVS2Vheou2LHiM8zzvJGr2KdGbDvT2DctUruSUZzmQNkXGR/NYZb54pqfrDUwOIFZQWQjZrJe22hOY6g5j/WfQOjqqVBtofeANj2WtwnPnDhkt+50sWTnCin0to+lTJc4oEkXC0qDOd182vbmLnumdw1Jwt6pBqO2VlC7KXNgbbzaafSOiV29p3ZrZjabITJ6f0koYrTzsN4zA5mVZN6SNK1u7MPrlpE/tD00PZ2QreNiR9B0zlx6JccaOPpn8pVlqdymxv8AMLMRjWJqsTndjv45zVejioo0giv7rB1PfcX+dg06GOPGKRyckuUmz6cvOGQtG1SPZse0oyP8Q5yaZaVjDGmPMYYAMaMaEMG0KAEY0xzRpjoBhnJ0zkAJuj+MqtY3tTxR5Uj/ACmW2j9xlFra1sPjD/yz/LBCZgdFj2NP4ZNpSLgRanT+GSqEZEPacj2iiGaDSX4v/aPORrSVpT8QfD95HtKpdlqL/QH4R6mTLSJq+wNMjkYfEVFUXJyl3JRWyEYuWkPilc+lqQF9oSO2n6d7DMxLNjeuSJvDkStxYWt77eMqdWqJU1u+oT9BLFKm2S1sv9JA1cOdbO/b+wl9GVmjwRkWpTujgc/vJGCvAVqhVGI33+8i4hehuKw6tS2X3WIMo9UVVMQ9NCSiqLb7DMjKXmMqeyueUq9VMdReowRbMAL5W4mJDb2d1mxwo0MW5Oexsr3lhsj6mfOekXuPnPdPSM5/ZsRbhsnr2lX/ADGeCMj1XCU1ZzuAUFjn0lM/UXQ9JK0LoxqtPEVQLiiga3Nmaw+gY+E+gdXMOj4Wiwz7ClSDnYjLOZTUvVQUsA6PlWri9a9js292nlyB+sbqZjMVg1/ZcRSbYW/qnuCuxewBINr90xZJKbf9GvC+KNLprRBbc7AHfmPOZrSGEpUUtYFuAFszzJ4DvlvpfWVbWHnvmPxmLeoTa4H9ZzG0r0aHm0YrWLAbPbBzJu3IknhISYlkqJVQ2ZSGUgkWKm4zms0rhgy2bO/PhKHF6IsOwTbgG3jxm/DlXGmYpx3Z7jqfrUuKw6PcetS3dtWHaS3A2Pyzm9DXFxu4T5X1TxtXDYlVzFOoQlTfkCbCp1W5PS44z6V1ZrM+Gp7RuwWxIzBKkr9prWylllGmPMYYwGNBNCtBNAAbRhjzGGMQwxCIxCAE/R+4zN65t+6Ys91voBNJo/cesyuvLfueJ72A+qiCEzJ4fJE+ESRQgE3L8IkjDcOsBB6m/wDrlFO4kdo+HkIoh0aHSv4g+E+YkcyTpb8RfhPmJHkGtlhdavv2WHfB6xp7B+hkjQNhT77mD1gHsH6GVeb/AM8vg0eD+8vkwHqR6ul8Q8pPw9EesPQSKPw6XxDyk/De+egnB+n7zo9F5/7EjU0UT1eRzt9pA0Ng/V+sIN9pr/SR2ZrWvlD6vP2mVjxynsFTR4uXZc4NpCxdSyP/AFxlmuGsbg5SqxS3Rx/W+FCO45/YE9x8pmNTcbTp7dRyF7I3/mOeQ5marEhfU2b3bfPumF0pQsp2MgueyMhs33AcJkzeQseq2Wwx8thtZtL06tOpTCFlcWLMSt8wcgM7Zb7iZfVoL6xlVQqCwQKoUcdo5c7ybpDZNPaU5+4w7ym1cSHoNLMO+c+eaU3s0qCSNPiMTVVgaVihUCojZbRAttKeBtbrYSBijtG5R7d1vteTC1wbHtKfmINquV8iO8TNJWTTorKuHQZ9rwQk+VpX1ixPZGz3tZz/AOK5fWXpKn8ogBTud2XnElRLkVKYAe8bsebkE+A3CQ6uGu+zbMZeJ3zTlALngov4iQNHYa5LneTl1Y/pLItkWyO2CWku1btBdrdnbcAO8kgeMnqaqDZWowNhtbLFc+QtwnNLGzFeZoEdFZ2P+HJNY7xx4x/2RNHqPrI5f9nruWv+Ezm5Bt7hJ58O/rNy08SDlGDA2YEEdxBnsmj8UKtJKg/OoY9xtmPnebPFyNpxfsQmvcK0E0K0G01lYJoNoRoMxiGmcERigBY6P909ZjtfW/cq3fVQf/IJscAOzMRr+37me+uv+JBCZQLw6CS8Nw6yIp8hJWGO7rIMCRi/fPh5CKDxzjbPh5CKFAzTaW99OjfaRZK0v76dGkaJ9lhP0XUsQO8/aStYD7B+hlRgKtqwHcTLDWKrai/Qyvy9+PL4NPhL9ePyYgN7On8Q8pZYQ9s9BKL1vs0+IS30a92M4P05fro9F9Q/YkXoEbgxYm05tZQWGfM5z1sWeMktl5hsWbgE5cZKx2E2kJTeZS0aknaN0jY2bdJMjRA0vVIVUO8b5msU4zubX3HgDyPdLjTFXacnvmexr2BB3f1u75wss+c2zbFUqKZaJC1b7tuwHRP/ANiS8Bhtk0+9T+sbhu1RUnezPtW/MFIQHxVBLAr2FNu0L2kK2SGo1rnneNdrITw8o9xlbkILa9kw/iioBiNcWkmmgAvItFdwh3bO3zhQDcSOxb+IgeHGPo0wtvE/LIQeIPaUcAL/ADnRVz+ghQEfSz3qUbDtNcC+4lSSAe7tGSqlHZFhnzJ4niT3kyFbbxOFH8Jqsegpn7kS2xKx+wMo8SM56NqBidrC7PFHZfA9ofUmed4wTYejOrlWX4D9WB+0n47rIgl6TbNBNCtBNOoUMCxjDHtGGMQwxThMQMBFngfc+cwfpAb90Qc8QP5iZvMH7nznn3pAb93w451/s5gDKcHf4SRhG3SJffD4I5iVgB0rX9q3h/KIpX6aqe3fqP5RFJpaIs9J0v7yePlIpknTG9Op8pFYyNbLSk0xpdcNUDt/DfLqZWvrymKRkQEdRaTtPYBarjaF+zb6yFgtX6SDJczK82OWTFKC9zX4mSOPLGUiqXE9kdY3H6yNhiCFLX5S7XRK8o3E6FpvbaWYPF+nzx5VKzqeZ58MmJxSH6uawtiVJZSvWW2HfMyPozRi0xZQB0kqnQznY2jzrol0j3x+E98db/LODo0zD4ZLEnkD+n3hOVQfwRS2iu0g2Zmc0pVyI5/11Eu9IVczKijhFr08SxfZekqlLAsLttZsAL27Nsuc48Y2a0rdIiarVVqUxT/4lNmRhl+ZmdW8do/Iy0Rixy3DLrnMBq3jnXHCxKgqTUXns5qD0PnPRcGlkz377eN45JpgMqoLnpIr8pKrtI+XWRsBU0zOW79J0HIc+MTNyjAYrCjlf3ielpCrV7SbVYSjx5Z2WmmbOwVerG0FsaLXVFDUxIruB6ikrq9zshi5U2BtyU3698tmG0SVB9o7NSU7wrt2FHzGXC9p1dGuiphlAXD0yDXY2BqH3iCeXM99p2vifWZ4NQVzBrVQxpt8A/Nnx3d/CTe1Ro+z0io0xQalUNNxZwASLg5EZbpe+jarau686Z+jL+plHrC1H1i+pZnfZ/eHdg13ysBbIWzyGQy4yZqHX2cZTH8Qdf7hPmBCFRyqv5M81SaPUmgXhWgXnVMwJoMwjQZjoQwxRGcgBaYb8PwM861/PssIOdUn+409Epfh+BnnGvzdnBD+0x/u/wCsQmVJbIyTgT2hIG15yXg27QlbQyj07U9vU6/YRSu01VJr1Piilyjog+z2PTJ9zqf5TITGTNNHJPi/ymQGaQ9y4HVF2HSNqUyBlCBLkGHfdJLonjeyr2GI3zoTmYVmnQLwitl+R/iFp5DfOUt949UEfTpiScTDYeg8dUYKpJdRtA+8wHHdnxyjaQtI2PaiSFqMwQZtZHKk8iQM8pR5EqgXYIKUtlNjtE4sgsCpvuW28dbzODHYnBVvWPRbZI2aygbW1TJzItxBFwe7vmr0FgaVS9TD4phYgmitVitK/wCSpTJ5g8IKur1CfWqCVuAQCN0wcqN6wxltaMjrRoRTsY/AkOu9tk+8pN724GXmitIrVpqynh/uIq9MKDs3HMrlfqP1mSxNZsLU2h+E5z5K1946wtS0QzYmly/02dSpGgSmwelUfjc92cnNiu63WVuLM9kpmsIzbAkV8WOci1sWOcXFhYfGYmw3zuplP1mKFUi60t3e7AhR8iT4TPaSx+Rzm41DwXq8KHPvuTUPdtABR8gPmZNRa2WYlcjS6VwvrEambeqADVGJ99jckNluGXW9uuZGOq4vsINjCKdnbAzqAZErb8vcP97jSRWqPUF9ml71dr7JcDP1d+FzvPIHnKbFY8VE2EOzQXJSt19ZbgpAyThlvtlBmiTSWyu0klJarpQJNFLKrG2ZAG1u5G48IbVNrYyif7YHzuPvIuIKgAAAD8pHdyPHpJOqeeLo/wDUH0N/tIx9a+TI3pnrjwTQjQTTsGUE0G0e0GxkgGmKcigBaD8I/CfKeZ6/ntYIdzn6Cek1TaifhPlPMvSA3t8IP+W5/lkfYRThvOHpVLGQlbzjqlW3yioTMXpPEk1Xz/MYpDxdXtt1MUdjo+htNnJPi+xlcWk7TZ7KfF9pVs0H2TJNKrw5wrm4kWjmZKEEtE4vZGanF6uSCJzZkktk5y0R2BhaKmPsI+mZNmUfTnNJVXTYcUtsZmysqhR33PWEAg8avszmRffb9Jl8n0WX4JcZA8Ljkdm2qFSk9t7FCGHIFSfqBI9NGOZNzffzEo8VrLXosbqlRRkQQUtbhtjK/gbcbSw0RrNhmyenUpMcyGp7QFzzQnnxtOf3s3xyxrsLjNH3BYcd45yuxOg1dbMoKHerLfzmhXTGDP8Ax6fi4X6GSKGPwr32aqNwGywPlCkiayaMcmrOGUBUp7JsxurMpJHeDzMQ1aQ5escEb+0Db5iWD1iGv4dNo/6SV64NY7m58+4xc2YGrM+2rN7WrOB3hDbPdu8YN9UxYk1nNuFl3bXaO7eBczTes58frEr/AO8PuMXEzyaoYXLbDOLD3qhzOd77NsjkfCW9WlsqAhKoBsmxPYzBR+8Aix7jDNUA3buXKAesJFzbGtAKrbS2YdriN/aU3/X5yvxA2j71ictq+5vyse47j4HhJVU8t3Du7ukiVUv94uQ6K6o5zBFiDZ1/hYcRLfUhL4yj3Fj8qbGVeNU7zvtYnnymg9G9HaxJbglNj4sQo8zLMSua+RPpnpTmCYwjGBYzrmcG5gmMe8E0dCOXivORCFAWWMNqDfCfKeX+kBv3rDDlSbzE9O0kfYN8M8s9ILfvlLuoH6tF7C9ykDweIqb4H1kFXqZGSSEzJVx2j1ihHXMxSFEj3/TbdhfiEqWeT9Nv7MfEPOVHrIPsmidQaTFvKzDvnlJ9NzGkNOg2zEY0NFtySCTGM8VKpnESJ1bSRWSlaNxLdjx+0SERtYXUgdZm8lXjZKHZldJ4cE7t24d9+z9dw7mO+1hCkEDW948eN91/qW8TJmIqi+fA/W1vLzkKtXE5KZooBWoA7KkCxsWy3IDkPEi/Re+R8Hg7BWIAt2mJG4s6WA7/AHpKNXf3/wC3lBvXJ4ZDMcr8JLmwokrpJibinla7bTAbKi/abwMFR1gVhdkZRzysflnIteozDZvZDa4GW1bnArQubKpY8lBPlI6A0OHx6v7hU9wbP5GEOIb+GVuD1TxdWxVBTHBqjAH5C5lm2o2JUWXH7POyM/yu1vpJLDJ9BaQw1ueXjA1awha2r1SijPXx16aAlz+zoLKN5veF0ZoulVF71OXbApnLjYcDlH9iYckQfXCDess1GG0BhVI26ZYcQalQeRE0KasYAZrhkPEbRd/5iZbHxJv3RF5EjyPGVbz0X0e6KNHDmo4s9WxAO8IPdv1uT4iXP/8AAwdwf2WlcZj2a5HnJzGasPj8HbKpTsaxgmMezQTGa6IDHgmMe5gWMdCFeIGNvOgxhZY6T/AbpPJ/SA/78o5UF/mM9W0ufYHw855Dr9U/f27qKeZkV0HuUG3A13yMbt7oDEPkZIRTs0UGTFKyZ7ppup7IfEvnKf1s5FCXZJdErC1c5Y0607FJR6Ex4rRvrJ2KMQNqk5635zkUYgiV4UVoopCWxlVidHF2PasvS5l9R1CpEAtXfMA5Ko3i/fFFM78bGvYmskrH/wDoegP+JU+af/WPXUrDcWqHqy/YTkUr+xD+CXNkrD6qYRSAaIY8yzH6E2litKjRUbNMKCQvZUDNjYboopJY4x6QrbHkD+rQLnu8oopYIi16YYFWUFSLEE7wZHTConui3PMn6nOdihxV2K2Br1Lf5R95d6JxG0myfeXLwO79IopOPYpEpjBMYopaQBsYNjORRiBsYFjFFGAy86pzEUUAJ2mz7HxX+YTxrXqp/wC4Vu6mg+kUUj7DXZnNuR675GKKMCmLRRRSsmf/2Q=="
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h4 className="font-bold">Aanya Roy</h4>
                    <span className="text-xs dark:text-gray-600">
                      5 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold">4.8</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  InnerSelf helped me slow down and reconnect with my breath.
                  The guided journaling prompts were like gentle whispers
                  guiding me back to myself.
                </p>
                <p>
                  I feel more grounded, more present. A must for anyone seeking
                  mindful transformation.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h4 className="font-bold">Ravi Mehta</h4>
                    <span className="text-xs dark:text-gray-600">
                      1 week ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold">5.0</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  The meditative playlists and affirmations are beautifully
                  curated. I start my mornings with InnerSelf and it sets the
                  tone for the day.
                </p>
                <p>
                  Thank you for creating something so authentic and soulful.
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h4 className="font-bold">Maya Fernandes</h4>
                    <span className="text-xs dark:text-gray-600">
                      3 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold">4.6</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I joined InnerSelf during a tough season in life. The
                  reflective exercises helped me understand my emotions and set
                  healthy boundaries.
                </p>
                <p>
                  It’s like therapy for the soul—gentle, healing, and
                  empowering.
                </p>
              </div>
            </div>

            {/* Review 4 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src="https://c8.alamy.com/comp/CYMFBW/indian-woman-in-traditional-clothing-CYMFBW.jpg"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h4 className="font-bold">Samar Banerjee</h4>
                    <span className="text-xs dark:text-gray-600">
                      6 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold">4.9</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  At 60, I thought self-growth apps were for the young.
                  InnerSelf changed that. The calm wisdom in its content speaks
                  to all generations.
                </p>
                <p>
                  I feel like I’m learning to live all over again—slowly, fully,
                  with grace.
                </p>
              </div>
            </div>

            {/* Review 5 */}
            <div className="flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800 mr-4">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ_CJC7hGwQkWdh4FZwtoFWWkCC_9oOzLBNg&s"
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                  <div>
                    <h4 className="font-bold">Ishaan Verma</h4>
                    <span className="text-xs dark:text-gray-600">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 512 512"
                  ></svg>
                  <span className="text-xl font-bold">4.7</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>
                  I stumbled upon InnerSelf while looking for a better night
                  routine. The sleep stories and mindful breathing practices are
                  just magical.
                </p>
                <p>
                  It's become my digital diary, my nightly ritual, my peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Home;
