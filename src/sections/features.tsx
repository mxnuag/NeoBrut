import Marquee from 'react-fast-marquee';

const Star = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 402 402"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M401.8 180.799H303.3L394.4 143.299L379 105.799L286.9 143.699L357.3 73.2992L328.7 44.6992L258.3 115.099L296.2 22.9992L258.7 7.59922L221.2 98.6992V0.199219H180.8V98.5992L143.3 7.59922L105.8 22.9992L143.7 115.099L73.3002 44.6992L44.7002 73.2992L115.1 143.699L23.0002 105.799L7.60019 143.299L98.7002 180.799H0.200195V221.199H98.6002L7.60019 258.699L23.0002 296.199L115.1 258.199L44.7002 328.699L73.3002 357.299L143.8 286.899L105.8 378.999L143.3 394.399L180.8 303.399V401.799H221.2V303.399L258.7 394.399L296.2 378.999L258.2 286.899L328.7 357.299L357.3 328.699L286.9 258.199L379 296.199L394.4 258.699L303.4 221.199H401.8V180.799Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  );
};

const Star2 = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 104 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.5158 22.3147L39.2758 15.0347C39.1888 12.4283 36.3929 11.0396 34.4854 12.5271L29.1596 16.5188C28.651 16.8923 28.0135 17.0931 27.3588 17.0792L19.7258 16.9147C17.1145 16.8603 15.3291 19.6797 16.8072 21.5856L21.3273 27.7593C21.6807 28.2525 21.8735 28.8744 21.8735 29.5158L21.8735 37.1592C21.8735 39.7615 24.6479 41.1865 26.5268 39.5726L32.0992 34.8558C32.5381 34.4755 33.1181 34.2703 33.7178 34.2703L41.3592 34.2703C43.9734 34.2703 45.7754 31.4266 44.271 29.5158L39.5158 22.3147Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  );
};

const Star3 = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 434 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M433.371 220.62L236.371 220.62L299.371 67.62C300.371 64.62 298.871 61.12 296.871 61.12H137.871L83.371 207.12C82.371 210.12 84.871 213.62 88.371 213.62H229.371L166.371 367.62C165.371 370.62 167.871 374.12 171.371 374.12H330.371L384.871 227.62C386.871 224.12 384.371 220.62 380.871 220.62H433.371Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  );
};

const Star4 = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 1L31.1803 17.0902L48.0902 17.0902L34.4549 27.4549L40.6353 43.5451L25 33.0902L9.36475 43.5451L15.5451 27.4549L1.90981 17.0902L18.8197 17.0902L25 1Z"
        className="stroke-text dark:stroke-darkText"
        strokeWidth="2"
      />
    </svg>
  );
};

const Plus = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 1V49M1 25H49"
        className="stroke-text dark:stroke-darkText"
        strokeWidth="2"
      />
    </svg>
  );
};

const Pentagon = () => {
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 1L47.5528 19.454L38.8379 48H11.1621L2.44718 19.454L25 1Z"
        className="fill-text dark:fill-darkText"
      />
    </svg>
  );
};

export default function Features() {
  const icons = [Star, Star2, Star3, Star4, Plus, Pentagon];

  const features = [
    {
      title: 'Bold Geometry',
      text: 'Neobrutalism embraces bold geometric shapes, creating a striking visual impact that challenges traditional design norms.',
    },
    {
      title: 'Raw Materials',
      text: 'The movement emphasizes the use of raw materials, showcasing their natural textures and imperfections in a beautiful way.',
    },
    {
      title: 'Vibrant Colors',
      text: 'Neobrutalism often features vibrant and contrasting colors that evoke strong emotions and draw attention.',
    },
    {
      title: 'Minimalist Aesthetic',
      text: 'With a focus on simplicity, Neobrutalism strips away unnecessary elements to highlight functionality and form.',
    },
    {
      title: 'Functional Design',
      text: 'Every element serves a purpose in Neobrutalism, merging aesthetics with practicality to create user-friendly spaces.',
    },
    {
      title: 'Cultural Commentary',
      text: 'This design style often reflects social issues and cultural commentary, making it not just visually appealing but also thought-provoking.',
    },
  ];

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Embracing Neobrutalism in Modern Design
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i];

            return (
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
                key={i}
              >
                <Icon />

                <h4 className="mt-2 text-xl font-heading">
                  {feature.title}
                </h4>
                <p>{feature.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div>
        <Marquee
          className="border-border dark:border-darkBorder dark:bg-darkBg border-t-2 border-b-2 bg-bg py-7"
          gradient={false}
          speed={50}
        >
          <div className="flex gap-10 px-5">
            <h4 className="text-lg font-bold">Bold Geometry</h4>
            <h4 className="text-lg font-bold">Raw Materials</h4>
            <h4 className="text-lg font-bold">Vibrant Colors</h4>
            <h4 className="text-lg font-bold">Minimalist Aesthetic</h4>
            <h4 className="text-lg font-bold">Functional Design</h4>
            <h4 className="text-lg font-bold">Cultural Commentary</h4>
          </div>
        </Marquee>
      </div>


    </div>
  );
}
