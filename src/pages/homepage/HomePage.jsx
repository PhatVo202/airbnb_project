import React, { useRef, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import LightGallery from "lightgallery/react";
import { Link } from "react-router-dom";
import { Card } from "antd";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Meta from "antd/es/card/Meta";
import { useQuery } from "@tanstack/react-query";
import { fetchPositionApi } from "../../apis/position";
import { TOKEN_CYBERSOFT } from "../../constants";
import Loading from "../../components/loading/Loading";
import imgVideo from ".././../../public/video2.mov";

const anywherePlaces = [
  {
    name: "Toàn bộ nhà",
    link_slug: "ho-chi-minh",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329222%2Fmjwqhra4wbzlvoo2pe27.jpg&w=1920&q=75",
  },
  {
    name: "Chỗ ở độc đáo",
    link_slug: "nha-trang",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329186%2Ffmoml05qcd0yk2stvl9r.jpg&w=1920&q=75",
  },
  {
    name: "Trang trại và thiên nhiên",
    link_slug: "da-lat",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329121%2Fguagj5r2bkccgr1paez3.jpg&w=1920&q=75",
  },
  {
    name: "Cho phép mang theo thú cưng",
    link_slug: "da-nang",
    url: "https://rawn-airbnb.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frawn%2Fimage%2Fupload%2Ff_webp%2Fq_auto%3Abest%2Fv1628329252%2Fgqhtg9ua6jdrffhbrfv1.jpg&w=1920&q=75",
  },
];

const explorePlaces = [
  {
    time: "15 phút",
    image:
      "https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp",
  },
  {
    time: "3 giờ",
    image:
      "https://res.cloudinary.com/rawn/image/upload/lbe3gpqkrwmzt98ce2nj.webp",
  },
  {
    time: "6.5 giờ",
    image:
      "https://res.cloudinary.com/rawn/image/upload/xi99sldgebhfvd3n66yx.webp",
  },
  {
    time: "15 phút",
    image:
      "https://res.cloudinary.com/rawn/image/upload/hnevi0eqxhxjgh6skplj.webp",
  },
  {
    time: "7.5 giờ",
    image:
      "https://res.cloudinary.com/rawn/image/upload/v1skk44cynr7gauhzb4e.webp",
  },
  {
    time: "45 phút",
    image:
      "https://res.cloudinary.com/rawn/image/upload/tqrm3cthowneesuafbp0.webp",
  },
  {
    time: "30 phút",
    image:
      "https://res.cloudinary.com/rawn/image/upload/tgt8dxlfwdh41jkptxeg.webp",
  },
  {
    time: "5 giờ",
    image:
      "https://res.cloudinary.com/rawn/image/upload/bt5jrxsl5ljq5bmfqqw0.webp",
  },
];

export default function HomePage() {
  const div2Ref = useRef(null);
  const firstSectionRef = useRef(null);

  const { data, isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const res = await fetchPositionApi(1, 8);
      return res.data.content.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Header />

      {/* <div className="bg-black">
        <div
          ref={div2Ref}
          className="bg-black w-[95%] mx-auto h-[calc(100vh-64px)] lg:h-[calc(100vh-48px-64px)]"
        >
          <div className="space-y-28 lg:space-y-6">
            <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
              <img
                data-lg-size="1600-2400"
                className="mx-auto w-full cursor-pointer"
                alt=""
                src="https://airbnb-app.vercel.app/Images/banner_airbnb.webp"
              />
            </LightGallery>
            <p className="text-center text-white font-bold text-2xl">
              Nhờ có Host, mọi điều đều có thể
            </p>
          </div>
        </div>
      </div> */}
      <div className="w-full h-screen relative">
        <video
          src="/public/video2.mov"
          width="100%"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ display: "block", objectFit: "cover" }}
        />
        <img
          src="https://i.ibb.co/v4KS2mc/swoosh-hero.png"
          alt=""
          className="z-100 absolute w-full -bottom-10 left-0"
        />
      </div>
      <div className="w-[95%] mx-auto my-11">
        <h1 className="font-bold text-2xl mb-4">Khám phá điểm đến gần đây</h1>
        <div className="grid grid-cols-4 gap-4">
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className="p-6 border-2 border-gray-100 rounded-xl hover:scale-105 hover:transition-all hover:ease-in hover:duration-200 hover:shadow-2xl"
              >
                <div className="flex gap-2">
                  <img
                    src={explorePlaces[index].image}
                    alt=""
                    className="w-12 rounded-xl"
                  />
                  <div>
                    <h3 className="font-bold">{item.tinhThanh}</h3>
                    <p className="font-light">
                      {explorePlaces[index].time} lái xe
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[95%] mx-auto mt-7 mb-20">
        <h1>Ở bất cứ đâu</h1>
        <div className="grid grid-cols-4 gap-4">
          {anywherePlaces.map((item) => {
            return (
              <div
                key={item.id}
                className="p-6 border-2 border-gray-100 rounded-xl hover:scale-105 hover:transition-all hover:ease-in hover:duration-200 hover:shadow-2xl"
              >
                <h3 className="font-bold">{item.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
