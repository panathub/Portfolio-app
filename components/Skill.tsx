import Card from "./ui/Card";

export default function Skill() {
  return (
    <>
      <section id="skill" className="bg-transparent">
        <div className="px-4 py-8 mx-auto max-w-7xl lg:py-32 lg:px-6">
          <div
            className="max-w-screen-sm mx-auto mb-8 text-center lg:mb-16"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl dark:text-white">
              Project and Experience
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </p>
          </div>
          <Card />
        </div>
      </section>
    </>
  );
}
